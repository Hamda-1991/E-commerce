import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const BuyNow = () => {
  return (
    <Box sx={{ marginTop: "140px" }}>
      <Container>
        <Stack
          sx={{
            width: "100%",
            height: "500px",
            backgroundColor: "rgba(0, 0, 0, 1)",
            position: "relative",
            padding: { xs: "20px", md: "0" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              opacity: "1",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                gap: "30px",
                marginTop: { xs: "20px", md: "30px" },
                marginLeft: { xs: "0", md: "20px" },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Button
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: "600",
                  color: "rgba(0, 255, 102, 1)",
                }}
                href="#text-buttons"
              >
                Categories
              </Button>
              <Typography
                sx={{
                  fontSize: { xs: "32px", md: "48px" },
                  fontWeight: "600",
                  color: "rgba(250, 250, 250, 1)",
                }}
              >
                Enhance Your Music Experience
              </Typography>
              <img
                src="src/images/Frame 601.jpg"
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                }}
              />
              <Button
                sx={{
                  width: { xs: "100%", md: "171px" },
                  height: "56px",
                  padding: "16px",
                  color: "rgba(250, 250, 250, 1)",
                  borderRadius: "4px",
                  backgroundColor: "rgba(0, 255, 102, 1)",
                  marginTop: { xs: "20px", md: "0" },
                }}
                variant="contained"
                component={Link}
                to="/Product"
              >
                Buy Now!
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { xs: "20px", md: "0" },
                width: { xs: "100%", md: "auto" },
                opacity: { sm: "1" },
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  padding: "5px",
                }}
              >
                <img
                  src="src/images/Frame 694 (1).png"
                  alt=""
                  style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BuyNow;
