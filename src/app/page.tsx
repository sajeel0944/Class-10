import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className="  border-2 border-slate-200 bg-slate-200 sm:bg-slate-300 sm:border-slate-300 md:flex md:my-24 md:bg-slate-400 md:border-slate-400 lg:bg-slate-500 lg:border-slate-500 xl:bg-slate-600  xl:border-slate-600 2xl:bg-slate-700 2xl:border-slate-700 ">


        <div className="sm:flex md:w-full">

          <div className=" w-[95%] place-items-center my-6  mx-3 bg-white hover:shadow-md hover:shadow-slate-700 py-3 rounded-md sm:hover:shadow-slate-900">
            <Image src={"/picture/figma.jfif"} alt="" width={370} height={100}  className="w-5/6"/>
            <p className="text-xl font-semibold py-3">Figma </p>
            <p className="font-semibold ">RS : 2000</p>
            <button  className="font-semibold border- border-black w-28 h-8 bg-blue-500 my-3 hover:w-32 hover:h-9"><p>BUY NOW</p></button>
          </div>

          <div className=" w-[95%] place-items-center my-6  mx-3 bg-white hover:shadow-md hover:shadow-slate-700 py-3 rounded-md sm:hover:shadow-slate-900">        
            <Image src={"/picture/figma.jfif"} alt="" width={370} height={100}  className="w-5/6"/>
            <p className="text-xl font-semibold py-3">Figma</p>
            <p className="font-semibold ">RS : 2000</p>
            <button  className="font-semibold border- border-black w-28 h-8 bg-blue-500 my-3 hover:w-32 hover:h-9"><p>BUY NOW</p></button>
          </div>

        </div>

        <div className=" w-[95%] place-items-center my-6  mx-3 bg-white hover:shadow-md hover:shadow-slate-700 py-3 sm:w-[45%] rounded-md sm:hover:shadow-slate-900 md:w-[44%]">  
          <Image src={"/picture/figma.jfif"} alt="" width={370} height={100}  className="w-5/6"/>
          <p className="text-xl font-semibold py-3">Figma</p>
          <p className="font-semibold ">RS : 2000</p>
          <button  className="font-semibold border- border-black w-28 h-8 bg-blue-500 my-3 hover:w-32 hover:h-9"><p>BUY NOW</p></button>
        </div>


      </div>



    </>
  );
}
