import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TextReveal } from "./components/textSlider";
import { TopSection } from "./sections/top-section";
import { ServiceSection } from "./sections/services-section";

function App() {

  return (
    <BackgroundWrapper>
       <Header/>
       <TopSection/>
       <ServiceSection/>
      <TextReveal type="light64" color="text-background-600">
      Embark on a journey towards a transformative digital transformation and a successful mobile or web app with our expert guidance and dedicated team.
      </TextReveal>
    </BackgroundWrapper>
  );
}

export default App;
