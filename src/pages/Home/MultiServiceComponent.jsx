import "./MultiService.css";
import SingleServiceCard from "./SingleServiceCard";

function MultiServiceComponent() {
  const data = [
    {
      num: "01",
      link: "https://successive.tech/wp-content/uploads/2024/05/UX-min.webp",
      alt: "UX Design: Crafting Engaging Digital Experiences",
      heading: "UX Design: Crafting Engaging Digital Experiences",
      subheading:
        "Generating interactive digital experiences through a user-centric design strategy is necessary for producing items and services that hook customers, provide value, and stand out in today's digital world. It is a philosophy that acknowledges that the prosperity of a digital outcome relies heavily on how perfectly it serves the recipients it is tailored fo",
    },
    {
      num: "02",
      link: "https://successive.tech/wp-content/uploads/2024/05/Advanced-data-min.webp",
      alt: "Advanced Data Analytics: Transforming Healthcare",
      heading: "UX Design: Crafting Engaging Digital Experiences",
      subheading:
        "Generating interactive digital experiences through a user-centric design strategy is necessary for producing items and services that hook customers, provide value, and stand out in today's digital world. It is a philosophy that acknowledges that the prosperity of a digital outcome relies heavily on how perfectly it serves the recipients it is tailored fo",
    },
    {
      num: "03",
      link: "https://successive.tech/wp-content/uploads/2024/05/customer-experince-min.webp",
      alt: "How Does Data Improving Customer Experience?",
      heading: "UX Design: Crafting Engaging Digital Experiences",
      subheading:
        "Generating interactive digital experiences through a user-centric design strategy is necessary for producing items and services that hook customers, provide value, and stand out in today's digital world. It is a philosophy that acknowledges that the prosperity of a digital outcome relies heavily on how perfectly it serves the recipients it is tailored fo",
    },
    {
      num: "04",
      link: "https://successive.tech/wp-content/uploads/2024/05/telemedicine-min.webp",
      alt: "Telemedicine: A Viable Healthcare Tech Solution",
      heading: "UX Design: Crafting Engaging Digital Experiences",
      subheading:
        "Generating interactive digital experiences through a user-centric design strategy is necessary for producing items and services that hook customers, provide value, and stand out in today's digital world. It is a philosophy that acknowledges that the prosperity of a digital outcome relies heavily on how perfectly it serves the recipients it is tailored fo",
    },
  ];
  return (
    <div className="main">
      <div className="maindiv1">
        <p>Creating Digital Solutions Driven By Actionable Insights</p>
      </div>
      <div className="maindiv2">
        {data.map((temp) => (
          <SingleServiceCard
            num={temp.num}
            link={temp.link}
            alt={temp.alt}
            heading={temp.heading}
            subheading={temp.subheading}
          />
        ))}
      </div>
    </div>
  );
}

export default MultiServiceComponent;
