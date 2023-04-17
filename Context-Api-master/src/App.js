import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { GlobalContext } from "./context/Global";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  const { products, setProduct, fetchProducts, DeleteProduct, AddProduct } =
    useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      id: parseInt(products.length + 1),
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddProduct(form);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
