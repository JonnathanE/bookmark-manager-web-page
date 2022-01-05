import ContactSection from "./containers/ContactSection";
import DownloadSection from "./containers/DownloadSection";
import FeatureSection from "./containers/FeatureSection";
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
    </div>
  );
}

export default App;
