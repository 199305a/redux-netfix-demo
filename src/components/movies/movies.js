/*
 * @Descripttion:
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 23:37:08
 */

const { fetchMoviesActionCreator } = require('../../modules/movies.js')
const { connect } = require('react-redux')
const React = require('react')
const { Link } = require('react-router')
const movies = require('../../movies.json')
const styles = require('./movies.css')
const clean = require('clean-tagged-string').default
class Movies extends React.PureComponent {
  render () {
    const {
      children,
      movies = [],
      params = {}
    } = this.props
    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link key={index} to={`/movies/${index + 1}`} >
              <div className={styles.movie} style={{ backgroundImage: `url(${movie.cover})` }}>

              </div>
            </Link>

          ))}
        </div>

      </div>
    )
  }
  /**
   *
   * 连接后可直接调用dispatch
   * @memberof Movies
   */
  componentWillMount () {
    this.fetchMovie()
    // this.props.fetchMovies(movies)
  }

  fetchMovie (id = this.props.params.id) {
    const query = clean`{
      movie(index:${id}){
        title,
        cover,
        year,
        starring {
          name
        }
      }
    }`
    axios.get(`/q?query=${query}`)
      .then(response => {
        this.props.fetchMovie(response)
      })
  }
  componentDidMount () {
    fetch('src/movies.json', { method: 'GET' })
      .then(response => { return response.json(); })
      .then((movies) => { this.props.fetchMovies(movies) })
  }
}

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
module.exports = connect(
  ({ movies }) => ({ movies: movies.all }), {
  fetchMovies: fetchMoviesActionCreator
})(Movies)