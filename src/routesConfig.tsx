import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Terminal from './Pages/Projects/Terminal';
import Post from './Pages/Post';
import Posts from './Components/Posts';
import User from './Pages/User';

const routesConfig = [
  { path: '/home', title: 'Home', component: <Home />, navbar: true },
  { path: '/about', title: 'About', component: <About />, navbar: true },
  { path: '/projects', title: 'Projects', component: <Projects />, navbar: true },
  { path: '/projects/terminal', title: 'Terminal', component: <Terminal />, navbar: false },
  { path: '/posts', title: 'Posts', component: <Posts />, navbar: false },
  { path: '/post/:id', title: 'Post', component: <Post />, navbar: false },
  { path: '/user/:id', title: 'User', component: <User />, navbar: false}
];

export default routesConfig;