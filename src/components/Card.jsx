import nftImg from "../images/image-equilibrium.jpg";
import ethImg from "../images/icon-ethereum.svg";
import clockImg from "../images/icon-clock.svg";
import avatarImg from "../images/image-avatar.png";
import eye from "../images/icon-view.svg";
import { useState } from "react";
import "./Card.css";

export default function Card() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }
  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <div className="card">
      <div
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseOut={handleMouseOut}
        style={{
          width: "30.2rem",
          borderRadius: "1.5rem",
          position: "relative",
        }}
      >
        <img src={nftImg} alt="equilibrium" style={{ width: "100%" }} />
        <div
          className="overlayDiv"
          style={{ opacity: isHovered ? "0.5" : "0", cursor: "pointer" }}
        >
          <img src={eye} alt="" />
        </div>
      </div>
      <h3>Equilibrium #3429</h3>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className="iconDiv">
        <div className="eth">
          <img src={ethImg} alt="ethereum icon" />
          <p style={{ color: "#00FFF8", fontWeight: 600 }}>0.041 ETH</p>
        </div>
        <div className="eth">
          <img src={clockImg} alt="clock icon" />
          <p>3 days left</p>
        </div>
      </div>
      <div className="authorDiv">
        <img src={avatarImg} alt="avatar" style={{ width: "3.2rem" }} />
        <p>
          Creation of <span style={{ color: "#00FFF8" }}>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}
