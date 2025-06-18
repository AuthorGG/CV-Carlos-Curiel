import { useTranslation } from "react-i18next";
import "../assets/css/styles.css";
import alquilerMiniatura from "../assets/img/screenshotas.png";
import ahorcadoimg from "../assets/img/ahorcadoportada.png";
import cvimage from "../assets/img/portada-cv.png";

const Projects = () => {
  const { t } = useTranslation();
  const images = [alquilerMiniatura, ahorcadoimg, cvimage];
  const projects = t("projects.list", { returnObjects: true });
  return (
    <section className="projects-section">
      <h2 className="section-title">{t("projects.title")}</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img
              src={images[index]}
              alt={proj.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={
                    [
                      "https://github.com/AuthorGG/PFB",
                      "https://github.com/AuthorGG/ahorcado",
                      "https://github.com/AuthorGG/CV-Carlos-Curiel",
                    ][index]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.repo")}
                </a>
                {index === 2 && (
                  <a
                    href="https://authorgg.github.io/CV-Carlos-Curiel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.demo")}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
