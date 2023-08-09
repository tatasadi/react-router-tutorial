import { useEffect, useState } from "react"
import MovieCard from "../../components/movie/MovieCard"
import { useSearchParams, Link } from "react-router-dom"

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  const displayedMovies = typeFilter
    ? movies.filter(movie => movie.type === typeFilter)
    : movies

  useEffect(() => {
    async function loadMovies() {
      setLoading(true)
      try {
        const res = await fetch("api/movies")
        const data = await res.json()
        setMovies(data.movies)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])


  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="mb-4">Movies</h1>
        <div className="flex gap-4">
          <div>Filter:</div>
          <button
            onClick={() => handleFilterChange("type", "series")}
            className={
              `hover:text-gray-600 
                ${typeFilter === "series" ? "text-teal-600" : ""}`
            }
          >Series</button>
          <button
            onClick={() => handleFilterChange("type", "movie")}
            className={
              `hover:text-gray-600 
                ${typeFilter === "movie" ? "text-teal-600" : ""}`
            }
          >Movie</button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="hover:text-gray-600"
            >Clear filter</button>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 grid-cols-12 flex-wrap justify-center">
        {displayedMovies.map(movie => (
          <Link to={movie.id}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter
            }}
            key={movie.id}
            className="card col-span-12 md:col-span-6 lg:col-span-4 flex gap-4">
            <MovieCard movie={movie} />
          </Link>
        )
        )}
      </div>
    </>
  )
}
