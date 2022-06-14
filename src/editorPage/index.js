import {treesOfFile} from "../modules/treesOfFile.js";
import {ProjectRepo}  from "../modules/projectRepo.js";

window.projectRepo = new ProjectRepo;


projectRepo.getProject(id).then(data => {
    treesOfFile(data);
});
