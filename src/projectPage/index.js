import {ProjectRepo}  from "../modules/projectRepo.js";
import { renderFiles } from "../modules/renderFiles.js";

window.projectRepo = new ProjectRepo;


projectRepo.getProject(id).then(data => {
    renderFiles(data);
});

