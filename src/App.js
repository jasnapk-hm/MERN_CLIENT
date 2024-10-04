import logo from './logo.svg';
import './App.css';
import User from './getAllUsers/Users';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddUser from './Adduser/addUsers';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser/>,
    },
  
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
