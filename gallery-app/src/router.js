import { createBrowserRouter } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Generation from "./pages/Generation";

export const router = createBrowserRouter([
  { path: "/", element: <Gallery /> },
  { path: "/g/:generation_id", element: <Generation /> },
]);
