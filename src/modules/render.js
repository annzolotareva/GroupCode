export const render = (projects) => {
    console.log(projects);
    const tbody = document.getElementById('projects-field__table-body');
    if (Object.keys(projects).length > 0) {
  for (const id in projects) {
    //html += '<div>' + projects[id] + '</div>';
        tbody.insertAdjacentHTML('beforeend', `
            <tr data-key="${project[id]}">
                <td>${project[id].name}</td>
                <td>${project[id].date_of_change}</td>
                <td>${project[id].number_of_users}</td>
                <td><img src="./img/repository-page/edit-icon.svg" alt=""></td>
                <td><img  class="remove-project-btn" src="./img/repository-page/delete-icon.svg" alt=""></td>
            </tr>
        `);
}
}
};



