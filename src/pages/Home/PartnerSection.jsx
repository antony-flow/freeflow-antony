import "./PartnerSection.css";

function PartnerSection() {
  const cloudImage = [
    { link: "https://successive.tech/wp-content/uploads/2024/05/aws.webp" },
    {
      link: "https://successive.tech/wp-content/uploads/2024/05/Google-Cloud.webp",
    },
    {
      link: "https://successive.tech/wp-content/uploads/2024/05/awsparterner.webp",
    },
  ];
  const cmsImage = [
    { link: "https://successive.tech/wp-content/uploads/2024/05/Strapi.webp" },
    {
      link: "https://successive.tech/wp-content/uploads/2024/04/Adobe-logo-1.png",
    },
    {
      link: "https://successive.tech/wp-content/uploads/2024/03/Contentful.png",
    },
    {
      link: "https://successive.tech/wp-content/uploads/2024/03/Storyblok.png",
    },
    { link: "https://successive.tech/wp-content/uploads/2024/03/acquia.png" },
  ];
  const analyticsimages = [
    {
      link: "https://successive.tech/wp-content/uploads/2024/04/Micro_Focus_logo.svg.png",
    },
    { link: "https://successive.tech/wp-content/uploads/2024/04/download.png" },
  ];

  return (
    <>
      <div className="container-m">
        <div>
          <p className="container-head">Cloud Partnerships</p>
          <div className="container-img">
            {cloudImage.map((temp) => (
              <div className="container-img-indi">
                <img style={{ width: "120px" }} src={temp.link} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="container-head">CMS Partnerships</p>
          <div className="container-img">
            {" "}
            {cmsImage.map((temp) => (
              <div className="container-img-indi">
                <img style={{ width: "120px" }} src={temp.link} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="container-head">Data & Analytics Partnerships</p>
          <div className="container-img">
            {" "}
            {analyticsimages.map((temp) => (
              <div className="container-img-indi">
                <img style={{ width: "120px" }} src={temp.link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default PartnerSection;
