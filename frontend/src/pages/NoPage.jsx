import { Box, Button, Stack, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "100px" }}>
        <div>
          <Link style={{ textDecoration: "none", color: "#7777" }} to="/">
            Home /
          </Link>
          Contact
        </div>
        <Stack
          sx={{
            margin: "100px 0",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "60px", md: "110px" },
              fontWeight: "500",
              lineHeight: { xs: "70px", md: "115px" },
              letterSpacing: "3%",
              color: "rgba(0, 0, 0, 1)",
              marginBottom: "20px",
            }}
          >
            404 Not Found
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "rgba(0, 0, 0, 1)",
              marginTop: "30px",
            }}
          >
            Your visited page not found. You may go home page.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Button
              sx={{
                width: "254px",
                height: "56px",
                padding: "16px 48px",
                borderRadius: "4px",
                backgroundColor: "rgba(219, 68, 68, 1)",
                color: "#ffff",
                textAlign: "center",
                marginTop: "70px",
              }}
              component={Link}
              to="/"
            >
              Back to home page
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default NoPage;
