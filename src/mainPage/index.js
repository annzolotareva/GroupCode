import smoothScroll from "../modules/smoothScroll.js";
import modalWindow from "../modules/modalWindow.js";
import sendForm from "../modules/sendForm.js";
import {UsersDate} from "../modules/usersDate.js";
import {verificationForAuthorization} from "../modules/verificationForAuthorization.js"

window.usersDate = new UsersDate;

usersDate.getUsers().then(data => { 
    verificationForAuthorization(data);
});

modalWindow();
smoothScroll();
sendForm();

