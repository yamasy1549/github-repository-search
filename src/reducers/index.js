import { combineReducers } from 'redux'
import searchResultRepos from './searchResultRepos'
import watchingRepos     from './watchingRepos'

const repoWatcherApp = combineReducers({
  searchResultRepos,
  watchingRepos
})
export default repoWatcherApp
