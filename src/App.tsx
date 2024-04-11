import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterProvider } from "react-router";
import Root from "./routes/root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
