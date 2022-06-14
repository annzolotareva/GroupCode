import { animate } from "./helpers.js";

export const modalSort = () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalSort = document.querySelector('.modal-sort');
    const modalSortCloseBtn = document.querySelector('.modal-sort__close-btn');
    const wrapperRepo = document.querySelector(".wrapper-repo");

    const visibleModalWindow = (modal) => {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
            modalOverlay.style.opacity = progress;
          },
        });
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    };

    const unvisibleModalWindow = (modal) => {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    const openModalWindowSort = (button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest(".sort-button")) {
                visibleModalWindow(modalSort);
                document.body.style.overflow = "hidden";
            }  
        });
    };

    const closeModalWindowSort = (elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            unvisibleModalWindow(modalSort);
            document.body.style.overflow = "";
        });
    };
    openModalWindowSort(wrapperRepo);
    closeModalWindowSort(modalOverlay);
    closeModalWindowSort(modalSortCloseBtn);
};

export default modalSort;