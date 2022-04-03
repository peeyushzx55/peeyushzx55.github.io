import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "contact", "work", "testimonials", "skills"].map(
        (item, index) => (
          <a
            key={item + index}
            className="app__navigation-dot"
            href={`#${item}`}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          ></a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
