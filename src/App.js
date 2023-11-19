import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TopSection } from "./sections/top-section";
import { OfferSection } from "./sections/offer-section";
function App() {

  return (
    <BackgroundWrapper>
       <Header/>
       <TopSection/>
       <OfferSection/>
    </BackgroundWrapper>
  );
}

export default App;
