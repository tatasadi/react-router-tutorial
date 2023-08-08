import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Home from "./pages/Home"
import "./server.js";
import NotFound from "./pages/NotFound";
import Movies from "./pages/movies/movies";
import MovieDetails from "./pages/movies/MovieDetails";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
