import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
import StyledTitle from "./Title";

export default function NewProducts({ products }) {
  return (
    <Center>
      <StyledTitle>New Arrivals</StyledTitle>
      <ProductsGrid products={products} />
    </Center>
  );
}
