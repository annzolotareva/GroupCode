export class RolesInProjectDate {

     getRolesInProject() {
        return fetch('http://localhost:3333/rolesInProject').then(response => response.json());
    }

    getRoleInProject(id) {
        return fetch(`http://localhost:3333/rolesInProject/${id}`).then(response => response.json());
    }

    removeRoleInProject(id) {
        return fetch(`http://localhost:3333/rolesInProject/${id}`, {
            method: 'DELETE'
        }).then(response => response.json());
    }

}