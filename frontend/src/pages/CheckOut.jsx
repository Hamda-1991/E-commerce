import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";

const CheckOut = () => {
  const { CheckOut } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <>
      {CheckOut}
      <Box sx={{ marginTop: "120px", marginBottom: "100px" }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#7777" }}
            to="/Account"
          >
            Account /
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#7777" }}
            to="/Account"
          >
            My Account /
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#7777" }}
            to="/Product"
          >
            Product /
          </Link>
          <Link style={{ textDecoration: "none", color: "#7777" }} to="/Cart">
            View Cart /
          </Link>
          <Typography sx={{ color: "#000" }}>CheckOut</Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "500",
            color: "rgba(0, 0, 0, 1)",
            marginTop: "40px",
          }}
        >
          Billing Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{
              marginTop: "50px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <label
                  style={{
                    color: "#669",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  htmlFor="account-fname"
                >
                  First Name*
                </label>
                <input
                  style={{
                    width: "100%",
                    maxWidth: "470px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                  }}
                  type="text"
                  name="fname"
                  id="account-fname"
                  required
                />
                <label
                  style={{
                    color: "#669",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  htmlFor="account-company"
                >
                  Company Name
                </label>
                <input
                  style={{
                    width: "100%",
                    maxWidth: "470px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                  }}
                  type="text"
                  name="company"
                  id="account-company"
                />
                <label
                  style={{
                    color: "#669",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  htmlFor="account-address"
                >
                  Street Address*
                </label>
                <input
                  style={{
                    width: "100%",
                    maxWidth: "470px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                  }}
                  type="text"
                  name="address"
                  id="account-address"
                  required
                />
                <label
                  style={{
                    color: "#669",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  htmlFor="account-street"
                >
                  Street Address*
                </label>
                <input
                  style={{
                    width: "100%",
                    maxWidth: "470px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                  }}
                  type="text"
                  name="street"
                  id="account-street"
                  required
                />
                <label
                  style={{
                    color: "#669",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  htmlFor="account-city"
                >
                  Town/City*
                </label>
                <input
                  style={{
                    width: "100%",
                    maxWidth: "470px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                  }}
                  type="text"
                  name="city"
                  id="account-city"
                  required
                />
                <label
                  style={{
                    color: "#669",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  htmlFor="account-phone"
                >
                  Phone Number*
                </label>
                <input
                  style={{
                    width: "100%",
                    maxWidth: "470px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                  }}
                  type="text"
                  name="phone"
                  id="account-phone"
                  required
                />
                <label
                  style={{
                    color: "#669",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  htmlFor="account-email"
                >
                  Email Address*
                </label>
                <input
                  style={{
                    width: "100%",
                    maxWidth: "470px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                  }}
                  type="email"
                  name="email"
                  id="account-email"
                  required
                />
              </div>
              <FormControlLabel
                sx={{
                  marginTop: "25px",
                  color: "rgba(0, 0, 0, 1)",
                }}
                control={<Checkbox defaultChecked />}
                label="Save this information for faster check-out next time"
              />
              <Button
                type="submit"
                sx={{
                  display: "none",
                }}
              >
                Submit
              </Button>
            </form>
          </Stack>
          <Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="src/images/g27cq4-500x500 1.jpg"
                  alt="LCD Monitor"
                  style={{
                    width: "100%px",
                  }}
                />
                <Typography sx={{ fontSize: "14px" }}>LCD Monitor</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                $650
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="src/images/Gamepad-Cart-Small.jpg"
                  alt="Gamepad"
                  style={{
                    width: "100%px",
                  }}
                />
                <Typography sx={{ fontSize: "14px" }}>Gamepad</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                $1100
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", color: "#000" }}
              >
                Subtotal:
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", color: "#000" }}
              >
                $1750
              </Typography>
            </Box>
            <svg
              width="422"
              height="1"
              viewBox="0 0 422 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.37114e-08"
                y1="1"
                x2="422"
                y2="0.500037"
                stroke="grey"
              />
            </svg>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", color: "#000" }}
              >
                Shipping:
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", color: "#000" }}
              >
                Free
              </Typography>
            </Box>
            <svg
              width="422"
              height="1"
              viewBox="0 0 422 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.37114e-08"
                y1="1"
                x2="422"
                y2="0.500037"
                stroke="grey"
              />
            </svg>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "35px",
              }}
            >
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", color: "#000" }}
              >
                Total:
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "400", color: "#000" }}
              >
                $1750
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Bank"
              />
              <div>
                <img
                  style={{ width: "100%" }}
                  src="src/images/Frame 834.jpg"
                  alt="Bank"
                />
              </div>
            </Box>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Cash on delivery"
            />
            <Stack
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: "15px",
                margin: "25px 0",
              }}
            >
              <TextField
                sx={{
                  width: { xs: "100%", sm: "300px" },
                  height: "56px",
                  borderRadius: "4px",
                }}
                id="outlined-basic"
                label="Coupon Code"
                variant="outlined"
              />
              <Button
                sx={{
                  width: { xs: "100%", sm: "211px" },
                  height: "56px",
                  padding: "16px 48px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(219, 68, 68, 1)",
                  color: "#fff",
                  textAlign: "center",
                  ":hover": {
                    backgroundColor: "#fff",
                    color: "rgba(219, 68, 68, 1)",
                  },
                }}
              >
                Apply Coupon
              </Button>
            </Stack>
            <Button
              onClick={() => document.querySelector("form").requestSubmit()}
              sx={{
                width: "190px",
                height: "56px",
                padding: "16px 48px",
                borderRadius: "4px",
                backgroundColor: "rgba(219, 68, 68, 1)",
                color: "#fff",
                textAlign: "center",
                ":hover": {
                  backgroundColor: "#fff",
                  color: "rgba(219, 68, 68, 1)",
                },
              }}
              variant="contained"
            >
              Place Order
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default CheckOut;
