import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  color: string;
  image: string;
  title: string;
  description: string;
}

const Card = ({ color, image, title, description }: Props) => {
  return (
    <Box
      sx={{
        maxHeight: "500px",
        maxWidth: "300px",
        backgroundColor: color,
        padding: "3rem",
      }}
    >
      <Image src={image} alt={title} height={40} width={64} />
      <Typography
        sx={{
          color: "#fff",
          textTransform: "uppercase",
          fontSize: "2.5rem",
          fontWeight: 600,
          margin: "2rem auto",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          lineHeight: "2rem",
          maxWidth: "12rem",
          fontSize: "15px",
        }}
      >
        {description}
      </Typography>
      <Button
        sx={{
          color: color,
          backgroundColor: "#fff",
          borderRadius: "25px",
          padding: "0.75rem 2rem",
          marginTop: "83px",
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default Card;
