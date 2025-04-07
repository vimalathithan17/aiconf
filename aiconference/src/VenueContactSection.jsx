import React from "react";

const containerStyle = {
  background: "linear-gradient(135deg, #003B8B, #007FCF)",
  padding: "40px 20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
};

const cardStyle = {
  background: "linear-gradient(135deg, #007FCF, #00B4DB)",
  borderRadius: "20px",
  padding: "30px",
  color: "#fff",
  boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
  flex: "1 1 400px",
  maxWidth: "600px",
  border: "3px solid #c9d6e3",
};

const mapStyle = {
  width: "100%",
  height: "300px",
  border: "0",
  borderRadius: "10px",
  marginTop: "20px",
};

const VenueContactSection = () => {
  return (
    <div style={containerStyle}>
      {/* Venue + Map */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: "1.8em", marginBottom: "10px" }}>Event Venue</h2>
        <p style={{ fontSize: "1.1em" }}>
          PSG College of Technology, Avinashi Rd, Peelamedu, Coimbatore, Tamil Nadu 641004
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1914993660457!2d77.00282279999999!3d11.0242544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1744041410975!5m2!1sen!2sin"
          style={mapStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Event Location"
        ></iframe>
      </div>

      {/* Contact Us */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: "1.8em", marginBottom: "10px" }}>Contact Us</h2>
        <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
          <strong>Address:</strong> PSG College of Technology,<br />
          Avinashi Road, Peelamedu,<br />
          Coimbatore - 641004, Tamil Nadu, India.
        </p>
        <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
          <strong>Phone:</strong> +91 422 2572177
        </p>
        <p style={{ fontSize: "1.1em" }}>
          <strong>Email:</strong> contact@psgtech.edu
        </p>
      </div>
    </div>
  );
};

export default VenueContactSection;
