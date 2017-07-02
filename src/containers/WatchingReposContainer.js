import { connect }            from 'react-redux'
import WatchingRepos          from '../components/WatchingRepos'
import { watchRepo, unwatchRepo } from '../actions'

const mapStateToProps = (state) => {
  return {
    watchingRepos: state.watchingRepos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watch: (repo) => {
      dispatch(watchRepo(repo))
    },

    unwatch: (repo) => {
      dispatch(unwatchRepo(repo))
    }
  }
}

const WatchingReposContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchingRepos)
export default WatchingReposContainer
