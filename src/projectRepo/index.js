import {render} from "../modules/render.js";
import {ProjectRepo}  from "../modules/projectRepo.js";
import {UsersDate} from "../modules/usersDate.js";
import {RolesDate} from "../modules/rolesDate.js";
import {RolesInProjectDate} from "../modules/rolesInProjectDate.js";
import {removeProjects} from "../modules/removeProjects.js";
//import {sortProjects} from "./modules/sortProjects.js";
import {searchProjects} from "../modules/searchProjects.js";
import {modalSort} from "../modules/modalSort.js";

window.projectRepo = new ProjectRepo;
window.usersDate = new UsersDate;
window.rolesDate = new RolesDate;
window.rolesInProjectDate = new RolesInProjectDate;


projectRepo.getProjects().then(data => {
    data ? JSON.parse(data) : {};
    render(data);
});


removeProjects();
//sortProjects();
searchProjects();
modalSort();