import { useTranslation } from "react-i18next";
import "../assets/css/styles.css";
import alquilerMiniatura from "../assets/img/screenshotas.png";
import pomodoit from "../assets/img/pomodoit.png";
import ahorcadoimg from "../assets/img/ahorcadoportada.png";
import cvimage from "../assets/img/portada-cv.png";
import storeimage from "../assets/img/store.png";
const imageMap = {
  clickalquiler: alquilerMiniatura,
  pomodoit: pomodoit,
  ahorcado: ahorcadoimg,
  cv: cvimage,
  store: storeimage,
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });

  return (
    <section className="projects-section">
      <h2 className="section-title">{t("projects.title")}</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img
              src={imageMap[proj.imageKey]}
              alt={proj.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="project-tech">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {proj.repo && (
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    {t("projects.repo")}
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button live"
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
