import Banner from "./components/Hero/Banner";
import { Hero } from "./components/Hero/Hero";
import NavBar from "./components/Hero/NavBar";
import { ToggleBillCompleted } from "./components/Main/ToggleBillCompleted";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      <Banner />
      <ToggleBillCompleted />
    </div>
  );
}

export default App;
