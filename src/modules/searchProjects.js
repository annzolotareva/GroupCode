import {render} from "./render.js";

export const searchProjects = () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', (e) => {
        projectRepo.getSearchUsers(searchInput.value).then( projects => {
            render(projects,rolesInProject);
        });
    });
};