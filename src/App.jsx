import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import JobsPages from './pages/JobsPages';
import NotFound from './pages/NotFound';
import JobPage from './pages/JobPage';
import AddJob from './pages/AddJob';
import EditPage from './pages/EditPage';

function App() {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    });

    return res.json();
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });

    return res.json();
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return res.json();
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
        <Route path='/' element={<Home />}/> {/* default route for path ='/' */}
        <Route path='/jobs' element={<JobsPages/>}/>
        <Route path='/add-job' element={<AddJob addJobSubmit={addJob}/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>}/>
        <Route path='/edit-jobs/:id' element={<EditPage updateJobSubmit={updateJob}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;


