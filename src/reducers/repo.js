import actionTypes from '../actions/actionTypes'

const defaultState = {}
const defaultRepoProperties = (state) => {
  return {
    id:               state.id,
    full_name:        state.full_name,
    owner:            state.owner,
    html_url:         state.html_url,
    description:      state.description,
    stargazers_count: state.stargazers_count,
    watchers_count:   state.watchers_count,
    watching:         false
  }
}

const repo = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_REPOS_SUCCESS:
      if(action.watchingRepoIDs.includes(state.id)) {
        return Object.assign({}, defaultRepoProperties(state), { watching: true })
      } else {
        return defaultRepoProperties(state)
      }

    case actionTypes.FETCH_WATCHING_REPOS_SUCCESS:
      return Object.assign({}, defaultRepoProperties(state), { watching: true })

    case actionTypes.WATCH_REPO_SUCCESS:
      return Object.assign({}, state, { watching: true })

    case actionTypes.UNWATCH_REPO_SUCCESS:
      return Object.assign({}, state, { watching: false })

    default:
      return state
  }
}

export default repo
