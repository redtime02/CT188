const form1 = document.getElementById('form1');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const container = document.querySelector('.container');
const anmtBox = document.querySelector('.box-animation');
       
              
function checkFirsname(){
 if (fname.value === ''){
   errorMessage(fname, "This field is required.");
  }else{
   successMessage(fname);
  }
}

function checkLastname(){
 if (lname.value === ''){
   errorMessage(lname, "This field is required.");
  }else{
   successMessage(lname);
  }
}

function validateEmail(email){
  var mailformat = /^\w+([\.-]?\w+) *@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailformat.test(String(email).toLowerCase());

}

function checkEmail(){
  if (email.value ===''){
    errorMessage(email, "This field is required.");
   }else if (!validateEmail(email.value)) {
    errorMessage(email, "The email is invalid.");
   }else{
     successMessage (email);
  }
}


fname.addEventListener('blur', checkFirsname, true);
lname.addEventListener('blur', checkLastname, true);
email.addEventListener('blur', checkEmail, true);


form1.addEventListener('submit', (evt) =>{
  evt.preventDefault();


  const formRows = document.querySelectorAll('.form-row');
  let arrformRows = Array.from(formRows); 
  arrformRows.pop();
  let isvalid = true;  
  arrformRows.forEach(item => {
    console.log(item.classList.contains('success'));
    if (!item.classList.contains('success')) isvalid = false;
});
//check
if (isvalid){
  container.classList.add('complete');
  alert("You have submitted successfully. Thank you.");
  anmtBox.classList.add('show');
 } else {
  container.classList.remove('complete');
  anmtBox.classList.remove('show');
 }
});

function errorMessage(pElement, message){
  const formRow=pElement.parentElement.parentElement;
 if (formRow.classList.contains('success')){
    formRow.classList.remove('success');
    formRow.classList.add('error');
   }else{
    formRow.classList.add('error');
  }
 formRow.querySelector('.message').textContent = message;
}


function successMessage(pElement){
  const formRow = pElement.parentElement.parentElement;

  if (formRow.classList.contains('error')){
    formRow.classList.remove('error');
    formRow.classList.add('success');
    }else{
    formRow.classList.add('success');
    }
  }
