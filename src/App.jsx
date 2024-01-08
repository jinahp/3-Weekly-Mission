import Favorite from 'components/favorite/Favorite';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/shared" element={<Favorite />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
