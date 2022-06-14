import {render} from "./render.js";

export const removeProjects = (file) => {

    const tbody = document.getElementById('projects-field__table-body');

    tbody.addEventListener('click', (e) => {
        if (e.target.matches(".remove-project-btn")) {
            const tr = e.target.closest('tr');
            const id = tr.dataset.key;
            projectRepo.removeProject(id).then(response => {
                projectRepo.getProjects().then(projects => {
                    render(projects, rolesInProjectDate.rolesInProject);
                });
            });
        };
    });
};