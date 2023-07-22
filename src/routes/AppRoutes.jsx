import { Routes, Route } from 'react-router-dom';
import { ComoLlegar, Home, QueOfrecemos, QuienesSomos } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/llegar" element={<ComoLlegar />} />
      <Route path="/ofrecemos" element={<QueOfrecemos />} />
      <Route path="/somos" element={<QuienesSomos />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}