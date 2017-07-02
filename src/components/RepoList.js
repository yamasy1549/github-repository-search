import React from 'react'

const WatchButton = ({ repo, watch, unwatch }) => {
  if(repo.watching) {
    return (
      <button
        onClick={event => {
          unwatch(repo)
      }}>
        unwatch
      </button>
    )
  } else {
    return (
      <button
        onClick={event => {
          watch(repo)
      }}>
        watch
      </button>
    )
  }
}

const RepoList = ({ repos, watch, unwatch }) => (
  <ul>
    {repos.map(repo => {
        const { id, full_name, owner, html_url, description, stargazers_count, watchers_count, watching } = repo

        return (
          <li key={id}>
            <a href={owner.html_url}>
              <img src={owner.avatar_url} alt={owner.login} />
            </a>
            <a href={html_url}>{full_name}</a>
            <WatchButton repo={repo} watch={watch} unwatch={unwatch} />
          </li>
        )
    })}
  </ul>
)
export default RepoList
