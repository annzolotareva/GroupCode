export const sortProjects = (projects) => {
    const sortVariants = document.querySelectorAll('[name="modal-sort__sort-option"]');

    const objInArray = () => {
        projects.forEach(project => {
            for (let key in project) {
                if (key == "name") {
                    console.log(project[key]);
                }
            }
    });
};

    const vari = (sortVariants) => {
        sortVariants.forEach(variant => {
            if ((variant.value == "default") && (variant.checked = checked)) {
            console.log(projects.sort());
             }
        });
    };

    objInArray();
    vari(sortVariants);
    variants.forEach(variant => {
        variant.addEventListener("click", (e) => {
            e.preventDefault();
            //projectRepo.sortProjects();
    });
});