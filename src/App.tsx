import { useEffect } from "react";
import About from "./components/About";
import Main from "./components/Main";
import AppNavbar from "./components/Navbar";
import Services from "./components/Services";
import { useAppContext } from "./contexts/AppContext";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function App() {
  const { isDarkMode } = useAppContext();

  const AppTheme = () => {
    const body = document.body;
    body.style.backgroundColor = isDarkMode
      ? "var(--primary)"
      : "var(--tertiary)";
    body.style.color = isDarkMode ? "var(--white)" : "var(--black)";
  };

  useEffect(() => {
    AppTheme();
  }, [isDarkMode]);

  return (
    <div>
      <AppNavbar />
      <Main />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
