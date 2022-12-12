const form2b = document.getElementById('form2b');
const fullName = document.getElementById('fullname'); //node element input of firstnamne
const email = document.getElementById('email');
const container = document.querySelector('.container');
const loveLanguages = document.getElementById('loveLanguages');

const formRows = document.querySelectorAll('.form-row'); //NodeList !== Array
//Array.isArray(formRows) --> False
let arrformRows = Array.from(formRows); //Array.isArray(formRows) --> true
arrformRows.pop(); //loại bỏ phần tử submit ra khỏi mảng
arrformRows.forEach(item => {
    // Create a small and add a class
    let elmtSmall = document.createElement("SMALL");
    elmtSmall.className = "message";
    elmtSmall.innerText ="XYZ";
    item.appendChild(elmtSmall);
});

function checkFullname() {
    if (fullName.value === '') {
        errorMessage(fullName, "This field is required.");
    } else {
        successMessage(fullName);
    }
}
function successMessage(elmt) {//parametter of element fn
    const formRow = elmt.parentElement;
    if (formRow.classList.contains('error')) {
        formRow.classList.remove('error');
        formRow.classList.add('success');
        // alert("success-classList= " + formControl.className);
    } else {
        formRow.classList.add('success');
    }
}
function errorMessage(elmt, message) {
    const formRow = elmt.parentElement;
    if (formRow.classList.contains('success')) {
        formRow.classList.remove('success');
        formRow.classList.add('error');
        // alert("error-classList= "+formControl.getAttribute('class'));
    } else {
        formRow.classList.add('error');
    }
    formRow.querySelector('.message').textContent = message;
}
function validateEmail(email) {
    /*https://www.w3resource.com/*/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(String(email).toLowerCase());
}
function checkEmail() {
    if (email.value === '') {
        errorMessage(email, "This field is required.");
    } else if (!validateEmail(email.value)) {
        errorMessage(email, "The email is invalid.");
    } else {
        successMessage(email);
    }
}
fullName.addEventListener('blur', checkFullname, false);
email.addEventListener('blur', checkEmail, false);        
const listChecks = document.querySelectorAll('.type-checkbox'); //NodeList !== Array
function checkAtleastOneChecked() {
//Array.isArray(formRows) --> False
    let arrlistChecks = Array.from(listChecks); //Array.isArray(formRows) --> true
    let test= false;
    //arrlistChecks.forEach(item => { if (item.checked) test = true});
    //alert('lenght='+arrlistChecks.length);
    for(let i=0; i < arrlistChecks.length-1 ; i++){
        if (arrlistChecks[i].checked) {
            test = true; break;
        }
    }
    if (test) {
        // alert('OK chon roi');
        successMessage(this);
    } else {
        // alert('CHUA CHON');
        errorMessage(this, "This field is required.");
    }
}
loveLanguages.addEventListener('click', checkAtleastOneChecked, true);
    form2b.addEventListener('submit', (evt) => {
    let isValid = true;
    arrformRows.forEach(item => {
        if (!item.classList.contains('success')) isValid = false;
    });
    //check if all input values are valid
    if (isValid) {
        container.classList.add('complete');
        alert("You have submitted successfully. Thank you.");
    } else {
        evt.preventDefault();
        alert("You must fill out the form completely before submitting.");
        container.classList.remove('complete');
    }
});
//////////////////////////////////////////////
function getQueryString(){
    const params = new URL(window.location).searchParams;
    let fullName = params.get("fullname");
    let email = params.get("email");
    let languages = params.getAll("languages");
    let strResult ='';
    languages.forEach( item =>{strResult += item + ', '});
    strResult=strResult.substring(0, strResult.length - 2);
    document.getElementById("info").innerHTML = "Full name: <b>"+ fullName +"</b><br/>"
    
                            + "Email: <b>"+ email +"</b><br/>"
                            + "Your chosen language(s): <b>"+ strResult + "</b>";
    
}