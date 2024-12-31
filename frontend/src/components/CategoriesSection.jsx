import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

const CategoriesSection = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const products = [
    {
      icon: (
        <PhoneIphoneOutlinedIcon
          sx={{
            color: "#686D76",
            ":hover": {
              color: "rgba(250, 250, 250, 1)",
            },
          }}
        />
      ),
      label: "Phones",
    },
    {
      icon: (
        <ImportantDevicesOutlinedIcon
          sx={{
            color: "#686D76",
            ":hover": {
              color: "rgba(250, 250, 250, 1)",
            },
          }}
        />
      ),
      label: "Computer",
    },
    {
      icon: (
        <WatchOutlinedIcon
          sx={{
            color: "#686D76",
            ":hover": {
              color: "rgba(250, 250, 250, 1)",
            },
          }}
        />
      ),
      label: "Smart Watch",
    },
    {
      icon: (
        <CameraAltOutlinedIcon
          sx={{
            color: "#686D76",
            ":hover": {
              color: "rgba(250, 250, 250, 1)",
            },
          }}
        />
      ),
      label: "Camera",
    },
    {
      icon: (
        <HeadphonesRoundedIcon
          sx={{
            color: "#686D76",
            ":hover": {
              color: "rgba(250, 250, 250, 1)",
            },
          }}
        />
      ),
      label: "Headphones",
    },
    {
      icon: (
        <SportsEsportsOutlinedIcon
          sx={{
            color: "#686D76",
            ":hover": {
              color: "rgba(250, 250, 250, 1)",
            },
          }}
        />
      ),
      label: "Gaming",
    },
  ];

  const visibleProducts = 3;

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevProduct = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <Box sx={{ marginTop: "100px" }}>
      <Container>
        <Stack direction="row" alignItems="center" gap="6px">
          <Box>
            <svg
              width="15"
              height="35"
              viewBox="0 0 20 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="40" rx="4" fill="#DB4444" />
            </svg>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: "600",
              color: "rgba(219, 68, 68, 1)",
            }}
          >
            Categories
          </Typography>
        </Stack>
        <Stack
          sx={{
            marginTop: "20px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px", md: "36px" },
                fontWeight: "600",
                color: "rgba(0, 0, 0, 1)",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Browse By Category
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", sm: "20px" },
            }}
          >
            <IconButton
              aria-label="previous product"
              onClick={handlePrevProduct}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 5L4 12L11 19M4 12H20" stroke="black" />
              </svg>
            </IconButton>
            <IconButton aria-label="next product" onClick={handleNextProduct}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" />
              </svg>
            </IconButton>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            overflow: "hidden",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {products
            .slice(currentProductIndex, currentProductIndex + visibleProducts)
            .map((item, index) => (
              <Button
                key={index}
                sx={{
                  border: "solid 1px rgba(0, 0, 0, 0.3)",
                  width: { xs: "100px", sm: "130px", md: "170px" },
                  height: { xs: "100px", sm: "130px", md: "145px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  backgroundColor: "rgba(250, 250, 250, 1)",
                  ":hover": {
                    backgroundColor: "rgba(219, 68, 68, 1)",
                  },
                }}
                variant="contained"
                href="#contained-buttons"
              >
                {item.icon}
                <Typography
                  sx={{
                    color: "#686D76",
                    ":hover": {
                      color: "rgba(250, 250, 250, 1)",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Button>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CategoriesSection;
