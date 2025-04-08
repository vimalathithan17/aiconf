import React from "react";

const Sponsor = () => {
  return (
    <div
      style={{
        width: "100%", // Use full container width
        background: "linear-gradient(135deg, #003B8B, #007FCF)",
        padding: "50px 20px",
        textAlign: "center",
        boxSizing: "border-box", // Include padding in width calculation
        margin: 0,
      }}
    >
      {/* Section Title */}
      <h2
        style={{
          color: "#fff",
          fontSize: "2rem",
          marginBottom: "40px",
        }}
      >
        Our Sponsors
      </h2>

      {/* "To be announced" with Hover Effect */}
      <p
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          fontWeight: "500",
          marginBottom: "60px",
          transition: "transform 0.3s ease, textShadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.textShadow = "none";
        }}
      >
        To be announced
      </p>

      {/* Association Line with Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "1.6rem",
            margin: 0,
          }}
        >
          In association with
        </h2>
        <img
          src="/sponsors/psgcare.png"
          alt="PSG CARE"
          style={{
            height: "50px",
            borderRadius: "10px",
            background: "#fff",
            padding: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default Sponsor;