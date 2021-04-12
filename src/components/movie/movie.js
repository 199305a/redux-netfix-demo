/*
 * @Descripttion: 
 * @Author: cui
 * @Date: 2021-04-12 11:06:11
 * @LastEditors: cui
 * @LastEditTime: 2021-04-12 16:54:19
 */

const { fetchMovieActionCreator } = require('../../modules/movies.js')
const { connect } = require('react-redux')
const React = require('react')
const { Link } = require('react-router')
const styles = require('./movie.css')
class Movie extends React.Component {
  render () {
    const {
      movie = {
        starring: []
      }
    } = this.props;
    return (
      <div className={styles.movie} style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0,1) 0%, 
      rgba(0, 0, 0,0.625) 100%), url(${movie.cover})`
      }}>
        <div className={styles.cover} style={{ backgroundImage: `url(${movie.cover})` }}>
          <div className={styles.description}>
            <div className={styles.title}>{movie.title}</div>
            <div className={styles.year}>{movie.year}</div>
            <div className={styles.starring}>{movie.starring.map((actor = {}, index) => (
              <div key={index} className={styles.actor}>{actor.name}</div>
            ))}</div>
          </div>
        </div>
        <Link className={styles.closeButton} to="/movies">
          ⏪
        </Link>
      </div>
    )
  }
  componentWillMount () {
    debugger
    this.props.fetchMovieActionCreator(this.props.params.id)
  }

  /**
   *  
   *当id改变重新渲染组件
   * @param {*} next 
   * @memberof Movie
   */
  componentWillUpdate (next) {
    if (this.props.params.id != next.params.id) {
      this.props.fetchMovie(next.params.id)
    }
  }
}

module.exports = connect(({ movies }) => ({ movie: movies.current }),
  { fetchMovieActionCreator })(Movie)