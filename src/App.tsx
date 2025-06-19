import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Armada from "./Layout/Armada";
import Layout from "./Pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/layanan",
          element: <Armada></Armada>,
        },
        {
          path: "/artikel",
          element: <Armada></Armada>,
        },
        {
          path: "/tentangkami",
          element: <Armada></Armada>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
