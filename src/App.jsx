import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        <Home />
        <Parallax />
      </main>
    </div>
  );
};

export default App;
