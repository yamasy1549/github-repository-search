import { connect }     from 'react-redux'
import Search          from '../components/Search'
import { searchRepos } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchResultRepos: state.searchResultRepos,
    watchingRepos:     state.watchingRepos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: () => {
      dispatch(searchRepos('ZinkeN'))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
export default SearchContainer
