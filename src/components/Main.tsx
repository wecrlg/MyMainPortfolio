import CV from "../assets/WilliamsCV.pdf";
import { useAppContext } from "../contexts/AppContext";

export default function Main() {
  const { isDarkMode } = useAppContext();
  return (
    <section id="home">
      <div className="welcome_content">
        <h4>Hello, my name is</h4>
        <h1>
          Ezetendu{" "}
          <span
            style={{ color: isDarkMode ? "var(--cyan)" : "var(--secondary)" }}
          >
            Williams
          </span>
        </h1>
        <h3>I'm a Mern Stack Developer.</h3>
        <a
          href={CV}
          download
          className="button"
          style={{
            color: isDarkMode ? "var(--black)" : "var(--white)",
            backgroundColor: isDarkMode ? "var(--cyan)" : "var(--secondary)",
            border: isDarkMode
              ? "2px solid var(--cyan)"
              : "2px solid var(--secondary)",
          }}
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
