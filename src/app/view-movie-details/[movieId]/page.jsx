import React from "react";
import { getMovieById } from "@/service/movieService";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ConvertStarWithRating = (rating) => {
  const stars = [];
  let remainingRating = rating;
  for (let i = 0; i < 5; i++) {
    if (remainingRating >= 1) {
      stars.push(<FaStar key={i} />);
    } else if (remainingRating >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-400" />);
    }
    remainingRating--;
  }
  return stars;
};
const MovieDetailsComponents = async ({ params }) => {
  const data = await getMovieById(params.movieId);

  const formatDate = (dateString, getTime = false) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "";
    }

    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    if (getTime) {
      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formattedTime = date.toLocaleTimeString("en-US", timeOptions);
      return formattedTime;
    }

    return formattedDate;
  };

  return (
    <div className="bg-[#612114] h-[700px] py-8">
      <div className="w-full bg-[#612114] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[550px] w-[900px] rounded-lg bg-black mb-4">
              <img
                className="w-full h-[550px]"
                src={data.payload.image}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="flex-1 px-4">
            <h2 className="text-2xl font-bold text-white dark:text-white mb-2">
              {data.payload.director}
            </h2>
            <div className="mb-4">
              <div className="mr-4">
                <span className="font-bold text-white">
                  {data.payload.runtime}{" "}
                </span>
                <span className="text-white">minutes</span>
              </div>
              <div className="flex-col-reverse">
                <span className="font-bold text-white italic">Action</span>
              </div>
              <div className="flex text-yellow-400">
                {ConvertStarWithRating(data.payload.rating)}
              </div>
              <div className="text-white">{data.payload.rating}</div>
            </div>

            <div>
              <span className="font-bold text-white text-2xl">
                {data.payload.movie_title}
              </span>
              <p className="text-white text-sm mt-2">
                {data.payload.description}
              </p>
              <div className="flex">
                <p className="text-white text-sm mt-2">
                  {formatDate(data.payload.posted_at)}
                </p>

                <p className="text-white text-sm mt-2">{`, ${formatDate(data.payload.released_year, true)}`}
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsComponents;
