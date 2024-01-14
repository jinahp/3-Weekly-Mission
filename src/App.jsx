import Folder from 'components/folder/Folder';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Shared from 'components/shared/Shared';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
