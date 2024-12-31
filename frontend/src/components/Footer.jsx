import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    { name: "My Account", path: "/Account" },
    { name: "Login / Register", path: "/LogIn" },
    { name: "Cart", path: "/Cart" },
    { name: "Wishlist", path: "/WishList" },
    { name: "Shop", path: "/Product" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        mt: 8,
        py: 6,
        // height: "440px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            mt: 4,
            mb: 4,
            width: "100%",
            gap: "35px",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",

              flexDirection: "column",
              mb: { xs: 4, md: 0 },
              gap: "30px",
            }}
          >
            <Button
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: "rgba(250, 250, 250, 1)",
              }}
            >
              Exclusive
            </Button>
            <Link
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "rgba(250, 250, 250, 1)",
                textDecoration: "none",
              }}
            >
              Subscribe
            </Link>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(250, 250, 250, 1)",
                textAlign: "center",
              }}
            >
              Get 10% off your first order
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                borderRadius: "4px",
                width: "100%",
                maxWidth: "300px",
                border: "1.5px solid rgba(250, 250, 250, 1)",
              }}
            >
              <InputBase
                placeholder="Enter your email"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  width: "100%",
                  padding: "12px 0px 12px 16px",
                  color: "rgba(250, 250, 250, 1)",
                }}
              />
              <IconButton>
                <SendIcon sx={{ color: "rgba(250, 250, 250, 1)" }} />
              </IconButton>
            </Box>
          </Stack>
          <Stack
            sx={{
              alignItems: "center",

              flexDirection: "column",
              mb: { xs: 4, md: 0 },
              gap: "45px",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "rgba(250, 250, 250, 1)",
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(250, 250, 250, 1)",
                textAlign: "center",
              }}
            >
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </Typography>
            <Link
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(250, 250, 250, 1)",
                textDecoration: "none",
              }}
            >
              exclusive@gmail.com
            </Link>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(250, 250, 250, 1)",
              }}
            >
              +88015-88888-9999
            </Typography>
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              mb: { xs: 4, md: 0 },
              gap: "20px",
            }}
          >
            <Link
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "rgba(250, 250, 250, 1)",
                textDecoration: "none",
              }}
              to="/Account"
            >
              Account
            </Link>

            {links.map((link) => (
              <Link
                key={link.name}
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgba(250, 250, 250, 1)",
                  textDecoration: "none",
                }}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
          <Stack
            sx={{
              alignItems: "center",

              flexDirection: "column",
              mb: { xs: 4, md: 0 },
              gap: "30px",
            }}
          >
            <Link
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "rgba(250, 250, 250, 1)",
                textDecoration: "none",
              }}
            >
              Quick Link
            </Link>
            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(250, 250, 250, 1)",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
              gap: "30px",
              flexDirection: "column",
            }}
          >
            <Link
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "rgba(250, 250, 250, 1)",
                textDecoration: "none",
              }}
            >
              Download App
            </Link>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                color: "rgba(250, 250, 250, 0.8)",
                textAlign: "center",
              }}
            >
              Save $3 with App New User Only
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                style={{ width: "100%", maxWidth: "80px" }}
                src="src\images\Qr Code.jpg"
                alt="QR Code"
              />
              <Stack sx={{ flexDirection: "column", alignItems: "center" }}>
                <Box>
                  <img
                    style={{ width: "100%", maxWidth: "100px" }}
                    src="src\images\GooglePlay.jpg"
                    alt="Google Play"
                  />
                </Box>
                <Box>
                  <img
                    style={{ width: "100%", maxWidth: "100px" }}
                    src="src\images\download-appstore.jpg"
                    alt="App Store"
                  />
                </Box>
              </Stack>
            </Box>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mt: 2,
                color: "white",
              }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 0.4)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CopyrightOutlinedIcon />
          <Typography>Copyright Rimel 2022. All right reserved</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
