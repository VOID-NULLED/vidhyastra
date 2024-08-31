import React from "react";

const LogoSlider = () => {
  const animationSpeed = "40s";

  const scrollAnimation = {
    animation: `scroll ${animationSpeed} linear infinite`,
  };

  return (
    <div className="flex items-center justify-center pb-12 pt-12">
    <div className="slider h-28 overflow-hidden mx-auto relative py-8 pb-8">
      <div className="slide-track flex" style={scrollAnimation}>
        {Array(14)
          .fill("")
          .map((_, index) => (
            <div key={index} className="slide w-64 h-24 flex-shrink-0">
              <img
                src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
                alt=""
                className="h-full w-full"
              />
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default LogoSlider;
