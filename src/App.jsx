import Banner from "./components/Hero/Banner";
import { Hero } from "./components/Hero/Hero";
import ModalBanner from "./components/Hero/ModalBanner";
import NavBar from "./components/Hero/NavBar";
import FormComprador from "./components/Main/FormComprador";
import SectionInputs from "./components/Main/SectionInputs";
import { ToggleBillCompleted } from "./components/Main/ToggleBillCompleted";

function App() {
  return (
    <div className="w-[1400px]">
      <ModalBanner />
      <NavBar />
      <Hero />
      {/* <Banner /> */}
      {/* <ToggleBillCompleted /> */}
      <div className="flex justify-between gap-3 py-4">
        <SectionInputs />
        <FormComprador />
      </div>
    </div>
  );
}

export default App;
