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
const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <Error />,
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
export default function App() {
  return <RouterProvider router={rounter} />;
}
