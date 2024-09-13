import ServiceCard from "./ServiceCard.jsx";
import MultiServiceComponent from "./MultiServiceComponent.jsx";
import PartnerSection from "./PartnerSection.jsx";
import StatsCard from "./StatsCard.jsx";
import "./Body.css";

function Body() {
  return (
    <>
      <div className="main_container">
        <video
          playsInline
          loop
          muted
          autoPlay
          style={{
            height: "100vh",
            border: "2px solid black",
            width: "100vw",
            objectFit: "fill",
          }}
        >
          <source
            src="https://8904598.fs1.hubspotusercontent-na1.net/hubfs/8904598/SuccessiveTechnologies_July2021/bannerVideo%20(1).mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="banner_div">
          <h1>Redefining Digital</h1>
          <h2>Transformation</h2>
          <h3>
            Transform your business growth across all touchpoints of customer
          </h3>
          <h3>vexperience with our digital transformation solutions.</h3>
        </div>
      </div>
      <ServiceCard />
      <ServiceCard />
      <MultiServiceComponent />
      <PartnerSection />
      <StatsCard />
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
      <h2>sadsadsa</h2>
    </>
  );
}

export default Body;
