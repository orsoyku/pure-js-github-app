class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
    }
    async getGithubData(username) {
        let responseUser = await fetch(this.url + username);
        let responseRepo = await fetch(this.url + username + "/repos");

        const userData = await responseUser.json();
        const repoData = await responseRepo.json();

        return {
            user: userData,
            repo: repoData
        }
    }

}