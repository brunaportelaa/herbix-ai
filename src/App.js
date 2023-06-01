import { Result } from "./screens/Result";
import { Home } from "./screens/Home";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ImageContext from "./context/ImageContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resultado",
    element: <Result />,
  },
]);

function App() {
  const [image, setImage] = useState({
    image: undefined,
    label: undefined,
  });

  console.log(image);

  const onImageChange = (s) => {
    setImage(s);
  };

  return (
    <ImageContext.Provider
      value={{ image: image, onImageChange: onImageChange }}
    >
      <RouterProvider router={router} />
    </ImageContext.Provider>
  );
}

export default App;
