import { useParams } from "react-router-dom";
import { HeroSection } from "../../component/aboutme";
import { Button } from "../../component/atoms/button";
import Heading from "../../component/atoms/heading";
import Footer from "../../component/footer";
import styles from "./project.module.css";

import portfolioData from "../../data/portfolio.json";

const ProjectDisplay = () => {
  const { projectId } = useParams();
  const projectData = portfolioData.projects.find(
    (project) => project.id === parseInt(projectId!)
  );

  if (!projectData) return <div>error</div>;

  return (
    <main className={styles["app"]}>
      <HeroSection />
      <ProjectHeading
        title={projectData.title}
        role={projectData.role}
        link={projectData.link}
      />
      <ProjectMedia src={projectData?.image.src} alt={projectData?.image.alt} />
      <ProjectDetailsArea
        description={projectData.description}
        technologies={projectData.technologies}
        contributions={projectData.contributions}
        summary={projectData.summary}
      />
      <Footer />
    </main>
  );
};

interface ProjectHeadingProps {
  title: string;
  role: string;
  link: string;
}
const ProjectHeading: React.FC<ProjectHeadingProps> = ({
  title,
  role,
  link,
}) => {
  return (
    <section className={styles["project"]}>
      <div>
        <Heading>{title}</Heading>
        <div className={styles["heading"]}>
          <p>
            <strong>Role: </strong>
            {role}
          </p>
        </div>
      </div>
      <Button link={link}>Check it out</Button>
    </section>
  );
};

interface ProjectMediaProps {
  src: string;
  alt: string;
}

const ProjectMedia: React.FC<ProjectMediaProps> = ({ src, alt }) => {
    return (
    <div className={styles["projectcard-img-cont"]}>
      <img src={`../../../${src}`} alt={alt} />
    </div>
  );
};

interface ProjectDetailsAreaProps {
  description: string;
  technologies: string[];
  summary: string;
  contributions: {
    heading: string;
    contributions: string[];
  }[];
}
const ProjectDetailsArea: React.FC<ProjectDetailsAreaProps> = ({
  description,
  technologies,
  contributions,
  summary,
}) => {
  return (
    <div>
      <div className={styles["project-overview"]}>
        <h2>Overview</h2>
        <p>{description}</p>
      </div>

      <div>
        <p>
          <strong>Technologies: </strong>
          {technologies.join(", ")}
        </p>
        {contributions.map(({ heading, contributions }) => (
          <Contributions heading={heading} contribution={contributions} />
        ))}
        <p className={styles["project-summary"]}>{summary}</p>
      </div>
    </div>
  );
};

interface BackendProps {
  heading: string;
  contribution: string[];
}
const Contributions: React.FC<BackendProps> = ({ heading, contribution }) => {
  return (
    <div className={styles["project-heighlight"]}>
      <h3>{heading}</h3>
      {contribution.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};
export default ProjectDisplay;
