import { useLoaderData, useLocation } from "react-router";
import Contact from "./Contact";
import { useContext } from "react";
import { CartContext } from "../Layouts/RootLayout";

const PlantDetails = () => {
  const { cart, setCart } = useContext(CartContext);
  // const { id } = useParams();
  // console.log(id);
  // const [plant, setPlant] = useState({});

  // useEffect(() => {
  // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //   .then((res) => res.json())
  //   .then((data) => setPlant(data?.plants));

  //   axios(`https://openapi.programming-hero.com/api/plant/${id}`).then((data) =>
  //     setPlant(data.data.plants)
  //   );
  // }, [id]);

  const location = useLocation();
  console.log(location);

  // const { data } = useLoaderData();

  const { name, description, category, price, image } = location?.state || {};
  return (
    <div className="card bg-base-100 max-w-5xl mx-auto  shadow-sm mt-10 mb-10">
      <figure className="h-100 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="tree" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="text-lg font-semibold">Category: {category}</p>
        <p className="text-lg font-semibold">Price: {price} $</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => setCart((prv) => [...prv, location?.state])}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
