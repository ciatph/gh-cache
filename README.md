## gh-cache

Exploring and testing the GitHub Actions Cache API.

## Requirements

1. NodeJS v16.14.2
2. GitHub repository
3. GitHub Personal Access Token

## Installation

1. Clone this repository.
`https://github.com/ciatph/gh-cache.git`

2. Install dependencies.
`npm install`

3. Create a `.env` file from the `.env.example` file. Replace the variables with custom values.

   | Variable Name           | Description                                          |
   | ----------------------- | ---------------------------------------------------- |
   | GH_PERSONAL_ACESS_TOKEN | GitHub personal access token with full `repo` scope. |
   | GH_REPO_OWNER           | GitHub repository owner username                     |
   | GH_REPO                 | GitHub repository                                    |


## Available Scripts

### `npm start`

List the the GitHub Actions caches for the `GH_REPO` repository.

## References

[[1]](https://docs.github.com/en/rest/actions/cache) - GitHub Actions Cache API

@ciatph
20221730
