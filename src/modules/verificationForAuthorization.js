export const verificationForAuthorization = (users) => {
    const modalSignUp = document.querySelector('.modal-sign-up');
    const modalOverlay = document.querySelector('.modal-overlay');
    const statusBlock = document.createElement("div");
    const unvalidText = "Такого пользователя не существует!";
    const errorText = "Ошибка";
    const formSignUp = document.querySelector('[name="modal-sign-up__form"]');
    const formElementsSignUp = formSignUp.querySelectorAll("input");
    statusBlock.style.color = "rgba(255, 255, 255, 0.5)";
    statusBlock.style.textAlign = "center";


    const cleanData = (formElements) => {
      formElements.forEach((input) => {
              if (input.name == "user-email" || input.name == "user-password"){
                  input.value = "";
              }        
            });
    };

    const checkData = (formElements) => {
      formElements.forEach((input) => {
 users.forEach(user => {
        if ((input.name == "user-email" && user.email == input.value) && (input.name == "user-password" && user.password == input.value)) {
            statusBlock.textContent = "Мя";
        } 
});
});  };

    const submitForm = () => {
      const formData = new FormData(formSignUp);
      const formBody = {};
      formSignUp.append(statusBlock);

      formData.forEach((value, key) => {
         formBody[key] = value;
       });
      checkData(formElementsSignUp)
      .then(() => {
                modalSignUp.style.display = "none";
                modalOverlay.style.display = "none";
                statusBlock.textContent = "";
                document.body.style.overflow = "";
            cleanData(formElementsSignUp);
          })
          .catch(() => {
            statusBlock.textContent = errorText;
          });

    try {
      if (!formSignIn) {
        throw new Error("Верните форму на место!");
      }
      formSignUp.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm();
      });
    } catch (error) {
    console.log(error.message);
    }

    };
   

};