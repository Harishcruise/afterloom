import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TextReveal } from "./components/textSlider";
import { TopSection } from "./sections/top-section";
import { ServiceSection } from "./sections/services-section";
import { ProjectSections } from "./sections/project-section";
import { OurFlowSection } from "./sections/our-flow-section";
import { Typography } from "./components/typography";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <BackgroundWrapper>
       <Header/>
       <TopSection/>
       <ServiceSection/>
      <TextReveal>
      <Typography type="light64" color="text-background-600" responsive={true} >Embark on a journey towards a transformative digital transformation and a successful mobile or web app with our expert guidance and dedicated team.</Typography>
      </TextReveal>
      <ProjectSections/>
      <OurFlowSection/>
      <Footer/>
    </BackgroundWrapper>
  );
}

export default App;
