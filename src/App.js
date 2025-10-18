import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
