import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url('background.webp')`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#ffffff", // White text for contrast
        padding: "20px",
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      {/* Add Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "500px",
            margin: "0 auto",
            fontWeight: "400",
          }}
        >
          Hi, I’m Henry Chen, a Computer Science student at Cal Poly, passionate
          about technology and the art of crafting unique tea blends.
        </p>
      </div>
    </div>
  );
};

export default Home;
