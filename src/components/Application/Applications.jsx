import { useEffect, useState } from "react";
import { X, Pencil, ChevronDown } from "lucide-react";
import { div, p } from "motion/react-client";
import { toast } from "react-toastify";

function Application() {
  const [userApplications, setUserApplications] = useState([]);
  // const [updatedStatus,setUpdatedStatus] = useState("")
  const currentUser = JSON.parse(localStorage.getItem("loggedIn_User")) || {};
  const storageKey = `applications_${currentUser.userName}`;
  const getApplicationData = () => {
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    setUserApplications(data);
  };

  useEffect(() => {
    getApplicationData();
  }, []);

  useEffect(() => {
  if (!currentUser.userName) return; // guard, same pattern as before
  const storageKey = `applications_${currentUser.userName}`;
  localStorage.setItem(storageKey, JSON.stringify(userApplications));
}, [userApplications, currentUser.userName]);


const newstatus = (id,newJobStatus) =>{
  setUserApplications((prev)=> 
    prev.map((app)=>
      app.id === id ? {...app,status:newJobStatus}:app))
}

  const statusColors = {
    pending: "bg-amber-100 text-amber-700 border-amber-400",
    applied: "bg-blue-100 text-blue-700 border-blue-400",
    interview: "bg-purple-100 text-purple-700 border-purple-400",
    accepted: "bg-green-100 text-green-700 border-green-400",
    rejected: "bg-red-100 text-red-700 border-red-400",
  };

 const removeJob= (id) =>{
localStorage.setItem(storageKey,JSON.stringify(userApplications.filter((t) => t.id !== id)))
getApplicationData();
// toast.error("Job Removed!")
 }

  return (
    <>
<div className="bg-[#F7F7F5] min-h-screen p-6">
   {
    userApplications.length === 0 ? (
      <div className="flex justify-center items-center">
         <p className="text-gray-500">No applications tracked yet.</p>

      </div>
    ) : (
        <div className="max-w-3xl mx-auto">
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {userApplications.map((app) => (
              <li
                className={`bg-white rounded-xl shadow-md p-4 border-l-4 flex justify-between items-start gap-4 ${statusColors[app.status].split(" ")[2]}`}
                key={app.id}
              >
                <div>
                  <p className="font-semibold text-[#1B3A6B]">{app.company}</p>
                  <p className="text-gray-600 text-sm">{app.role}</p>

                  <span
                    className={`${statusColors[app.status]} inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {app.status}
                  </span>

                  <span className="bg-gray-100 text-gray-700 border-gray-400 inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold">
                    {app.Date}
                  </span>
                </div>

                <div className="flex gap-1">
                  <button  className="flex items-center justify-between gap-2 px-2 py-2 border rounded-lg">
                    <Pencil size={20} className="text-gray-500" />
                    {/* <ChevronDown size={18} className="text-gray-500" /> */}
                      <select
                      value=""
                      onChange={(e) => newstatus(app.id,e.target.value)}
                      
                    >
                     <option value="" disabled>
                        Change status
                      </option>
                      <option value="pending">Pending</option>
                      <option value="applied">Applied</option>
                      <option value="interview">Interview</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>

                  </button>
                  <button onClick={()=>removeJob(app.id)} className="p-1 cursor-pointer rounded-full hover:bg-gray-100 transition-colors">
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
    )
  }
  </div>
      
    </>
  );
}

export default Application;
