import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Coaches from './Pages/Coaches';
import FreeTrial from './Pages/FreeTrail';
import Facility from './Pages/Facilite';

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
      { path: 'programs', element: <Programs /> },
      { path: 'services', element: <Services /> },
      { path: 'facility', element: <Facility /> },
      { path: 'coaches', element: <Coaches /> },
      { path: 'contact', element: <Contact /> },
      { path: 'freetrail', element: <FreeTrial /> },
     ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
