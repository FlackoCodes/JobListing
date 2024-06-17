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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
        <Route index element={<Home />}/>
        <Route path='/jobs' element={<JobsPages/>}/>
        <Route path='/jobs/:id' element={<JobPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </ Route>
  )
)

function App() {

  return <RouterProvider router={router} />
}

export default App

