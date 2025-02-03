import "../../../Styles/ServicesPage.css";
import webapp from "../../../Assets/icons/webapplicationicon.png";
import mobileapp from "../../../Assets/icons/mobileapplicationicon.png";
import seo from "../../../Assets/icons/seoicon.png";
import figma from "../../../Assets/icons/figmaicon.png";
import canva from "../../../Assets/icons/canvaicon.png";
import wordpress from "../../../Assets/icons/wordpressicon.png";
import freelancing from "../../../Assets/icons/freelancingicon.png";
import promptengineering from "../../../Assets/icons/promptengineeringicon.png";
import { Link } from "react-router-dom";
function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We offer professional web development services tailored to your business needs.",
      icon: webapp,
    },
    {
      title: "Mobile App Development",
      description:
        "Develop feature-rich mobile apps for both Android and iOS platforms.",
      icon: mobileapp,
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility with our effective SEO strategies.",
      icon: seo,
    },
    {
      title: "Figma Design",
      description:
        "Create visually stunning graphics to enhance your brand identity.",
      icon: figma,
    },
    {
      title: "Canva Design",
      description:
        "Design eye-catching visuals to elevate your brand presence.",
      icon: canva,
    },
    {
      title: "WordPress Development",
      description:
        "Build responsive and customizable websites using WordPress to meet your business needs.",
      icon: wordpress,
    },
    {
      title: "Freelancing",
      description:
        "Leverage your skills and work independently on a variety of projects to grow your career.",
      icon: freelancing,
    },
    {
      title: "Prompt Engineering",
      description:
        "Master prompt engineering to craft effective prompts and optimize AI performance.",
      icon: promptengineering,
    },
  ];

  return (
    <div className="servicesPage-container">
      <section className="fordnine-intro">
        <h1>Welcome to Fordnine</h1>
        <p>
          At Fordnine, we specialize in delivering innovative digital solutions
          that help businesses grow and succeed in the modern world. Our team of
          experts provides top-notch services ranging from web and mobile app
          development to graphic design, SEO optimization, and more. With years
          of experience and a passion for technology, we empower businesses to
          achieve their full potential. Explore our wide range of services
          designed to help your business thrive.
        </p>
      </section>

      <h2 className="text-center">Our Services</h2>
      <p className="text-center description">
        We provide innovative solutions to meet your business needs.
      </p>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <img src={service.icon} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="Contact-btn-div">
        <button className="button">
          <Link
            to={"/ContactPage"}
            className="text-decoration-none text-black fw-bold"
          >
            Contact us
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Services;
