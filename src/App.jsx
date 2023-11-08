import Header from "./components/Header/Header";
import Information from "./components/Information/Information";
import LatestTrends from "./components/LatestTrends/LatestTrends";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css"

function App() {

  return (
    <div className={classes.app}>
      <Header />
      <Information />
      <LatestTrends />
      <Footer />
    </div>
  );
}

export default App;
