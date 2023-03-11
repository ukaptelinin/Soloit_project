const {form} = document.forms;

function retrieveFormValue(event) {
    event.preventDefault();
    const {username, userphone, usermail} = form;

    const values = {
        username: username.value,
        userphone:  userphone.value,
        usermail: usermail.value
    };
    console.log('v',values);
}

form.addEventListener ('submit',retrieveFormValue);