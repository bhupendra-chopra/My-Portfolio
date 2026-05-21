import { Toaster } from "sonner"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from '@/pages/Portfolio';

function App() {
  return (
    <Router basename="/My-Portfolio">
      <Routes>
        <Route path="/*" element={<Portfolio />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
