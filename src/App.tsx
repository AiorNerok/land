import {
  Advantages,
  ComparisonCompetitors,
  Copyright,
  Expenses,
  Footer,
  Hero,
  PathRelease,
  Problems,
  Team,
  Video,
} from "./widgets";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Video />
      <Problems />
      <ComparisonCompetitors />
      <PathRelease />
      <Expenses />
      <Advantages />
      <Team />
      <div className="h-40"></div>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
