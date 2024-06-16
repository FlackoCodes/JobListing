/* eslint-disable react/prop-types */
import { useState } from "react"
import { FaMapMarker } from "react-icons/fa";

const JobList = ({job}) => {

    const [showDescription, setshowDescription] = useState(false)
 
    let description = job.description;
    if (!showDescription) {
        description = description.substring(0, 90) + '...'
    }

  return (
    <>
          <div className="bg-white rounded-xl shadow-md relative" key={job.id}>
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">
          {description}
          <button 
          onClick={()=> setshowDescription((prevState)=>!prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600">
            {showDescription? 'Less' : 'More'}
          </button>
        </div>
      

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
            <FaMapMarker className="inline text-lg mb-1 mr-.5" />
            {job.location}
          </div>
          <a
            href={job/`${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default JobList