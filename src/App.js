import { BackgroundWrapper } from "./components/backgroundWrapper";
import { Header } from "./components/header";
import { TopSection } from "./sections/top-section";

function App() {

  return (
    <BackgroundWrapper>
       <Header/>
       <TopSection/>
    </BackgroundWrapper>
  );
}

export default App;
