import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="card col-span-12 md:col-span-6 lg:col-span-4 flex gap-2">
      <Link to={movie.id}>
        {movie.poster && (
          <img
            src={movie.poster}
            alt={"Movie Poster"}
            style={{ width: "100px", height: "150px" }}
          />
        )}
        <div>
          <h3 className="font-bold text-gray-900">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.plot}</p>
        </div>
      </Link>
    </div>
  )
}