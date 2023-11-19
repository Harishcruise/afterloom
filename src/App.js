import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TopSection } from "./sections/top-section";
import { ServiceSection } from "./sections/services-section";
function App() {

  return (
    <BackgroundWrapper>
       <Header/>
       <TopSection/>
       <ServiceSection/>
    </BackgroundWrapper>
  );
}

export default App;
