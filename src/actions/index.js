import actionTypes from './actionTypes'
import axios from 'axios'
import { GITHUB_USERNAME, GITHUB_OAUTH_TOKEN } from 'babel-dotenv'

export const searchReposSuccess = (resultRepos, watchingRepoIDs) => {
  return {
    type: actionTypes.SEARCH_REPOS_SUCCESS,
    resultRepos,
    watchingRepoIDs
  }
}

export const searchReposFailure = () => {
  return {
    type: actionTypes.SEARCH_REPOS_FAILURE
  }
}

export const searchRepos = (query) => {
  return (dispatch, getState) => {
    const url = 'https://api.github.com/search/repositories?q=' + query
    axios.get(url)
      .then((response) => {
        const watchingRepoIDs = getState().watchingRepos.map((r) => {
          return r.id
        })
        dispatch(searchReposSuccess(response.data.items, watchingRepoIDs))
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

export const watchRepoSuccess = (repo) => {
  return {
    type: actionTypes.WATCH_REPO_SUCCESS,
    repo
  }
}

export const watchRepoFailure = () => {
  return {
    type: actionTypes.WATCH_REPO_FAILURE
  }
}

export const watchRepo = (repo) => {
  return (dispatch) => {
    const url = 'https://api.github.com/user/subscriptions/' + repo.full_name
    const headers = {
      'Authorization': 'token ' + GITHUB_OAUTH_TOKEN
    }
    axios.put(url, {}, {headers})
      .then((response) => {
        dispatch(watchRepoSuccess(repo))
      })
      .catch((error) => {
        console.log(error)
        dispatch(watchRepoSuccess())
      })
  }
}

export const unwatchRepoSuccess = (repo) => {
  return {
    type: actionTypes.UNWATCH_REPO_SUCCESS,
    repo
  }
}

export const unwatchRepoFailure = () => {
  return {
    type: actionTypes.UNWATCH_REPO_FAILURE
  }
}

export const unwatchRepo = (repo) => {
  return (dispatch) => {
    const url = 'https://api.github.com/user/subscriptions/' + repo.full_name
    const headers = {
      'Authorization': 'token ' + GITHUB_OAUTH_TOKEN
    }
    axios.delete(url, {headers})
      .then((response) => {
        dispatch(unwatchRepoSuccess(repo))
      })
      .catch((error) => {
        console.log(error)
        dispatch(unwatchRepoFailure())
      })
  }
}
