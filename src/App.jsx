import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import JobsPages from './pages/JobsPages'
import NotFound from './pages/NotFound'
import JobPage from './pages/JobPage'
import AddJob from './pages/AddJob'



function App() {
  const addJob = async (newJob)=>{
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    });

    return;
    };

    // delJob

    const deleteJob = async (id)=>{
      console.log('del, ...', id);
    }
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
          <Route index element={<Home />}/>
          <Route path='/jobs' element={<JobsPages/>}/>
          <Route path='/add-job' element={<AddJob addJobSubmit={addJob}/>}/>
          <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </ Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App

