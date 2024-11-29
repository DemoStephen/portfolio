import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Error from "./Pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./Pages/Services";
import TechStacks from "./Pages/TechStacks";
import BlogPost from "./Pages/BlogPost";
import Articles from "./Pages/Article";
import ContactPage from "./Pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Stack",
    element: <TechStacks />,
  },
  {
    path: "/Blog",
    element: <BlogPost />,
  },
  {
    path: "/Articles",
    element: <Articles />,
  },
  {
    path: "/Contact",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
