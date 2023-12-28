import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TextReveal } from "./components/textSlider";
import { TopSection } from "./sections/top-section";
import { ServiceSection } from "./sections/services-section";
import { ProjectSections } from "./sections/project-section";
import { OurFlowSection } from "./sections/our-flow-section";
import { Typography } from "./components/typography";
import Footer from "./components/footer/Footer";
import { Helmet } from 'react-helmet'

function App() {

  return (
    <>
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Crafting digital experiences that captivate and convert, I offer a versatile suite of services tailored for your brand's success. From sleek digital product designs that fuse innovation with usability to creating diverse website solutions, I specialize in crafting intuitive, eye-catching platforms that resonate with your audience. Elevate your brand presence with creative marketing strategies that cut through the noise, engaging customers and driving growth. Let's collaborate to bring your vision to life and make a lasting impact in the digital landscape."
    />
    <meta property="og:title" content="afterloom" />
    <meta property="og:description" content="Crafting digital experiences that captivate and convert, I offer a versatile suite of services tailored for your brand's success. From sleek digital product designs that fuse innovation with usability to creating diverse website solutions, I specialize in crafting intuitive, eye-catching platforms that resonate with your audience. Elevate your brand presence with creative marketing strategies that cut through the noise, engaging customers and driving growth. Let's collaborate to bring your vision to life and make a lasting impact in the digital landscape." />
    <meta property="og:image" content="%PUBLIC_URL%/AfterLoom.png" />
    <meta property="og:url" content="https://www.afterloom.com/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content="afterloom" />
    <meta name="twitter:description" content="Crafting digital experiences that captivate and convert, I offer a versatile suite of services tailored for your brand's success. From sleek digital product designs that fuse innovation with usability to creating diverse website solutions, I specialize in crafting intuitive, eye-catching platforms that resonate with your audience. Elevate your brand presence with creative marketing strategies that cut through the noise, engaging customers and driving growth. Let's collaborate to bring your vision to life and make a lasting impact in the digital landscape" />
    <meta name="twitter:image" content="%PUBLIC_URL%/AfterLoom.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    </Helmet>
    <Header/>
    <BackgroundWrapper>
       <TopSection/>
       <ServiceSection/>
      <TextReveal>
      <Typography type="light64" color="text-background-600" responsive={true} >Embark on a journey towards a transformative digital transformation and a successful mobile or web app with our expert guidance and dedicated team.</Typography>
      </TextReveal>
      <ProjectSections/>
      <OurFlowSection/>
      <Footer/>
    </BackgroundWrapper>
    </>
  );
}

export default App;
