import { Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

const staticProducts = [
  {
    id: 1,
    image: "products_images/Frame 604 (2).jpg",
    title: "Breed Dry Dog Food",
    price: 100,
    discountedPrice: 80,
    rating: 4.5,
  },
  {
    id: 2,
    image: "products_images/Frame 604 (1).jpg",
    title: "CANON EOS DSLR Camera",
    price: 200,
    discountedPrice: 150,
    rating: 4.0,
  },
  {
    id: 3,
    image: "products_images/Frame 604.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 300,
    discountedPrice: 250,
    rating: 5.0,
  },
  {
    id: 4,
    image: "products_images/Frame 605.jpg",
    title: "The north coat",
    price: 400,
    discountedPrice: 300,
    rating: 3.5,
  },
  {
    id: 5,
    image: "products_images/Frame 606.jpg",
    title: "Gucci duffle bag",
    price: 400,
    discountedPrice: 300,
    rating: 3.5,
  },
  {
    id: 6,
    image: "products_images/Frame 608 (1).jpg",
    title: "GP11 Shooter USB Gamepad",
    price: 600,
    discountedPrice: 300,
    rating: 4.5,
  },
  {
    id: 7,
    image: "products_images/Frame 608 (2).jpg",
    title: "Jr. Zoom Soccer Cleats",
    price: 500,
    discountedPrice: 200,
    rating: 3.5,
  },
  {
    id: 8,
    image: "products_images/Frame 608 (3).jpg",
    title: "Kids Electric Car",
    price: 500,
    discountedPrice: 200,
    rating: 3.0,
  },
  {
    id: 9,
    image: "products_images/Frame 608.jpg",
    title: "Quilted Satin Jacket",
    price: 300,
    discountedPrice: 100,
    rating: 5.0,
  },
  {
    id: 10,
    image: "products_images/Frame 610.jpg",
    title: "RGB liquid CPU Cooler",
    price: 500,
    discountedPrice: 200,
    rating: 4.5,
  },
  {
    id: 11,
    image: "products_images/Frame 611.jpg",
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    discountedPrice: 160,
    rating: 3.5,
  },
  {
    id: 12,
    image: "products_images/Frame 612.jpg",
    title: "AK-900 Wired Keyboard",
    price: 960,
    discountedPrice: 1160,
    rating: 3.5,
  },
  {
    id: 13,
    image: "products_images/Frame 613.jpg",
    title: "IPS LCD Gaming Monitor",
    price: 370,
    discountedPrice: 400,
    rating: 5.5,
  },
  {
    id: 14,
    image: "products_images/Frame 614.jpg",
    title: "S-Series Comfort Chair ",
    price: 375,
    discountedPrice: 400,
    rating: 3.5,
  },
  {
    id: 15,
    image: "products_images/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.jpg",
    title: "Small BookSelf",
    price: 360,
    discountedPrice: 500,
    rating: 3.5,
  },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const ProductList = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const shuffledProducts = shuffleArray([...staticProducts]);
    setRandomProducts(shuffledProducts.slice(0, 4));
  }, []);

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        {randomProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              product={{
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                discountedPrice: product.discountedPrice,
                rating: product.rating,
              }}
              addToCart={addToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
