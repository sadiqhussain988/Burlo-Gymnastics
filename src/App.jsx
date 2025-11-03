import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Coaches from './components/Home/Coaches';
import Facilitiee from './Pages/Facilite';


const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet /> 
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
     element: <MainLayout />,
     children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'facility', element: <Facilitiee /> },
      { path: 'coches', element: <Coaches /> },
      { path: 'contact', element: <Contact /> },
     ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
