import { Routes, Route } from 'react-router-dom'
import {Contact, Home, NotFound } from "../layouts/Index.jsx"

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Rutas;

