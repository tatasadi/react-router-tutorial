
export default function MovieCard({ movie }) {
  return (
    <>
      {movie.poster && (
        <img
          src={movie.poster}
          alt={"Movie Poster"}
          style={{ width: "100px", height: "150px" }}
        />
      )}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900">{movie.title}</h3>
          <span className="bg-teal-600 text-teal-100 px-2 rounded-full text-sm">{movie.type.toUpperCase()}</span>
        </div>
        <p className="text-sm text-gray-600">{movie.plot}</p>
      </div>
    </>
  )
}