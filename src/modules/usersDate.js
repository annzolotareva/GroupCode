export class UsersDate {
    getUsers() {
        return fetch('http://localhost:3333/users').then(response => response.json());
    }

    getUser(id) {
        return fetch(`http://localhost:3333/users/${id}`).then(response => response.json());
    }

    removeUsers(id) {
        return fetch(`http://localhost:3333/users/${id}`, {
            method: 'DELETE'
        }).then(response => response.json());
    }
}