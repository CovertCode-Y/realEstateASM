// AppRoutes.jsx
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
// import PropertyDetailsPage from '../pages/PropertyDetailsPage';
// import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/property/:id" element={<PropertyDetailsPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes; 
