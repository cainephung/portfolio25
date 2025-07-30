import { lazy, Suspense, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
// import "./App.css";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <main className="pageContent">
        <Suspense fallback={"loading..."}>
          <section id="home" style={{ paddingTop: "80px", marginTop: "-80px" }}>
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
    </>
  );
};

export default App;
