require('dotenv').config()
const { Octokit } = require('@octokit/core')

const octokit = new Octokit({
  auth: process.env.GH_PERSONAL_ACESS_TOKEN
})

const main = async () => {
  const repoOwner = process.env.GH_REPO_OWNER
  const repo = process.env.GH_REPO

  try {
    const result = await octokit.request(
      `GET /repos/${repoOwner}/${repo}/actions/caches`)

    console.log(result)
  } catch (err) {
    console.log(err.message)
  }
}

main()
