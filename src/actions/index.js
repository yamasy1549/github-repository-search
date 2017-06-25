import actionTypes from './actionTypes'
import axios from 'axios'

export const searchReposSuccess = (repos) => {
  return {
    type: actionTypes.SEARCH_REPOS_SUCCESS,
    repos
  }
}

export const searchReposFailure = () => {
  return {
    type: actionTypes.SEARCH_REPOS_FAILURE
  }
}

export const searchRepos = (query) => {
  return (dispatch) => {
    const url = 'https://api.github.com/search/repositories?sort=stars&q=' + query
    axios.get(url)
      .then((response) => {
        dispatch(searchReposSuccess(response.data.items))
      })
      .catch((error) => {
        console.log(error)
        dispatch(searchReposFailure())
      })
  }
}
