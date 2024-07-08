import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
function App() {
  const productlist = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quntity: 0,
    },
    { price: 99999,
       name: "Redmi Note 10s",
        quntity: 0, }
  ]
  return (
    <>
      <Navbar/>
<main className="container mt-5"><ProductList productlist={productlist}/></main>
      {/* <Footer/>*/}
    </>
  );
}

export default App;
