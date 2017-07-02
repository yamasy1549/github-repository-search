import actionTypes from '../actions/actionTypes'
import repo from './repo'

const defaultState = []

const watchingRepos = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WATCHING_REPOS_SUCCESS:
      return action.repos.map((r) => {
        return repo(r, action)
      })

    case actionTypes.WATCH_REPO_SUCCESS:
      return [...state, repo(action.repo, action)]

    case actionTypes.UNWATCH_REPO_SUCCESS:
      return state.filter((r) => {
        return r.id != action.repo.id
      })

    default:
      return state
  }
}

export default watchingRepos
