const sendFormAuthorization = () => {
    const modalSignUp = document.querySelector('.modal-sign-up');
    const modalOverlay = document.querySelector('.modal-overlay');
    const statusBlock = document.createElement("div");
    const errorText = "Ошибка";
    const formSignUp = document.querySelector('[name="modal-sign-up__form"]');
    const formElementsSignUp = formSignUp.querySelectorAll(".fdfd");
    statusBlock.style.color = "rgba(255, 255, 255, 0.5)";
    statusBlock.style.textAlign = "center";

    const sendData = (data) => {
        return fetch("http://GroupCode/auth.php", {
            mode: "no-cors",
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        }).then((res) => res.json);
    };

    const cleanData = (formElements) => {
      formElements.forEach((input) => {
              if (input.name == "user-email" || input.name == "user-password"){
                  input.value = "";
              }        
            });
    };

    const submitForm = () => {
      const formData = new FormData(formSignUp);
      const formBody = {};
      formSignUp.append(statusBlock);

      formData.forEach((value, key) => {
         formBody[key] = value;
       });
        sendData(formBody)
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

    };

    try {
      formSignUp.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.replace("http://GroupCode/auth.php");
        submitForm();
      });
    } catch (error) {
    console.log(error.message);
    }
    
};
export default sendFormAuthorization;
