import React from "react"
import Joi from "joi-browser"
import Form from "./common/form"
import { getMovie, saveMovie } from "../services/fakeMovieService"
import { getGenres } from "../services/fakeGenreService"

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [], // get genre from imaginary server
    errors: {}
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  }

  componentDidMount() {
    const genres = getGenres() // getGenres from fakeGenreService and
    this.setState({ genres }) // update the state

    const movieId = this.props.match.params.id // read it in the route and store in movieId
    if (movieId === "new") return

    const movie = getMovie(movieId)
    if (!movie) return this.props.history.replace("/not-found")

    this.setState({ data: this.mapToViewModel(movie) }) // get a movie from server and map to different kind of movie object we can use
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    }
  }

  doSubmit = () => {
    saveMovie(this.state.data)

    this.props.history.push("/movies")
  }

  render() {
    return (
      <div>
        <h1>Movie Form(s)</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "title")}
          {this.renderSelect("genreId", "Genre", this.state.genres, "genre")}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    )
  }
}

export default MovieForm
