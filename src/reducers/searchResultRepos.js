import actionTypes from '../actions/actionTypes'
import repo from './repo'

const defaultState = []

const searchResultRepos = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_REPOS_SUCCESS:
      return action.repos.map((r) => {
        return repo(r, action)
      })

    default:
      return state
  }
}

export default searchResultRepos
