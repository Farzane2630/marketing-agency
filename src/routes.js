import HomePage from './Components/HomePage';
import Blog from './Components/BlogPage/Blog';
import MainBlog from './Components/BlogPage/MainBlog';
import NotFound from './NotFound';

let routes = [
  { path: "/", element: <HomePage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <MainBlog /> },
  { path: "*", element: <NotFound /> },
];

export default routes
