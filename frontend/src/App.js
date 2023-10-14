import './App.css';
import Login from './Components/Login'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Signup from './Components/Signup';
import Dashboardchat from './Components/pages/Dashboardchat';

function App() {

  const appRouter=createBrowserRouter([
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/Signup",
        element:<Signup/>
      },
      {
        path:"/Dashboardchat",
        element:<Dashboardchat/>
      },
])

  return (
    <div className="">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
