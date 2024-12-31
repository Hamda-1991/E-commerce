import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";

const SignUp = () => {
  const { SignUp } = useParams();
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
      {SignUp}
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
          Create an account
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
              id="name-input"
              label="Name"
              type="text"
              autoComplete="name"
              variant="standard"
              fullWidth
            />

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
        <Button
          sx={{
            width: "100%",
            maxWidth: "400px",
            height: "56px",
            padding: "16px",
            gap: "10px",
            borderRadius: "4px",
            backgroundColor: "rgba(219, 68, 68, 1)",
            color: "#fff",
            ":hover": {
              backgroundColor: "#fff",
              color: "rgba(219, 68, 68, 1)",
              border: "1px solid rgba(219, 68, 68, 1)",
            },
          }}
          variant="contained"
          href="#contained-buttons"
        >
          Create Account
        </Button>
        <Button
          sx={{
            width: "100%",
            maxWidth: "400px",
            height: "56px",
            padding: "16px",
            gap: "10px",
            borderRadius: "4px",
            border: "1px solid #777",
            backgroundColor: "#ffffff",
            ":hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
          variant="contained"
          href="#contained-buttons"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flexDirection: "row",
            }}
          >
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2401 5.24966C12.9509 5.2232 14.6044 5.86697 15.8434 7.04867L19.2695 3.62262C17.1001 1.5855 14.2208 0.465534 11.2401 0.500809C6.7029 0.500809 2.55371 3.05822 0.516602 7.11481L4.50264 10.2058C5.45064 7.36173 8.10947 5.24966 11.2401 5.24966Z"
                fill="#EA4335"
              />
            </svg>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              Sign up with Google
            </Typography>
          </Box>
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(0, 0, 0, 1)",
            }}
          >
            Already have an account?
          </Typography>
          <MuiLink
            component={Link}
            to="/login"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "rgba(0, 0, 0, 1)",
              textDecoration: "none",
            }}
          >
            Log in
          </MuiLink>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignUp;
