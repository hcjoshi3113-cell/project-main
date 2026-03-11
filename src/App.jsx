import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/ui/About";
import Trips from "./components/pages/Trip";
import TripDetail from "./components/pages/Tripdetail";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path: "trips",
          element: <Trips />,
        },
        {
          path: "trip/:id",
          element: <TripDetail />,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
