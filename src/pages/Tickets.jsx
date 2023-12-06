import React ,{useState} from "react";
import { FiScissors } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { BsTicket } from "react-icons/bs";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Tickets = () => {
  const { id } = useParams();
  let moviesData = JSON.parse(localStorage.getItem("movies")) || [];
  let basket = JSON.parse(localStorage.getItem("data")) || [];
  let price = JSON.parse(localStorage.getItem("ticketData")) || [];
  let userInfo = JSON.parse(localStorage.getItem("user")) || [];
  const selectedMovie = moviesData.filter((x) => x.imdbID === id);
  const items = new Array(basket).fill(null);
    const imgUrl=selectedMovie[0].Posters
  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.finalTicket');
    setLoader(true);
    html2canvas(capture ,{
        useCORS: true
    }).then((canvas)=>{
      const imgData = canvas.toDataURL(imgUrl);
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }
  return(
    <>
      <div className="finalTicket p-20 m-20 items-center justify-center">
        {/* logo */}
        <div className="flex bg-red-500 p-8 cursor-pointer flex-row items-center gap-2">
          <img
            className="w-[30px] h-[25.98px]"
            src="/images/airplane.svg"
            alt="ticketlogo"
          />
          <p className="text-neutral-50 text-2xl font-semibold">
            TickTicketing
          </p>
        </div>
        {/* main part */}
        <div className="bg-gray-100 p-8">
          <h1 className="text-xl">Invoice</h1>
          {/* info */}
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col text-gray-500 text-base gap-2 mt-3">
              <p>Invoice to {userInfo.name}</p>
              <p>{userInfo.address}, {userInfo.city}</p>
              <p>{userInfo.state}, {userInfo.country}</p>
            </div>
            <div className="flex flex-col text-gray-500 text-base gap-2 mt-3">
              <p>Invoice ID : YCCURW-000000</p>
              <p>Order Date : 10/05/2022</p>
            </div>
          </div>
          {/* table */}
          <div className="mt-12 relative">
            <table className="w-full border-2  border-[#D5DAE1] text-center">
              <tr className="bg-[#F7F8F9]  text-[#556987] border-b-2 border-[#D5DAE1]">
                <th className="">#</th>
                <th>Event Detail</th>
                <th>Event Type</th>
                <th>Ticket</th>
                <th>Unit Price</th>
                <th>Discount</th>
                <th>Total</th>
              </tr>
              <tr className="text-lg  border-b-2 border-[#D5DAE1]">
                <td className="">1</td>
                <td>{selectedMovie[0].Title}</td>
                <td>movie</td>
                <td>*{basket}</td>
                <td>$500.00</td>
                <td>${0.03 * basket * 500.0}</td>
                <td>{price}</td>
              </tr>
              <tr className="h-[100px]"></tr>
            </table>
            <div className="flex flex-row absolute bottom-8 right-10 justify-center items-center">
              <h1 className="text-3xl font-semibold">
                Invoice Total : USD ${price}
              </h1>
            </div>
          </div>

          <div className="flex flex-row mt-8 items-center justify-start">
            <FiScissors className=" w-4 h-4" />
            <hr className="border-[ #556987] border-dashed border-2 w-full  " />
          </div>

          {/* cards */}
          {items.map((_, idx) => <div key={idx}>
          <div className="mt-6">
            <div className="p-6 w-[592px] h-[250px] bg-white gap-6 flex flex-row">
              <div>
                <img
                  className="w-[110px] h-[122px] rounded-lg"
                  src={selectedMovie[0].Poster}
                  alt=""
                />
              </div>
              <div className="gap-4 flex-col">
                <h1 className="text-2xl font-semibold">
                  {selectedMovie[0].Title}
                </h1>
                <p className="text-gray-400 mt-4">Sat, Apr 30, 2022 11:30 AM</p>
                <div className="flex flex-row gap-3 mt-4">
                  <BsTicket className="w-6 h-6 text-red-500" />
                  <p className="text-lg">*1</p>
                </div>
                <p className="text-gray-400 mt-4">
                  Total:
                  <span className="text-neutral-900 font-medium">$500.00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-8 items-center justify-start">
            <FiScissors className=" w-4 h-4" />
            <hr className="border-[ #556987] border-dashed border-2 w-full  " />
          </div>
          </div> )}
          <div className="p-8 flex justify-end items-center">
          <button
                className=" bg-red-600 px-4 py-2 rounded-md text-white"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
          </div>
         

        </div>
      </div>
    </>
  );
};

export default Tickets;
