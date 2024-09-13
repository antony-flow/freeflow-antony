import "./ServiceCard.css";

function ServiceCard() {
  return (
    <div className="parent">
      <div className="childleft">
        <img
          src="https://successive.tech/wp-content/uploads/2024/05/about.webp"
          alt="Accelerating Growth Through Digital Solutions"
          className="image_style"
        />
      </div>
      <div className="childright">
        <div className="childrightp1">
          <p>Accelerating Growth Through</p>
          <p>Digital Solutions</p>
        </div>
        <div className="childrightp2">
          <p>
            As a trusted industry leader in digital solutions, we drive growth
            and tangible outcomes for our valued customers and communities. Our
            strong partnerships with world-leading companies enable us to shape
            the future of the digital frontier through pioneering sustainable
            growth and best-in-class solutions. We are committed to building
            lasting relationships with industry leaders to co-create the digital
            landscape of tomorrow, driven by growth, development, and
            intelligent solutions.
          </p>
          <p>
            We have been a technology provider for many leading companies and
            have helped elevate customer experience and transform the business’s
            bottom line globally. We help businesses drive the change in how
            brands engage with their customers and interact in today’s digital
            era.
          </p>
        </div>
        <div className="childrightbtn">
          <button>Read More </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
