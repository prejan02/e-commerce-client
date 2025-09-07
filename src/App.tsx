import "./App.css";
import Login from "./pages/auth/login";
import Register from './pages/auth/register'
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ProductsPage from "./pages/products";
import AboutUsPage from "./pages/about";
import { Toaster } from "react-hot-toast";
import ClientLayout from "./layout/client.layout";
import WishlistPage from "./pages/wishlist";
import ProtectedCartPage from "./pages/cart";
import ProductDetailPage from "./pages/detail.page";
import Dashboard from "./pages/admin/dashboard";
import UserPage from "./pages/admin/user";
import OrderPage from "./pages/admin/order";
import AdminLayout from "./layout/admin.layout";
import PageNotFound from "./pages/page-not-found";
import CategoryPage from "./pages/admin/category";
import CreateCategory from "./pages/admin/category/add.category";

function App() {
  return (
    <main className="h-full">
      <Router>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="/" element={<ClientLayout/>} >
          
          <Route path="/" element={<HomePage/>} />
          <Route path="/contact-us" element={<ContactPage/>} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/wishlist" element={<WishlistPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path='/cart' element={<ProtectedCartPage />} />
          <Route path="/product/:id" element={<ProductDetailPage/>} />
          </Route>
          <Route path="*" element={<div className="h-screen"><h1>Page Not Found</h1></div>} />
          {/* admin routes */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/admin/users' element={<UserPage />} />
            <Route path='/admin/orders' element={<OrderPage />} />
            <Route path='/admin/category' element={<CategoryPage />} />
            <Route path='/admin/category/add' element={<CreateCategory />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster reverseOrder={true} />
    </main>
  );
}

export default App;
