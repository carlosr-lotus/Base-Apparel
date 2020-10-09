var user_email = document.querySelector("#user-email");
var btn_submit = document.querySelector(".btn-submit");

btn_submit.addEventListener("click", submitEmail);


function submitEmail() {
    let errorIcon = document.querySelector(".error-icon");
    let errorMsg = document.querySelector(".error-message");

    if (user_email.value == '') {
        errorIcon.innerHTML = '<img src="../images/icon-error.svg">'
        errorMsg.innerHTML = 'Please, provide a valid email.';
    } else {
        errorMsg.innerHTML = '';
        errorIcon.innerHTML = '';
        btn_submit.setAttribute('type', 'submit');
    }
}