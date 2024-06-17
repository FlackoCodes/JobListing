/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import JobList from './JobList'

const BrowseJobs = ({ isHome = false }) => {

  const [ jobs, setJobs] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(()=>{
    const fethcJobs = async () =>{

      const apiURL = isHome ? 
      '/api/jobs?_limit=3'
       : '/api/jobs'

      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data)
      } catch (error) {
        console.log('error fecthing data', error);
      } finally{
        setLoading(false)
      }
    }
    fethcJobs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (<h2>Loading</h2>) : (
          <>
             {
                jobs.map((job) => (
                 <JobList key={job.id} job={job} />
           ))
         }
        </>
        )
        }
    
    </div>
  </div>
</section>
    </>
  )
}

export default BrowseJobs