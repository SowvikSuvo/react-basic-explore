import { useLoaderData } from "react-router";
import PlantCard from "../PlantCard";

const Home = () => {
  // const [plants, setPlants] = useState([]);
  // useEffect(() => {
  //   fetch("https://openapi.programming-hero.com/api/plants")
  //     .then((res) => res.json())
  //     .then((data) => setPlants(data?.plants));
  // }, []);

  const { plants } = useLoaderData();
  console.log(plants);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-8">
        {plants.map((plant) => (
          <PlantCard key={plant?.id} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
