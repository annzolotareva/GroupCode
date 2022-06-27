import { animate } from "./helpers.js";

const modalWindow = () => {
    const arrow = document.querySelector(".up");
    const modalSignIn = document.querySelector('.modal-sign-in');
    const modalSignUp = document.querySelector('.modal-sign-up');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCloseBtnSignIn = document.querySelector('.modal__close-btn-sign-in');
    const modalCloseBtnSignUp = document.querySelector('.modal__close-btn-sign-up');
    const wrapper = document.querySelector(".wrapper");
    const formSignIn = document.querySelector('[name="modal-sign-in__form"]');
    const formSignUp = document.querySelector('[name="modal-sign-up__form"]');
    const formElementsSignIn = formSignIn.querySelectorAll("input");
    const formElementsSignUp = formSignUp.querySelectorAll("input");
    const marquee = document.querySelector('marquee');
    const signInText = document.querySelector('.sign-in-text');
    const signUpText = document.querySelector('.sign-up-text');
    let flag = 0;

    const cleanData = (formElements) => {
      formElements.forEach((input) => {
              if (input.name == "user-name" || input.name == "user-email" || input.name == "user-password"){
                  input.value = "";
              }        
            });
    };

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

    const goToAnotherForm = (button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if  (button == signInText) {
                unvisibleModalWindow(modalSignUp);
                visibleModalWindow(modalSignIn);
                flag = 2;
            } else if (button == signUpText) {
                unvisibleModalWindow(modalSignIn);
                visibleModalWindow(modalSignUp);
                flag = 1;
            }
            if (flag == 1) {
                cleanData(formElementsSignUp);
            } else if (flag == 2) {
                cleanData(formElementsSignIn);
            }
        });
    };

    const openModalWindow = (button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.matches(".header__button_yellow")) {
                cleanData(formElementsSignUp);
                visibleModalWindow(modalSignUp);
                document.body.style.overflow = "hidden";
                if (arrow.style.display = "block") {
                    arrow.style.display = "none";
                }
                marquee.stop();
                flag = 1;
            } else if (e.target.matches(".header__button_violet") || e.target.matches(".top-info__button") || e.target.matches(".crawl-line__text")) {
                cleanData(formElementsSignIn);
                visibleModalWindow(modalSignIn);
                document.body.style.overflow = "hidden";
                if (arrow.style.display = "block") {
                    arrow.style.display = "none";
                }
                marquee.stop();
                flag = 2;
            } 
        });
    };

    const closeModalWindow = (elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            if (flag == 1) {
                unvisibleModalWindow(modalSignUp);
            } else if (flag == 2) {
                unvisibleModalWindow(modalSignIn);
            }
            document.body.style.overflow = "";
            if (window.pageYOffset > 520) {
                arrow.style.display = "block";
            }
            if (flag == 1) {
                cleanData(formElementsSignUp);
            } else if (flag == 2) {
                cleanData(formElementsSignIn);
            }
            marquee.start();
            flag = 0;
        });
    };
    
    openModalWindow(wrapper);
    goToAnotherForm(signInText);
    goToAnotherForm(signUpText);
    closeModalWindow(modalOverlay);
    closeModalWindow(modalCloseBtnSignIn);
    closeModalWindow(modalCloseBtnSignUp);
};

export default modalWindow;