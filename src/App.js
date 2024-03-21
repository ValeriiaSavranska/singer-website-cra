import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Listen from "./components/Listen/Listen";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import NotFound from "path/to/pages/NotFound";
import s from "./App.module.css";

function App() {
  return (
    <>
      <div className={s.wrap}>
        <Header />

        <main className={s.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/upcoming_events" element={<UpcomingEvents />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
