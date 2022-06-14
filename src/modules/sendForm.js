import validationForms from "./validationForms.js";

const sendForm = () => {
    const arrow = document.querySelector(".up");
    const modalSignIn = document.querySelector('.modal-sign-in');
    const modalOverlay = document.querySelector('.modal-overlay');
    const statusBlock = document.createElement("div");
    const unvalidText = "Данные не валидны";
    const errorText = "Ошибка";
    const formSignIn = document.querySelector('[name="modal-sign-in__form"]');
    const formElementsSignIn = formSignIn.querySelectorAll("input");
    statusBlock.style.color = "rgba(255, 255, 255, 0.5)";
    statusBlock.style.textAlign = "center";


    const sendData = (data) => {
        return fetch("http://localhost:3333/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json);
    };

    const cleanData = (formElements) => {
      formElements.forEach((input) => {
              if (input.name == "user-name" || input.name == "user-email" || input.name == "user-password"){
                  input.value = "";
              }        
            });
    };

    const submitForm = () => {
      const formData = new FormData(formSignIn);
      const formBody = {};
      formSignIn.append(statusBlock);

      formData.forEach((value, key) => {
         formBody[key] = value;
       });
      if (validationForms()) {
        sendData(formBody)
          .then(() => {
                modalSignIn.style.display = "none";
                modalOverlay.style.display = "none";
                statusBlock.textContent = "";
                document.body.style.overflow = "";
                if (window.pageYOffset > 520) {
                  arrow.style.display = "block";
                }
            cleanData(formElementsSignIn);
          })
          .catch(() => {
            statusBlock.textContent = errorText;
          });
      } else {
        statusBlock.textContent = unvalidText;
        setTimeout(() => {
                statusBlock.textContent = "";
            }, 3000);
      }
    };

    try {
      if (!formSignIn) {
        throw new Error("Верните форму на место!");
      }
      formSignIn.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm();
      });
    } catch (error) {
    console.log(error.message);
    }
    
};
export default sendForm;