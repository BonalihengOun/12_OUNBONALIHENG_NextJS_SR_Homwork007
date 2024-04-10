import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { listMoviewithGenre } from "@/service/movieService";
import Link from "next/link";
const CardComponents = async ({gen}) => {

  const getCategoryMovie = await listMoviewithGenre(gen);

  return (
    <div className="">
      <div className="flex overflow-x-auto px-7 bg-[#612114]">
       <Carousel className="w-full">
        <CarouselContent>
        {getCategoryMovie.payload?.map((movie) => (
        <div className="carousel px-5 gap-5 overflow-visible">
          
            <Link href={`/view-movie-details/${movie.movie_id}`}>
              <div
                key={movie.movie_id}
                className="carousel-item card w-96 bg-white shadow-xl"
              >
                <figure className="px-7 pt-7">
                  <img src={movie.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  text-center">
                  <h2 className="card-title line-clamp-1 text-start text-black">
                    {movie.movie_title}
                  </h2>
                  <p className="line-clamp-2 text-start text-gray-800">
                    {movie.description}
                  </p>
                </div>
              </div>
            </Link>
          
        </div>
        ))}
        </CarouselContent>
       </Carousel>
      </div>
    </div>
  );
};

export default CardComponents;
