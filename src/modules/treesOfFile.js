export const treesOfFile = (project) => {
$('#jstree_demo_div').insertAdjacentHTML('beforeend', `
                                    <tr data-key="${project.id}>
                                        <td><img src="./img/project-page/html-file__icon.svg" alt="">index.html</td>
                                        <td>Подключен шрифт "Hack"</td>
                                        <td>${project.dateOfChange}</td>
                                        <td><img src="./img/repository-page/edit-icon.svg" alt=""></td>
                                        <td><img src="./img/repository-page/delete-icon.svg" alt=""></td>
                                    </tr>`);
$(function () { $('#jstree_demo_div').jstree(); });

};