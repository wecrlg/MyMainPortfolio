import Pic from "../assets/Chidozie-img.jpg";
import { useAppContext } from "../contexts/AppContext";
export default function About() {
  const { isDarkMode } = useAppContext();
  return (
    <section className="about container" id="about">
      <img src={Pic} alt="about-img" />
      <div className="about-text">
        <h2>About Me</h2>
        <h5>
          Mern Stack Developer <span>&amp; Designer</span>
        </h5>
        <p>
          I'm a skilled person with proven ability to manage multiple tasks
          concurrently and also find ways to get tasks delivered on time and to
          specification. <br />
          <br />
          As a full-stack web developer, my mastery of JavaScript, TypeScript,
          Node.js, and React empowers me to design and implement robust
          applications that streamline processes, enhance user experiences, and
          overcome intricate obstacles. I thrive on solving complex problems
          with elegant, efficient, and scalable solutions. Seeking an
          opportunity to exploit my dexterity and expertise.
        </p>
        <a
          href="#contact"
          className="button"
          style={{
            color: isDarkMode ? "var(--black)" : "var(--white)",
            backgroundColor: isDarkMode ? "var(--cyan)" : "var(--secondary)",
            border: isDarkMode
              ? "2px solid var(--cyan)"
              : "2px solid var(--secondary)",
          }}
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
}
