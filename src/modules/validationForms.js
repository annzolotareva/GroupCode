const validationForms = () => {
    const formSignIn = document.querySelector('.modal-sign-in__form');
    const formSignInElements = formSignIn.querySelectorAll("input");

    const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.name == "user-name") {
        if (/^[a-z0-9_-]{3,16}$/.test(input.value.trim())) {
          success = false;
        }
      }
      
      if (input.name == "user-email") {
        if (/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(input.value.trim())) {
          success = false;
        }
      }

      if (input.name == "user-password") {
        if (/^[a-z0-9_-]{6,18}$/.test(input.value.trim())) {
          success = false;
        }
      }
    });

    return success;
  };

  return validate(formSignInElements);

};

export default validationForms;