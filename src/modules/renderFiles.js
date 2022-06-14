export const renderFiles = (project) => {
    const tbody = document.getElementById('project-field__table-body');

        tbody.insertAdjacentHTML('beforeend', `
            <tr data-key="${project.id}">
                <td>${project.name}</td>
                <td>${project.dateOfChange}</td>
                <td>${project.numberOfParticipants}</td>
                ${project.id == role.project ? `<td>${role.roles}</td>`: null}
                <td><img src="./img/repository-page/edit-icon.svg" alt=""></td>
                <td><img  class="remove-project-btn" src="./img/repository-page/delete-icon.svg" alt=""></td>
            </tr>
        `);
};



