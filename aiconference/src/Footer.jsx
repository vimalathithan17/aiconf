import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #003B8B, #007FCF)",
        color: "#ffffff",
        textAlign: "center",
        padding: "30px 20px",
        fontSize: "1.1rem",
        borderTop: "4px solid #ffffff44",
        marginTop: "40px",
      }}
    >
      <p>&copy; {new Date().getFullYear()} AI Conference. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
