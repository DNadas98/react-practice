import "./style/App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header pageTitle="Fetch the countries" />
      <Content />
      <Footer name="Daniel Nadas" />
    </div>
  );
}

export default App;
