import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './components/Home/Home'
import Courses from './components/Courses/Courses'
import Dashboard from './components/Dashboard/Dashboard'
import About from './components/About/About'
import Errorpage from './components/Errorpage/Errorpage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'courses',
          element: <Courses></Courses>,
          loader: () => fetch('courses.json')
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',
      element: <Errorpage></Errorpage>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
