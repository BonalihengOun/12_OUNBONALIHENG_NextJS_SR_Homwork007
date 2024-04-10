import { getallMovie } from "@/service/movieService";
import CardComponents from "./MovieCardComponents";

const HomePageComponents = async () => {
  const data = await getallMovie();
  // const action = await listMoviewithGenre('Action');
  // const drama = await listMoviewithGenre('Drama');
  // const hollywoord =await listMoviewithGenre( 'Hollywood');
  // const science = await listMoviewithGenre( 'Science Fiction');
  // const ainme = await listMoviewithGenre('Anime');

  const filterallGenre = [...new Set(data.payload.map((x) => x.genre))];
  return (
    <div>
        <h1
              id="popular"
              className="font-bold text-2xl p-7 text-white bg-[#612114] "
            >
              All Movie {">"}
            </h1>
        <CardComponents gen={data}/>
      {filterallGenre.map((gen) => (
        <div key={gen}>
          <div className="flex-1">
            <h1
              id="popular"
              className="font-bold text-2xl p-7 text-white bg-[#612114] "
            >
              {gen} {">"}
            </h1>
          </div>
          <CardComponents key={gen} gen={gen} />
         
        </div>
      ))}
    </div>
  );
};

export default HomePageComponents;
