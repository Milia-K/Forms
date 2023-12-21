const form = document.forms.registrationForm;

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  function checkValidity(field) {
    if (!field.validity.valid) { 
      field.classList.add('error'); 
      const errorSpan = field.nextElementSibling; 
      errorSpan.textContent = field.validationMessage; 
      return false; 
    } else { 
      field.classList.remove('error'); 
      const errorSpan = field.nextElementSibling; 
      errorSpan.textContent = ''; 
      return true; 
    }
  }

let isValid = true; 


const nameField = form.elements.name;
isValid = checkValidity(nameField) && isValid;

const emailField = form.elements.email;
isValid = checkValidity(emailField) && isValid;

const ageField = form.elements.age;
isValid = checkValidity(ageField) && isValid;

const professionField = form.elements.profession;
isValid = checkValidity(professionField) && isValid;

const passwordField = form.elements.password;
isValid = checkValidity(passwordField) && isValid;

const confirmPasswordField = form.elements.confirmPassword;
isValid = checkValidity(confirmPasswordField) && isValid;

const consentField = form.elements.consent;
  if (!consentField.checked) { 
    consentField.classList.add('error'); 
    const errorSpan = consentField.nextElementSibling; 
    errorSpan.textContent = consentField.validationMessage; 
    isValid = false; 
  } else { 
    consentField.classList.remove('error'); 
    const errorSpan = consentField.nextElementSibling; 
    errorSpan.textContent = ''; 
  }

  if (isValid) { 
    alert('Регистрация прошла успешно!');
  } else { 
    alert('Пожалуйста, заполните все обязательные поля корректно.');
  }
});






