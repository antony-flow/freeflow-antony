import "./MultiService.css";

function SingleServiceCard({ num, link, alt, heading, subheading }) {
  return (
    <>
      <div className="boxcss">
        <span>{num}</span>
        <div className="img-container">
          <div className="overlay"></div>
          <img className="img-class" src={link} alt={alt} />

          <div className="image-txt">
            <a className="img-txt-p1">{heading}</a>
            <p className="img-txt-p2">{subheading}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleServiceCard;
