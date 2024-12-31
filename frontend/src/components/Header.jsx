import { useState, useContext } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  InputBase,
  IconButton,
  useMediaQuery,
  useTheme,
  BottomNavigationAction,
  Button,
  MenuItem,
  Menu,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMall";
import CancelOutlinedIcon from "@mui/icons-material/LocalMall";
import StarBorderOutlinedIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/LocalMall";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { getCartQuantity } = useContext(CartContext);
  const cartQuantity = getCartQuantity();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/Contact" },
    { name: "About", path: "/About" },
    { name: "Sign Up", path: "/SignUp" },
  ];

  return (
    <Box>
      <Container
        sx={{
          marginTop: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: "15px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            color: "rgba(0, 0, 0, 1)",
            textAlign: isSmallScreen ? "center" : "left",
          }}
        >
          Exclusive
        </Typography>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          spacing={isSmallScreen ? 1 : 3}
          alignItems="center"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(0, 0, 0, 1)",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </Stack>
        <Stack
          direction="row"
          spacing={isSmallScreen ? 1 : 3}
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(245, 245, 245, 1)",
              padding: "0 10px",
              borderRadius: "4px",
              width: isSmallScreen ? "100%" : "243px",
              height: "38px",
            }}
          >
            <InputBase
              placeholder="What are you looking for?"
              inputProps={{ "aria-label": "search" }}
              sx={{
                flex: 1,
                fontSize: "12px",
              }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Button component={Link} to="/WishList">
              <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
              />
            </Button>
            <Button
              style={{ color: "#000", position: "relative" }}
              component={Link}
              to="/Cart"
            >
              <LocalGroceryStoreOutlinedIcon />
              {cartQuantity > 0 && (
                <div
                  style={{
                    position: "absolute",
                    color: "#ffff",
                    backgroundColor: "#FF1111",
                    top: "-5px",
                    right: "2px",
                    width: "21px",
                    height: "21px",
                    borderRadius: "50%",
                    textAlign: "center",
                  }}
                >
                  {cartQuantity}
                </div>
              )}
            </Button>

            <Button
              variant="contained"
              onClick={handleMenuOpen}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffff",
                color: "#000",
                ":hover": {
                  backgroundColor: "rgba(219, 68, 68, 1)",
                  color: "#ffff",
                },
              }}
            >
              <PersonOutlineOutlinedIcon />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <PersonOutlineOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/Account"
                >
                  <ListItemText>Manage My Account</ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <LocalMallOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>My Order</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <CancelOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>My Cancellations</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <StarBorderOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>My Reviews</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/LogIn"
                >
                  <ListItemText>Logout</ListItemText>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemIcon>
                  <LoginIcon fontSize="small" />
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/LogIn"
                >
                  <ListItemText>Login</ListItemText>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
