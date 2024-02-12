import Folder from '@/components/folder/Folder';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Shared from '@/components/shared/Shared';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
