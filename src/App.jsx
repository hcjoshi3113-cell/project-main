import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout"
import Trips from "./components/pages/Trip";
import TripDetail from "./components/pages/TripDetail";
import Auth from "./components/auth/Auth";
import About from "./components/ui/About";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";

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
        },
        {
          path:"/auth",
          element:<Auth/>
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
