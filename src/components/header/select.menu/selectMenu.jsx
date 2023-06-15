import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Пицца",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Напитки",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Закуски",
    description: "3.98M views",
  },
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Суши",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Десерты",
    description: "4.21M views",
  },
];

export default function CarouselMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        py: 1,
        overflow: "auto",
        width: 9.5 / 10,
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((item) => (
        <Card
          orientation="horizontal"
          key={item.title}
          variant="outlined"
          sx={{
            minWidth: 86,
            minHeight: 34,
            gap: 1.5,
            paddingY: 1,
            paddingX: 1.5,
            alignItems: "center",
          }}
        >
          <AspectRatio ratio="1" sx={{ minWidth: 24 }}>
            <img
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
