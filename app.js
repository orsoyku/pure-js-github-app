const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastusers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
    let username = nameInput.value.trim();
    if (username === "") {
        ui.showAlert("danger", "The field can not be empty!");

    } else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    console.log("error");
                } else {
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => console.log(new Error(err)))

    }
    ui.clearInput();

    e.preventDefault();
}

function clearAllSearched() {
    if (confirm("Are you sure?")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();


    }
}

function getAllSearched() {
    //arananları storageden al ve ui'ye ekle
    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;

    });
    lastusers.innerHTML = result;
}