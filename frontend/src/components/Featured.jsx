import { Box, Container, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <Box sx={{ marginTop: "120px", marginBottom: "120px" }}>
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
            Featured
          </Typography>
        </Stack>
        <Stack
          sx={{
            marginTop: "20px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: "20px", md: "40px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "30px", md: "36px" },
                fontWeight: "600",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              New Arrival
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexDirection: { xs: "column", sm: "row" },
            marginTop: "30px",
          }}
        >
          <Box>
            <Button
              sx={{
                backgroundColor: "rgba(250, 250, 250, 1)",
              }}
              variant="contained"
              component={Link}
              to="/Product"
            >
              <img
                style={{
                  width: "100%",
                }}
                src="src\images\Frame 684.jpg"
                alt=""
              />
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                backgroundColor: "rgba(250, 250, 250, 1)",
                marginBottom: { xs: "0", sm: "15px" },
              }}
              variant="contained"
              component={Link}
              to="/Product"
            >
              <img
                style={{
                  width: "100%",
                }}
                src="src\images\Frame 685.jpg"
                alt=""
              />
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Button
                sx={{
                  backgroundColor: "rgba(250, 250, 250, 1)",
                }}
                variant="contained"
                component={Link}
                to="/Product"
              >
                <img
                  style={{
                    width: "100%",
                  }}
                  src="src\images\Frame 686.jpg"
                  alt=""
                />
              </Button>
              <Button
                sx={{
                  backgroundColor: "rgba(250, 250, 250, 1)",
                }}
                variant="contained"
                component={Link}
                to="/Product"
              >
                <img
                  style={{
                    width: "100%",
                  }}
                  src="src\images\Frame 687.jpg"
                  alt=""
                />
              </Button>
            </Box>
          </Box>
        </Stack>
        <Box
          sx={{
            marginTop: { xs: "100px", md: "135px" },
            marginLeft: { xs: "0", sm: "auto" },
            marginRight: { xs: "0", sm: "auto" },
          }}
        >
          <img
            src="src\images\Frame 702.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
