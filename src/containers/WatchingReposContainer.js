import { connect }            from 'react-redux'
import WatchingRepos          from '../components/WatchingRepos'
import { fetchWatchingRepos } from '../actions'

const mapStateToProps = (state) => {
  return {
    watchingRepos: state.watchingRepos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchWatchingRepos())
    }
  }
}

const WatchingReposContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchingRepos)
export default WatchingReposContainer
