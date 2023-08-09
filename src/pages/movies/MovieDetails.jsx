import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function MovieDetails() {
  const [movie, setMovie] = useState(null)
  const { id } = useParams()
  const location = useLocation()

  const search = location.state?.search || ""
  const type = location.state?.type || "all"
  console.log(search, type)

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data.movies))
  }, [])

  if (!movie) return <h1>Loading...</h1>

  return (
    <>
      <Link to={`..${search}`} relative="path" className="mb-4 block hover:text-gray-600">&larr; <span>Back to {type}</span></Link>
      <div className="flex gap-4 items-center">
        {movie.poster && (
          <img
            src={movie.poster}
            alt={"Movie Poster"}
            style={{ width: "300px", height: "400px" }}
          />
        )}
        <div>
          <h1>{movie.title}</h1>
          <div>
            {movie.genres.map(genre => <em key={genre} className="px-2 rounded-full bg-teal-200 text-sm mr-2">{genre}</em>)}
          </div>
          <p><strong>Year:</strong> {movie.year}</p>
          <div>
            <strong>Cast:</strong>
            <ul>
              {movie.cast?.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">{movie.fullplot}</p>
    </>
  )
}


// fullplot:
//   "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.",
// year: 1972,
// plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
// genres: ["Crime", "Drama"],
// rated: "R",
// title: "The Godfather",
// lastupdated: "2015-09-02 00:08:23.680000000",
// languages: ["English", "Italian", "Latin"],
// writers: [
//   "Mario Puzo (screenplay)",
//   "Francis Ford Coppola (screenplay)",
//   "Mario Puzo (novel)",
// ],
// type: "movie",
// poster:
//   "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg",
// released: "1972-03-24T00:00:00.000Z",

// countries: ["USA"],
// cast: [
//   "Marlon Brando",
//   "Al Pacino",
//   "James Caan",
//   "Richard S. Castellano",
// ],
// directors: ["Francis Ford Coppola"],
// runtime: 175,