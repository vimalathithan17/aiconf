import React from "react";

const Sponsor = () => {
  const sponsors = [
    {
      name: "Sponsor One",
      image: "/sponsors/sponsor1.png",
    },
    {
      name: "Sponsor Two",
      image: "/sponsors/sponsor2.png",
    },
    {
      name: "Sponsor Three",
      image: "/sponsors/sponsor3.png",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #003B8B, #007FCF)",
        padding: "50px 20px",
        textAlign: "center",
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

      {/* Sponsors Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(135deg, #007FCF, #00B4DB)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "200px",
              border: "3px solid #c9d6e3",
            }}
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              style={{
                width: "100%",
                borderRadius: "10px",
                objectFit: "contain",
                height: "100px",
              }}
            />
            <p
              style={{
                color: "#fff",
                marginTop: "10px",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {sponsor.name}
            </p>
          </div>
        ))}
      </div>

      {/* Association Line with Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          marginTop: "50px",
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
