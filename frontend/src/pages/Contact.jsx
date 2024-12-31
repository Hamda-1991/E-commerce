import { Box, Button, Stack } from "@mui/material";
import { useParams, Link } from "react-router-dom";

const Contact = () => {
  const { Contact } = useParams();
  return (
    <>
      {Contact}

      <Box sx={{ marginTop: "100px" }}>
        <div>
          <Link style={{ textDecoration: "none", color: "#7777" }} to="/">
            Home /
          </Link>
          Contact
        </div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
            gap: "25px",
            marginTop: "80px",
          }}
        >
          <Box
            sx={{
              width: "340px",
              height: "457px",
              borderRadius: "4px",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              padding: "25px",
            }}
          >
            <img style={{}} src="src\images\Frame 863.jpg" />
          </Box>
          <Box
            sx={{
              width: "800px",
              height: "457px",
              borderRadius: "4px",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              padding: "25px",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                gap: "25px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <input
                style={{
                  width: "235px",
                  marginTop: "20px",
                  height: "50px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                  border: "none",
                  textAlign: "center",
                }}
                type="password"
                name="current-password"
                id="account-current-password"
                placeholder="Your Name *"
                required
              />
              <input
                style={{
                  width: "235px",
                  marginTop: "20px",
                  height: "50px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                  border: "none",
                  textAlign: "center",
                }}
                type="password"
                name="current-password"
                id="account-current-password"
                placeholder="Your Email *"
                required
              />
              <input
                style={{
                  width: "235px",
                  marginTop: "20px",
                  height: "50px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(245, 245, 245, 1)",
                  border: "none",
                  textAlign: "center",
                }}
                type="password"
                name="current-password"
                id="account-current-password"
                placeholder="Your Phone *"
                required
              />
            </Stack>

            <input
              style={{
                width: "760px",
                marginTop: "20px",
                height: "207px",
                borderRadius: "4px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "none",

                textAlign: "start",
              }}
              type="password"
              name="current-password"
              id="account-current-password"
              placeholder="Your Massage"
              required
            />
            <Button
              sx={{
                width: "215px",
                height: "56px",
                padding: "16px 48px 16px 48px",
                backgroundColor: "rgba(219, 68, 68, 1)",
                borderRadius: "4px",
                color: "#ffff",
                marginY: "20px",
              }}
            >
              Send Massage
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Contact;
