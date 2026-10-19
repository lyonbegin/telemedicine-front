import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClinicalFrontendRoot from './clinical/ClinicalFrontendRoot';
import LegacyTelemedicineApp from './LegacyTelemedicineApp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clinical/*" element={<ClinicalFrontendRoot />} />
        <Route path="*" element={<LegacyTelemedicineApp />} />
      </Routes>
    </BrowserRouter>
  );
}