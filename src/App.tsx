import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./features/home";
import FirstFeature from "./features/first-feature";
import SecondFeature from "./features/second-feature";
import ThirdFeature from "./features/third-feature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/first-feature",
    element: <FirstFeature />,
  },
  {
    path: "/second-feature",
    element: <SecondFeature />,
  },
  {
    path: "/third-feature",
    element: <ThirdFeature />,
  },
]);

function App() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", marginTop: 20 }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
