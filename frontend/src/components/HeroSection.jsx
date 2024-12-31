import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Container, Link, Stack } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const categoryImages = {
  "Woman`s Fashion": "src/images/alexi-romano-CCx6Fz_CmOI-unsplash.jpg",
  "Men`s Fashion": "src/images/maksym-tymchyk-jvo1UJ-eQaU-unsplash.jpg",
  Electronics: "src/images/lucas-favre-4x-67z_TaGo-unsplash.jpg",
  "Home & Lifestyle": "src/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg",
  Medicine: "src/images/julia-zyablova-S1v7hVUiCg0-unsplash.jpg",
  "Sports & Outdoor": "src/images/razvan-chisu-VeURe8Fk5IU-unsplash.jpg",
  "Baby’s & Toys": "src/images/the-nix-company-CkCUvwMXAac-unsplash.jpg",
  "Groceries & Pets": "src/images/anna-kaminova-bqPXAXzRIsI-unsplash.jpg",
  "Health & Beauty": "src/images/pmv-chamara-dMjkQJs58uo-unsplash.jpg",
};

const HeroSection = () => {
  const [currentCategory, setCurrentCategory] = useState("Woman`s Fashion");

  useEffect(() => {
    if (!categoryImages[currentCategory]) {
      setCurrentCategory("Woman`s Fashion");
    }
  }, [currentCategory]);

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "20px",
            flexGrow: 1,
            minWidth: { xs: "100%", md: "20%" },
          }}
        >
          {Object.keys(categoryImages).map((category, index) => (
            <Link
              key={index}
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(0, 0, 0, 1)",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
              href="#"
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </Link>
          ))}
        </Stack>
        <Box sx={{ flexGrow: 3, display: "flex", width: "100%" }}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ width: "100%" }}
          >
            <SwiperSlide>
              <img
                src={categoryImages[currentCategory]}
                alt={currentCategory}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
