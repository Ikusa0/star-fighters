import axios from "axios";

export async function getUserStargazersCount(user: string): Promise<number | undefined> {
  try {
    const { data: userReposInfo } = await axios.get(`https://api.github.com/users/${user}/repos`);
    const userStargazersCount: number = userReposInfo.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);

    return userStargazersCount;
  } catch (err) {
    console.error("Error while getting user stargazers count", err.message);
  }
}

export async function validateUser(user: string): Promise<boolean | undefined> {
  try {
    const { data: userReposInfo } = await axios.get(`https://api.github.com/users/${user}/repos`);

    return !userReposInfo.message;
  } catch (err) {
    console.error("Error while validating user", err.message);
  }
}
