import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Parallax from "./components/parallax/Parallax";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        <Home />
        <Parallax />
      </main>
      <Footer />
    </div>
  );
};

export default App;
