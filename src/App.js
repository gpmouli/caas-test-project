// import styles from "./styles.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterURLS from "./RouteURL";
import Headers from "./Components/Header";
import Footer from "./Components/Footer";
import "./Assets/styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Headers />
      <RouterURLS />
      <Footer />
    </div>
  );
}

export default App;
