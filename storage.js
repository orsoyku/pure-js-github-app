class Storage {
    static getSearchedUsersFromStorage() {
        //tüm kullanıcıları al
        let users;

        if (localStorage.getItem("searched") === null) {
            users = [];

        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;

    }
    static addSearchedUserToStorage(username) {
        //kullanıcı ekle
        let users = this.getSearchedUsersFromStorage();
        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));

        //IndexOf

    }
    static clearAllSearchedUsersFromStorage() {
        //tüm kullanıcıları sil
        localStorage.removeItem("searched");

    }

}