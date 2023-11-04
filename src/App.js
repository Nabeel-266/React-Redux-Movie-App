import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* Import Components
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MovieDetail from "./components/movieDetail/MovieDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <div className="appWrapper">
        <Router>
          <Header />
          <div className="midContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
