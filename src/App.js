import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TopSection } from "./sections/top-section"
import { TextReveal } from "./components/textSlider";

function App() {

  return (
    <BackgroundWrapper>
      <Header/>
      <TopSection/> 
      <TextReveal type="light64" color="text-background-600">
      Embark on a journey towards a transformative digital transformation and a successful mobile or web app with our expert guidance and dedicated team.
      </TextReveal>
    </BackgroundWrapper>
  );
}

export default App;
