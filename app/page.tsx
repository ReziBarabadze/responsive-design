"use client";
import Card from "@/components/Card";
import { Box } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const page = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  const data = [
    {
      color: "#e28625",
      image: "images/icon-sedans.svg",
      title: "Sedans",
      description:
        "Choose a sedan for it's affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
    },
    {
      color: "#006971",
      image: "images/icon-suvs.svg",
      title: "SUVS",
      description:
        "Take an SUV for it's spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures",
    },
    {
      color: "#004140",
      image: "images/icon-luxury.svg",
      title: "Luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: mobile ? "auto" : "98vh",
        flexDirection: mobile ? "column" : "row",
      }}
    >
      {data.map((card) => {
        return (
          <Card
            key={card.title}
            color={card.color}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </Box>
  );
};

export default page;
