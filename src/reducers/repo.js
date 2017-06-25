import actionTypes from '../actions/actionTypes'

const defaultState = {}

const repo = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_REPOS_SUCCESS:
    case actionTypes.WATCH_SUCCESS:
    case actionTypes.FETCH_WATCHING_REPOS_SUCCESS:
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

    case actionTypes.WATCH_SUCCESS:
      return Object.assign({}, state, watching: true)

    case actionTypes.UNWATCH_SUCCESS:
      return Object.assign({}, state, watching: false)

    default:
      return state
  }
}

export default repo
