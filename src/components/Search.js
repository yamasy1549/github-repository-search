import React from 'react'
import RepoList from './RepoList'

const Search = ({ searchResultRepos, search }) => (
  <div>
    <input
      placeholder='search keyword'
      onInput={event => {
        search(event)
      }}
    />
    <RepoList repos={searchResultRepos} />
  </div>
)
export default Search
