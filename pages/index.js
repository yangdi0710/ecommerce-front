import Featured from "@/Components/Featured";
import Header from "@/Components/Header";
import NewProducts from "@/Components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";

export default function HomePage({ featuredProduct }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "654b427af4c639bee6327597";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
