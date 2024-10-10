import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

const routesConfig = [
  { path: '/home', title: 'Home', component: <Home /> },
  { path: '/about', title: 'About', component: <About /> },
  { path: '/projects', title: 'Projects', component: <Projects />}
];

export default routesConfig;