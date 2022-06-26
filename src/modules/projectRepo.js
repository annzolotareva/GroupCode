export class ProjectRepo {
    
    getProjects() {
        return fetch('http://GroupCode/projects.php', 
            {
            mode: "no-cors",
            }).then(response => {
                console.log(response.json());} );
    }

    getProject(id) {
        return fetch(`http://localhost:3333/projects/${id}`).then(response => response.json());
    }

    removeProject(id) {
        return fetch(`http://localhost:3333/projects/${id}`, {
            method: 'DELETE'
        }).then(response => response.json());
    }

    sortProjectsByDefault(func) {
        return fetch(`http://localhost:3333/projects?${func}`).then(response => response.json());
    }

    getSearchUsers(str) {
        return fetch(`http://localhost:3333/projects?name_like=${str}`).then(response => response.json());
    }
}

