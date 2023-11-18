import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TopSection } from "./sections/top-section";
import { offerSection } from "./sections/offer-section";
function App() {

  return (
    <BackgroundWrapper>
       <Header/>
       <TopSection/>
       <offerSection/>
    </BackgroundWrapper>
  );
}

export default App;
