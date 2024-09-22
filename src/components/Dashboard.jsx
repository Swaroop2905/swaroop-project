
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <>
      
      <div className=" bg-background">
        {/* <Navbar/>
      <About/>
      <div><center className='text-5xl mb-28 text-whitenew'>My Skills</center></div>
        <SkillCard/>
        <Experience/> */}

        <div className="h-96 md:mx-32">
          <div className="flex mx-12 mt-48 justify-between">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2">
                <div className="flex-col items-center space-y-4">
                  <div>
                  <h1 className="font-semibold text-3xl text-whitenew mr-4">
                    Create and Sell
                  </h1>
                  </div>
                 <div>
                 <h2 className="text-3xl text-yellow">Custom Products</h2>
                 </div>
                </div>

                <h3 className=" text-3xl text-white font-bold">
                  Custom Products
                </h3>
                <div className="flex space-x-3">
                <div className="mt-5">
                  <a href="#contact">
                    {" "}
                    <button className="border-1 bg-green-400 border-yellow rounded-lg  text-whitenew text-md font-normal px-8 py-2 bg-navColor">
                      Start for free
                    </button>
                  </a>
                </div>
                <div className="mt-5">
                  <a href="#contact">
                    {" "}
                    <button className="border-1 bg-gray-300 border-yellow rounded-lg  text-whitenew text-md font-normal px-8 py-2 bg-navColor">
                      How it works?
                    </button>
                  </a>
                </div>
                </div>
              </div>
              <div className="sm:w-1/2 lg:w-1/2 ">
                <img
                  className="hidden lg:block object-cover h-60 w-96 rounded-lg mr-48"
                  src={"https://www.shutterstock.com/image-photo/excited-shocked-young-girl-standing-260nw-2278025905.jpg"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;



