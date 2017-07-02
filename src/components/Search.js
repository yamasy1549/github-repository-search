import React from 'react'
import RepoList from './RepoList'

const Search = ({ searchResultRepos, search, watch, unwatch }) => (
  <div>
    <input
      placeholder='search keyword'
      onInput={event => {
        search(event)
      }}
    />
    <RepoList repos={searchResultRepos} watch={watch} unwatch={unwatch} />
  </div>
)
export default Search
