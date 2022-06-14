const validationForms = () => {
    const formSignIn = document.querySelector('.modal-sign-in__form');
    const formSignInElements = formSignIn.querySelectorAll("input");

    const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.name == "user-name") {
        if (/[^а-я]/gi.test(input.value.trim())) {
          success = false;
        }
      }
      
      if (input.name == "user-email") {
        if (/[^a-z@]/gi.test(input.value.trim())) {
          success = false;
        }
      }

      if (input.name == "user-password") {
        if (/[^а-я]/gi.test(input.value.trim())) {
          success = false;
        }
      }
    });

    return success;
  };

  return validate(formSignInElements);

};

export default validationForms;