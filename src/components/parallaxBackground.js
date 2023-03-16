import { Typography, Container } from "@mui/material";
import { useState, useEffect } from "react";

function ParallaxBackground() {
  const [position, setPosition] = useState(0);
  const scrollFactor = 1; // adjust this value to control scroll speed
  const transitionDuration = "0.3s"; // adjust this value to control transition speed

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.pageYOffset * scrollFactor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollFactor]);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: `${position}px`,
    backgroundImage: "url('/path/to/image')",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: `top ${transitionDuration} ease-out`,
  };

  return (
    <Container sx={containerStyle}>
      <Typography variant="h1">Hello, world!</Typography>
    </Container>
  );
}

export default ParallaxBackground;
