export const render = (projects, rolesInProject) => {
    const tbody = document.getElementById('projects-field__table-body');


    projects.forEach(project => {
        tbody.insertAdjacentHTML('beforeend', `
            <tr data-key="${project.id}">
                <td>${project.name}</td>
                <td>${project.dateOfChange}</td>
                <td>${project.numberOfParticipants}</td>
                <td>${rolesInProject[project.id].roles}</td>
                <td><img src="./img/repository-page/edit-icon.svg" alt=""></td>
                <td><img  class="remove-project-btn" src="./img/repository-page/delete-icon.svg" alt=""></td>
            </tr>
        `);
});
};



