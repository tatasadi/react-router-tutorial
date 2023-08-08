import { useEffect, useState } from "react"
import MovieCard from "../../components/movie/MovieCard"

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadMovies() {
      setLoading(true)
      try {
        const res = await fetch("api/movies")
        const data = await res.json()
        setMovies(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return (
    <>
      <h1 className="mb-4">Movies</h1>
      <div className="grid gap-4 grid-cols-12 flex-wrap justify-center">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  )
}
