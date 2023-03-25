import './App.css'
import router from './Routes/Route';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <div className="">
      <h2 className='text-2xl'>
        <RouterProvider router={router}></RouterProvider>
      </h2>
    </div>
  )
}

export default App
