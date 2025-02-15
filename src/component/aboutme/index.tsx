import styles from "./aboutme.module.css";
import Heading from "../atoms/heading";
import portfolio from "../../data/portfolio.json";

import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <section>
      <HeroSection />
      <CotentSection />
      <ProjectSection />
      <BlogSection />
      <LetsConnect />
    </section>
  );
};

export const HeroSection = () => {
  return (
    <div className={styles["navbar"]}>
      <Heading>🧑‍💻{portfolio.name}</Heading>
      <div className={styles["navcontainer"]}>
        <Link to="">Blog</Link> / <Link to="">Projects</Link>
      </div>
    </div>
  );
};

const CotentSection = () => {
  return (
    <div className={styles["CotentSection"]}>
      <span className={styles["aboutmetap"]}>ABOUT ME</span>
      <div className={styles["aboutcontent-wrapper"]}>
        <h1>Hello! 👋🏻</h1>
        <p>{portfolio.aboutMe}</p>
        <h2>Here’s what I bring to the table: 🤹‍♂️</h2>
        <ul>
          <li>
            Platform Optimization: I work on identifying and eliminating
            bottlenecks in your platform to improve speed, scalability, and user
            experience.
          </li>
          <li>
            Feature Integration: Need new features or custom functionality? I
            seamlessly integrate features that align with your business goals.
          </li>
          <li>
            AI-Powered Enhancements: From automation to predictive analytics, I
            use AI to enhance your platform’s capabilities and drive better
            outcomes for your business.
          </li>
          <li>
            Cost-Effective Solutions: You don’t need an in-house development
            team to get the most out of your platform. I offer flexible,
            expert-led services that are tailored to your needs.
          </li>
        </ul>
        <p className={styles["connect-wrapper"]}>
          I believe in collaborating closely with my clients to understand their
          business challenges and deliver solutions that make an impact. Whether
          you're in e-commerce, healthcare, real estate, or professional
          services, I can help you take your digital platform to the next level.
        </p>
        <h2>Technical Skils! 🤹‍♂️</h2>
        <ul>
          <li>Languages: JavaScript, TypeScript</li>
          <li>Frontend Frameworks: React.js, Next.js</li>
          <li>Backend & APIs: Node.js, Express.js, GraphQL, RESTful APIs</li>
          <li>Databases & Storage: MongoDB, Mongoose</li>
          <li>
            Cloud Platforms & DevOps: AWS (Lambda, API Gateway, S3, ecr), Google
            Cloud Platform, Docker, Terraform
          </li>
          <li>Payment Integration: Stripe (Payments, Subscriptions, Webhooks)</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
        <p className={styles["connect-wrapper"]}>
          🙋‍♂️ Quite a journey, right? lets transform your ideas into powerful web
          solutions? Let’s make it happen. 🤙🤳
          <span>
            <a href="https://wa.link/wlimfr">WhatSapp</a>{" "}
            <a href="mailto:ronicksamuel@gmail.com">Email</a>{" "}
            <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
              LinkedIn
            </a>{" "}
            <a href="https://github.com/sammy0055">Github</a>
          </span>
        </p>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className={styles["blog-section"]}>
      <div className={styles["blog-section-heading"]}>
        <Heading>Latest Posts</Heading>
        <Link to="">See All Post</Link>
      </div>
      <div>
        {portfolio.blogs.map((blog, index) => (
          <PostCard
            key={index}
            title={blog.title}
            description={blog.description}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div>
      <div className={styles["project-section-heading"]}>
        <Heading>Recent Projects</Heading>
        <Link to="">See All Projects</Link>
      </div>
      <div className={styles["project-section-content"]}>
        {portfolio.projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            id={project.id}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

interface PostCardProps {
  title: string;
  description: string;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description, link }) => {
  return (
    <div className={styles["postcard"]}>
      <a href={link}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  image: {
    src: string;
    alt: string;
  };
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <Link className={styles["projectcard"]} to={`/project/${id}`}>
      <div className={styles["projectcard-img-cont"]}>
        <img src={image.src} alt={image.alt} />
      </div>
      <div className={styles["projectcard-text-cont"]}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

const LetsConnect = () => {
  return (
    <div className={styles["letsconnect"]}>
      <Heading>🙋‍♂️ Lets Connect</Heading>
      <p>
        Let's Connect If you want to get in touch with me about something or
        just want to say hi, reach out on social media or send me an email.🤙🤳
      </p>
      <div>
        <span>
          <a href="https://wa.link/wlimfr">WhatSapp</a>{" "}
          <a href="mailto:ronicksamuel@gmail.com">Email</a>{" "}
          <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
            LinkedIn
          </a>{" "}
          <a href="https://github.com/sammy0055">Github</a>
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
