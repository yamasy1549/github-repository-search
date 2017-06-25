import React from 'react'
import RepoList from './RepoList'

const Search = ({ searchResultRepos, searchClick }) => (
  <div>
    <form
      onSubmit={event => {
        event.preventDefault()
        searchClick(event)
        }}
    >
      <input placeholder='search keyword' />
      <button type='submit'>
        Search
      </button>
    </form>
    <RepoList repos={searchResultRepos} />
  </div>
)
export default Search
