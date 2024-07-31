import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCards from "./components/ProductCards/ProductCards";

function App() {
  return (
    <>
      <Header />
      <ProductCards />
    </>
  );
}

export default App;
