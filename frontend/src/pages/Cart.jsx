import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartId } = useParams();

  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartId}
      <Box sx={{ marginTop: "100px" }}></Box>

      <div>
        <Link style={{ textDecoration: "none", color: "#7777" }} to="/">
          Home /
        </Link>{" "}
        Cart
      </div>
      <Box marginTop="30px">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      $
                      {item.discountedPrice !== undefined
                        ? item.discountedPrice.toFixed(2)
                        : item.price.toFixed(2)}
                    </TableCell>
                    <TableCell>1</TableCell>{" "}
                    {/* Defaulting to 1 for simplicity */}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <Typography variant="h6">Your cart is empty</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button
            sx={{
              width: "218px",
              height: "56px",
              padding: "16px 48px",
              borderRadius: "4px",
              border: "1px solid #7777",
              backgroundColor: "#fff",
              color: "#000",
              textAlign: "center",
              ":hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            Return To Shop
          </Button>
          <Button
            sx={{
              width: "218px",
              height: "56px",
              padding: "16px 48px",
              borderRadius: "4px",
              border: "1px solid #7777",
              backgroundColor: "#fff",
              color: "#000",
              textAlign: "center",
              ":hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            Update Cart
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <TextField
            sx={{
              width: "300px",
              height: "56px",
              borderRadius: "4px",
            }}
            id="outlined-basic"
            label="Coupon Code"
            variant="outlined"
          />
          <Button
            sx={{
              width: "211px",
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
        <Stack
          sx={{
            width: "470px",
            height: "324px",
            borderRadius: "4px",
            border: "1.5px solid #7777",
            backgroundColor: "#fff",
            color: "#000",
            padding: "20px",
            marginTop: { xs: "20px", md: "0" },
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "15px",
              padding: "10px",
            }}
          >
            Cart Total
          </Typography>
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
          <Box sx={{ margin: "0 auto" }}>
            <Button
              sx={{
                width: "260px",
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
              component={Link}
              to="/CheckOut"
            >
              Proceed to checkout
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Cart;
