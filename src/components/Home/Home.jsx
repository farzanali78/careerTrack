import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
function Home() {
  const [isAdmin,setisAdmin] = useState(false)
  
  useEffect(()=>{
  const admin = (JSON.parse(localStorage.getItem("adminCred")))
  setisAdmin(admin[0].isAdmin)
  },[])

  
  return (
    <>
      <section className="w-full min-h-screen bg-[#F7F7F5] flex items-center justify-center px-6">
        <div className="max-w-6xl w-full flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl font-bold text-white">
            <Typewriter
              options={{ 
                strings: isAdmin ? ["Manage your platform", "Welcome back, Admin"] : ["Find your career", "Track your growth"],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-5xl font-bold text-[#1B3A6B]",
                cursorClassName: "text-[#1B3A6B]",
              }}
            />
          </h1>

           <div className="text-lg text-[#1B3A6B] max-w-xl">
            <Typewriter
              options={{
                strings: isAdmin
                ? [
                 "Monitor applicants, manage interviews and keep careerTrack running smoothly.",
                ] 
                :["Personalized roadmaps, skill assessments and job matches all in one place."],
                autoStart: true,
                loop: false,
                deleteSpeed: Infinity,
                delay: 30,
                wrapperClassName: "text-lg text-[#1B3A6B]",
                cursorClassName: "text-[#1B3A6B]",
              }}
            />
          </div>

          <button className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer">
            {
              isAdmin ? "Go to Dashboard" : "Get Started"
            }
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
