import { useEffect, useRef, useState } from "react";
import "./StatsCard.css";
import AutoIncrementTimer from "./AutoIncrementTimer";

function StatsCard() {
  const num = 2;
  const [years, SetYears] = useState(0);
  const [cap, setCap] = useState(0);
  const [clients, setClient] = useState(0);
  const [office, setOffice] = useState(0);
  const [teams, setTeams] = useState(0);

  // const incrementRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.8,
  //   };
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       const value = setInterval(() => {
  //         if (years < 10) {
  //           SetYears(years + 1);
  //         }
  //         if(office<10){
  //           setOffice(office+1);
  //         }
  //       }, 100);

  //       incrementRef.current = value;
  //       console.log(incrementRef);
  //     } else {
  //       clearInterval(incrementRef.current);
  //     }
  //   }, options);
  //   observer.observe(document.getElementById("main-container-id"));
  //   return () => {
  //     observer.disconnect();
  //     clearInterval(incrementRef.current);
  //   };
  // }, [years,office]);

  return (
    <div className="main-cont" id="main-container-id">
      <span>Global Data Insight</span>
      <div className="main-div">
        <div className="div-wrapper">
          <p>years in buisness</p>
          <div className="num-css">
            <AutoIncrementTimer incrementBy={1} interval={200} limit={10} />
            <div>+</div>
          </div>
        </div>

        <div className="div-wrapper">
          <p>capabilies</p>
          <div className="num-css">
            <AutoIncrementTimer incrementBy={1} interval={40} limit={50} />
            <div>+</div>
          </div>
        </div>

        <div className="div-wrapper">
          <p>clients</p>
          <div className="num-css">
            {" "}
            <AutoIncrementTimer incrementBy={1} interval={20} limit={100} />
            <div>+</div>
          </div>
        </div>

        <div className="div-wrapper">
          <p>Office Worldwide</p>
          <div className="num-css">
            <AutoIncrementTimer incrementBy={1} interval={220} limit={7} />
            <div>+</div>
          </div>
        </div>

        <div className="div-wrapper">
          <p>Team</p>
          <div className="num-css">
            <AutoIncrementTimer incrementBy={1} interval={1} limit={800} />
            <div>+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
