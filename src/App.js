import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Title from './components/Title';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div >
      <Title />
      <div className='container'>
      <Outlet />
      </div>
     <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
    {
      path:'/',
      element:<Home />
    },
    {
    path:"/projects",
    element: <Projects />
  },
  {
    path:"/contact",
    element: <Contact />
  } 
    ]
  }  
])


export default App;
