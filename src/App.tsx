import "./App.css";
import Login from "./pages/auth/login";
import Register from './pages/auth/register'
import ContactPage from "./pages/contact";
import DynamicPage from "./pages/detail.page";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProductsPage from "./pages/products";
import AboutUsPage from "./pages/about";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="h-full">
      <Router>
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact-us" element={<ContactPage/>} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/product/:id" element={<DynamicPage/>} />
          <Route path="*" element={<div className="h-screen"><h1>Page Not Found</h1></div>} />
        </Routes>
      </Router>
      <Toaster reverseOrder={true} />
    </main>
  );
}

export default App;
