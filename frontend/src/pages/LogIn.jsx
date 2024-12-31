import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";

const LogIn = () => {
  const { LogIn } = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {LogIn}
      <Stack
        sx={{
          width: { xs: "100%", md: "50%" },
          mb: { xs: "20px", md: "0" },
        }}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src="src\images\Side Image.jpg"
          alt="Side Image"
        />
      </Stack>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "500",
            color: "rgba(0, 0, 0, 1)",
            textAlign: "center",
          }}
        >
          Log in to Exclusive
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 1)",
            textAlign: "center",
          }}
        >
          Enter your details below
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
            maxWidth: "400px",
            width: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="email-phone-input"
              label="Email or Phone Number"
              type="text"
              variant="standard"
              fullWidth
            />

            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              fullWidth
            />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Button
            sx={{
              width: "143px",
              height: "56px",
              padding: "16px 48px 16px 48px",

              borderRadius: " 4px",
              backgroundColor: "rgba(219, 68, 68, 1)",
              color: "#ffff",
              textAlign: "center",
              fontSize: "12px",
              ":hover": {
                backgroundColor: "#ffff",
                color: "rgba(219, 68, 68, 1)",
              },
            }}
            variant="contained"
            href="#contained-buttons"
          >
            Log In
          </Button>
          <Link
            style={{
              color: "rgba(219, 68, 68, 1)",
              fontSize: "16px",
              fontWeight: "400",
              textDecoration: "none",
            }}
          >
            Forget Password?
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default LogIn;
