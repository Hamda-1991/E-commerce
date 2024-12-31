import React from "react";
import { Container, Typography, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
const options = ["Arabic", "English"];

function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component="nav" aria-label="Device settings" sx={{}}>
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="language selection"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ display: "flex", gap: "5px" }}
        >
          <ListItemText
            sx={{
              ".MuiTypography-root": {
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Poppins",
                color: "#FAFAFA",
              },
            }}
            secondary={options[selectedIndex]}
          />
          <ExpandMoreIcon sx={{ color: "#FFFFFF", fontSize: "16px" }} />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        sx={{
          ".MuiList-root": { backgroundColor: "#7777" },
          ".MuiButtonBase-root": { fontSize: "12px" },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

const TopHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        height: { xs: "auto", sm: "48px" },
        padding: { xs: "8px 0", sm: "0" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          height: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#FAFAFA",
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Poppins",
            textAlign: { xs: "center", sm: "left" },
            marginBottom: { xs: "8px", sm: "0" },
          }}
        >
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </Typography>
        <Link
          underline="always"
          style={{
            color: "#FAFAFA",
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Poppins",
            textAlign: { xs: "center", sm: "right" },
            marginBottom: { xs: "8px", sm: "0" },
          }}
          to="/Product"
        >
          ShopNow
        </Link>
        <SimpleListMenu />
      </Container>
    </Box>
  );
};

export default TopHeader;
