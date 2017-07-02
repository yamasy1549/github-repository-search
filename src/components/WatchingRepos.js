import React from 'react'
import RepoList from './RepoList'

const WatchingRepos = ({ watchingRepos, watch, unwatch }) => (
  <div>
    <h2>WatchingRepos</h2>
    <RepoList repos={watchingRepos} watch={watch} unwatch={unwatch} />
  </div>
)
export default WatchingRepos
