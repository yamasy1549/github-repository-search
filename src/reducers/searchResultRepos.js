import actionTypes from '../actions/actionTypes'
import repo from './repo'

const defaultState = []

const searchResultRepos = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_REPOS_SUCCESS:
      return action.repos.map((r) => {
        return repo(r, action)
      })

    case actionTypes.WATCH_REPO_SUCCESS:
      return state.map((r) => {
        return (r.id == action.repo.id) ? Object.assign({}, r, { watching: true }) : r
      })

    case actionTypes.UNWATCH_REPO_SUCCESS:
      return state.map((r) => {
        return (r.id == action.repo.id) ? Object.assign({}, r, { watching: false }) : r
      })

    default:
      return state
  }
}

export default searchResultRepos
