import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Terminal from './Pages/Projects/Terminal';

const routesConfig = [
  { path: '/home', title: 'Home', component: <Home /> },
  { path: '/about', title: 'About', component: <About /> },
  { path: '/projects', title: 'Projects', component: <Projects />},
  { path: '/projects/terminal', title: 'Terminal', component: <Terminal />}
];

export default routesConfig;