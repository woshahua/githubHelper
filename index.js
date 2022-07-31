import GitHub from "github-api";
import { Octokit } from "@octokit/rest";

// unauthenticated client
const gh = new GitHub({ token: ""})
const oct = new Octokit({
  auth: "token " + "",
});

const getPullRequestByNumber = (repo, prNumber) => {
  return oct.pulls
    .get({
      owner: "woshahua",
      repo: repo,
      pull_number: prNumber,
    })
    .then(({ data, status, headers }) => {
      return data;
    });
};

getPullRequestByNumber('freee-ios', '1').then((data) => {
   console.log(data['merge_commit_sha'])
})
