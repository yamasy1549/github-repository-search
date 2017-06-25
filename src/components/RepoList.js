import React from 'react'

const Repo = ({ id, full_name, owner, html_url, description, stargazers_count, watchers_count, watching }) => (
  <li>
    <a href={owner.html_url}>
      <img src={owner.avatar_url} alt={owner.login} />
    </a>
    <a href={html_url}>{full_name}</a>
  </li>
)

const RepoList = ({ repos }) => (
  <ul>
    {repos.map(repo => (
      <Repo key={repo.id} {...repo} />
    ))}
  </ul>
)
export default RepoList
