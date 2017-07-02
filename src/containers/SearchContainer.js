import { connect }     from 'react-redux'
import Search          from '../components/Search'
import { searchRepos, watchRepo, unwatchRepo } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchResultRepos: state.searchResultRepos,
    watchingRepos:     state.watchingRepos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (event) => {
      dispatch(searchRepos(event.target.value))
    },

    watch: (repo) => {
      dispatch(watchRepo(repo))
    },

    unwatch: (repo) => {
      dispatch(unwatchRepo(repo))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
export default SearchContainer
