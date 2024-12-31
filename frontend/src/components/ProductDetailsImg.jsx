import { Box, Container, CircularProgress, Typography } from "@mui/material";
import { useGetProductByNameQuery } from "../Redux/product";

const ProductDetailsImg = () => {
  const { data, error, isLoading } = useGetProductByNameQuery(
    "products?populate=*"
  );

  if (isLoading) {
    return (
      <Container sx={{ marginTop: "50px", textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ marginTop: "50px", textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Failed to load products
        </Typography>
      </Container>
    );
  }

  if (data && data.data) {
    const products = data.data;
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          mt: 4,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              backgroundColor: "rgba(245, 245, 245, 1)",
              width: "300px",
              height: "340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            {product.attributes.image && product.attributes.image.data && (
              <img
                src={`${import.meta.env.VITE_BASE_URL}${
                  product.attributes.image.data[0].attributes.url
                }`}
                alt={product.attributes.title || "Product"}
                style={{
                  width: "40%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return null;
};

export default ProductDetailsImg;
