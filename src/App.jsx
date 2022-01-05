import ContactSection from "./containers/ContactSection";
import DownloadSection from "./containers/DownloadSection";
import FeatureSection from "./containers/FeatureSection";
import FooterSection from "./containers/FooterSection";
import QuestionSection from "./containers/QuestionSection";
import { TopSection } from "./containers/TopSection";

function App() {
  return (
    <div>
      <TopSection />
      <FeatureSection />
      <DownloadSection />
      <QuestionSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
