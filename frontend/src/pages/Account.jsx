import { Box, Stack, Typography, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";

const Account = () => {
  const { Account } = useParams();
  return (
    <>
      {Account}
      <Box sx={{ marginTop: "100px", padding: { xs: "20px", md: "50px" } }}>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: "20px", md: "0" },
          }}
        >
          <div>
            <Link style={{ textDecoration: "none", color: "#777" }} to="/">
              Home /
            </Link>
            My Account
          </div>
          <div>
            Welcome!{" "}
            <span style={{ color: "rgba(219, 68, 68, 1)" }}>Md Rimel</span>
          </div>
        </Stack>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            marginTop: "100px",
            gap: { xs: "20px", md: "0" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "25px",
              padding: "20px",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 1)",
                fontSize: "16px",
                fontWeight: "500",
              }}
              href="#"
            >
              Manage My Account
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(219, 68, 68, 1)",
                fontSize: "16px",
                fontWeight: "400",
              }}
              href="#"
            >
              My Profile
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#777",
                fontSize: "16px",
                fontWeight: "400",
              }}
              href="#"
            >
              Address Book
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#777",
                fontSize: "16px",
                fontWeight: "400",
              }}
              href="#"
            >
              My Payment Options
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 1)",
                fontSize: "16px",
                fontWeight: "500",
              }}
              href="#"
            >
              My Orders
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#777",
                fontSize: "16px",
                fontWeight: "400",
              }}
              href="#"
            >
              My Returns
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#777",
                fontSize: "16px",
                fontWeight: "400",
              }}
              href="#"
            >
              My Cancellations
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 1)",
                fontSize: "16px",
                fontWeight: "500",
              }}
              to="/WishList"
            >
              My WishList
            </Link>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "870px" },
              height: "auto",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              borderRadius: "4px",
              padding: { xs: "20px", md: "50px" },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "rgba(219, 68, 68, 1)",
                marginY: "20px",
              }}
            >
              Edit Your Profile
            </Typography>
            <form>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(0, 0, 0, 1)",
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "10px",
                    }}
                    htmlFor="account-fname"
                  >
                    First Name
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(245, 245, 245, 1)",
                      border: "none",
                      textAlign: "center",
                    }}
                    type="text"
                    name="fname"
                    id="account-fname"
                    placeholder="Md"
                    required
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(0, 0, 0, 1)",
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "10px",
                    }}
                    htmlFor="account-lname"
                  >
                    Last Name
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(245, 245, 245, 1)",
                      border: "none",
                      textAlign: "center",
                    }}
                    type="text"
                    name="lname"
                    id="account-lname"
                    placeholder="Rimel"
                    required
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(0, 0, 0, 1)",
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "10px",
                    }}
                    htmlFor="account-email"
                  >
                    Email
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(245, 245, 245, 1)",
                      border: "none",
                      textAlign: "center",
                    }}
                    type="email"
                    name="email"
                    id="account-email"
                    placeholder="rimel1111@gmail.com"
                    required
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <label
                    style={{
                      color: "rgba(0, 0, 0, 1)",
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "10px",
                    }}
                    htmlFor="account-address"
                  >
                    Address
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(245, 245, 245, 1)",
                      border: "none",
                      textAlign: "center",
                    }}
                    type="text"
                    name="address"
                    id="account-address"
                    placeholder="Kingston, 5236, United State"
                    required
                  />
                </Box>
              </Box>

              <Box sx={{ marginTop: "25px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(0, 0, 0, 1)",
                    lineHeight: "24px",
                  }}
                >
                  Password Changes
                </Typography>
                <input
                  style={{
                    width: "100%",
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
                  placeholder="Current Password"
                  required
                />
                <input
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                    textAlign: "center",
                  }}
                  type="password"
                  name="new-password"
                  id="account-new-password"
                  placeholder="New Password"
                  required
                />
                <input
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(245, 245, 245, 1)",
                    border: "none",
                    textAlign: "center",
                  }}
                  type="password"
                  name="confirm-new-password"
                  id="account-confirm-new-password"
                  placeholder="Confirm New Password"
                  required
                />
              </Box>
            </form>
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 1)",
                  lineHeight: "24px",
                }}
              >
                Cancel
              </Typography>
              <Button
                sx={{
                  width: "214px",
                  height: "56px",
                  backgroundColor: "rgba(219, 68, 68, 1)",
                  color: "#ffff",
                  borderRadius: "16px, 48px, 16px, 48px",
                  textAlign: "center",
                }}
              >
                Save Changes
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Account;
