
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import AdmissionForm from './pages/AdmissionForm'
function App() {
  return (
    <BrowserRouter>
       <ScrollToTop />
      <Navbar />

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     
      <Footer />

    </BrowserRouter>
  );
}

export default App;