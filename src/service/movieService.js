export async function getallMovie() {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api", {
    caches: "no-store",
  });
  const data = await res.json();
  console.log("Data ", data);
  return data;
}

// export async function getMovieByAction(){
//     const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api?genre=Action')
//     const genreAction = await res.json();
//     console.log(genreAction);
//     if(genreAction.length ===0 ) {return <h1>
//         'No movies found with the Genre Action '
//     </h1>}
//     else{
//       return genreAction ;
//     }
// }

// export async function getMovieByDrama(){
//     const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api?genre=Drama')
//     const genreDrama = await res.json();
//     console.log(genreDrama);
//     if(genreDrama.length ===0 ) {return <h1>
//         'No movies found with the Genre Drama '
//     </h1>}
//     else{
//       return genreDrama ;
//     }
// }
export const listMoviewithGenre = async (genre) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/?genre=${genre}`,
    { caches: "no-store" }
  );
  const data = await res.json();
  return data;
};

export const getMovieById = async (id) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`,
    { caches: "no-store" }
  );
  const movie = await res.json();
  return movie;
};
