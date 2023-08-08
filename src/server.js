import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/movies", () => [
      {
        id: "491070c4-9ed4-4dcc-80e4-dd247e5d125a",
        plot: "The story of Easy Company of the US Army 101st Airborne division and their mission in WWII Europe from Operation Overlord through V-J Day.",
        genres: ["Action", "Drama", "History"],
        runtime: 705,
        cast: [
          "Scott Grimes",
          "Matthew Leitch",
          "Damian Lewis",
          "Ron Livingston",
        ],
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SY1000_SX677_AL_.jpg",
        title: "Band of Brothers",
        fullplot:
          'This is the story of "E" Easy Company, 506th Regiment of the 101st Airborne Division from their initial training starting in 1942 to the end of World War II. They parachuted behind enemy lines in the early hours of D-Day in support of the landings at Utah beach, participated in the liberation of Carentan and again parachuted into action during Operation Market Garden. They also liberated a concentration camp and were the first to enter Hitler\'s mountain retreat in Berchtesgaden. A fascinating tale of comradeship that is, in the end, a tale of ordinary men who did extraordinary things.',
        languages: ["English", "Dutch", "French", "German", "Lithuanian"],
        released: "2001-09-09T00:00:00.000Z",
        rated: "TV-MA",
        lastupdated: "2015-08-31 00:04:34.187000000",
        year: 2001,
        countries: ["UK", "USA"],
        type: "series",
      },
      {
        id: "f37049d7-d552-420c-b576-45668dddf14b",
        plot: "A comprehensive survey of the American Civil War.",
        genres: ["Documentary", "History", "War"],
        runtime: 680,
        cast: [
          "Sam Waterston",
          "Julie Harris",
          "Jason Robards",
          "Morgan Freeman",
        ],
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDc1NzI2MGEtZDA2Yy00ZWExLTgwYmItNjU3N2QyYmM0MzYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg",
        title: "The Civil War",
        fullplot:
          "This highly acclaimed mini series traces the course of the U.S. Civil War from the abolitionist movement through all the major battles to the death of President Lincoln and the beginnings of Reconstruction. The story is mostly told in the words of the participants themselves, through their diaries, letters, and Visuals are usually still photographs and illustrations of the time, and the soundtrack is likewise made up of war-era tunes played on period instruments. Several modern-day historians offer periodic comment and insight on the war's causes and events.",
        languages: ["English"],
        released: "1990-09-23T00:00:00.000Z",

        lastupdated: "2015-09-01 00:13:15.693000000",
        year: 1990,
        countries: ["USA"],
        type: "series",
      },
      {
        id: "4a54f874-99c2-4ba2-ab1c-50875224ad07",
        plot: "Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.",
        genres: ["Documentary"],
        runtime: 60,
        cast: ["Carl Sagan"],
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg",
        title: "Cosmos",
        fullplot:
          'Astronomer Dr. Carl Sagan is host and narrator of this 13-hour series that originally aired on Public Broadcasting Stations in the United States. Dr. Sagan describes the universe in a way that appeals to a mass audience, by using Earth as a reference point, by speaking in terms intelligible to non-scientific people, by relating the exploration of space to that of the Earth by pioneers of old, and by citing such Earth legends as the Library of Alexandria as metaphors for space-related future events. Among Dr. Sagan\'s favorite topics are the origins of life, the search for life on Mars, the infernal composition of the atmosphere of Venus and a warning about a similar effect taking place on Earth due to global pollution and the "greenhouse effect", the lives of stars, interstellar travel and the effects of attaining the speed of light, the danger of mankind technologically self-destructing, and the search, using radio technology, for intelligent life in deep space.',
        languages: ["English"],
        released: "1980-09-28T00:00:00.000Z",

        lastupdated: "2015-08-29 00:00:33.733000000",
        year: 1980,
        countries: ["USA", "UK"],
        type: "series",
      },
      {
        id: "5610f8de-fa64-4336-b0a2-95148ad6b37b",
        plot: "The life of the greatest karate master of a generation.",
        genres: ["Documentary", "Action", "History"],
        runtime: 90,
        cast: [
          "John G. Avildsen",
          "Billy Blanks",
          "Lauro Chartrand",
          "Michael Chavez",
        ],
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTY3MjI0MjA1OF5BMl5BanBnXkFtZTgwMTI3Nzc2MjE@._V1_SY1000_SX677_AL_.jpg",
        title: "The Real Miyagi",
        fullplot: "The life of the greatest karate master of a generation.",
        languages: ["English"],
        released: "2015-02-20T00:00:00.000Z",

        directors: ["Kevin Derek"],
        writers: ["Kevin Derek", "Kevin Derek"],
        lastupdated: "2015-08-22 00:43:31.983000000",
        year: 2015,
        countries: ["USA", "Canada", "Japan", "Panama"],
        type: "movie",
      },
      {
        id: "4ab83223-3061-49a8-9249-062bfe57635b",
        fullplot:
          "Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.",
        year: 1994,
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        genres: ["Crime", "Drama"],
        rated: "R",
        title: "The Shawshank Redemption",
        lastupdated: "2015-09-13 00:42:00.373000000",
        languages: ["English"],
        writers: [
          'Stephen King (short story "Rita Hayworth and Shawshank Redemption")',
          "Frank Darabont (screenplay)",
        ],
        type: "movie",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX677_AL_.jpg",
        released: "1994-10-14T00:00:00.000Z",

        countries: ["USA"],
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
        directors: ["Frank Darabont"],
        runtime: 142,
      },
      {
        id: "30a33c3d-f254-425e-b275-5de10ca98b16",
        fullplot:
          "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.",
        year: 1972,
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        genres: ["Crime", "Drama"],
        rated: "R",
        title: "The Godfather",
        lastupdated: "2015-09-02 00:08:23.680000000",
        languages: ["English", "Italian", "Latin"],
        writers: [
          "Mario Puzo (screenplay)",
          "Francis Ford Coppola (screenplay)",
          "Mario Puzo (novel)",
        ],
        type: "movie",
        poster:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg",
        released: "1972-03-24T00:00:00.000Z",

        countries: ["USA"],
        cast: [
          "Marlon Brando",
          "Al Pacino",
          "James Caan",
          "Richard S. Castellano",
        ],
        directors: ["Francis Ford Coppola"],
        runtime: 175,
      },
    ])
  },
})
