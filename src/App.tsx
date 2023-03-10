import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return ( 
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4"> 
        <Routes>
          <Route path="/" element={<Store />}>
            Home
          </Route>
          <Route path="/home" element={<Home />}>
            Store
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
