import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
