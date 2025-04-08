import React, { useEffect, useRef } from "react";

const WelcomeCardSection = () => {
  const scrollRef = useRef(null);

  const images = [
    { name: "Marudhamalai Temple", img: "/images/marudhamalai.png" },
    { name: "Brookefields Mall", img: "/images/brookefields.png" },
    { name: "Isha Yoga Center", img: "/images/isha.png" },
    { name: "Gass Forest Museum", img: "/images/gass.png" },
    { name: "Prozone Mall", img: "/images/prozone.png" },
    { name: "GD Car Museum", img: "/images/gd.png" },
  ];

  const repeatedImages = [...images, ...images]; // Duplicate for seamless scroll

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollStep = 3; // Increased from 1 to 2 for faster scrolling
    let scrollDelay = 20; // Reduced from 30 to 20 for faster updates

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;

        // Reset to start for seamless loop
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth / 2
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, scrollDelay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "40px 0",
        background: "linear-gradient(135deg, #003B8B, #007FCF)",
        color: "#fff",
        textAlign: "center",
        borderRadius: "30px",
        overflow: "hidden",
        marginTop: "30px",
      }}
    >
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>
          Welcome to Coimbatore
        </h2>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "20px",
            paddingBottom: "10px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {repeatedImages.map((place, index) => (
            <div key={index} style={{ minWidth: "250px", textAlign: "center", flexShrink: 0 }}>
              <img
                src={place.img}
                alt={place.name}
                style={{
                  width: "250px",
                  height: "180px",
                  borderRadius: "16px",
                  objectFit: "cover",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              />
              <div style={{ marginTop: "8px", fontWeight: "bold" }}>{place.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeCardSection;
