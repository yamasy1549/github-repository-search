import React from 'react'
import RepoList from './RepoList'

const WatchingRepos = ({ watchingRepos, fetch }) => (
  <div>
    <h2>WatchingRepos</h2>
    <button onClick={event => {
      fetch()
    }}>
      fetch
    </button>
    <RepoList repos={watchingRepos} />
  </div>
)
export default WatchingRepos
