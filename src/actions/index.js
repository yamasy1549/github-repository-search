import actionTypes from './actionTypes'
import axios from 'axios'
import { GITHUB_USERNAME } from 'babel-dotenv'

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

export const fetchWatchingReposSuccess = (repos) => {
  return {
    type: actionTypes.FETCH_WATCHING_REPOS_SUCCESS,
    repos
  }
}

export const fetchWatchingReposFailure = () => {
  return {
    type: actionTypes.FETCH_WATCHING_REPOS_FAILURE
  }
}

export const fetchWatchingRepos = () => {
  return (dispatch) => {
    const url = 'https://api.github.com/users/' + GITHUB_USERNAME + '/subscriptions'
    axios.get(url)
      .then((response) => {
        dispatch(fetchWatchingReposSuccess(response.data))
      })
      .catch((error) => {
        console.log(error)
        dispatch(fetchWatchingReposFailure())
      })
  }
}
