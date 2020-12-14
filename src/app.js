
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function isEmailValid(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(allInputs, errors) {
  allInputs.forEach(item => {
    if (item.value.trim() === '') {
      errors.push({
        'input': item,
        'type': 'required',
        'message': `${getFieldName(item)} is required`
      });
    }
  });
  return errors;
}

function checkLength(input, min, max, errors) {
  if ((input.value.length < min) || (input.value.length > max)) {
    errors.push({
      'input': input,
      'type': 'length',
      'message': `${getFieldName(input)} must be between ${min} and ${max} characters`
    })
  }
  return errors;
}

function checkEmail(input, errors) {
  if (!isEmailValid(input.value)) {
    errors.push({
      'input': input,
      'type': 'email',
      'message': `${getFieldName(input)} is not valid`
    })
  }
  return errors;
}

function checkPasswordsMatch(input1, input2, errors) {
  if (input1.value !== input2.value) {
    errors.push({
      'input': input2,
      'type': 'passwords_match',
      'message': `Passwords don't match`
    })
  }
  return errors;
}

function showInputError(username, message) {
  const formControl = username.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerHTML = small.innerText + '<br> ' + message;
}

function showInputSuccess(username, message) {
  const formControl = username.parentElement;
  formControl.className = 'form-control success';
}

function showErrorsInForm(allInputs, errors) {
  allInputs.forEach(item => {
    const results = errors.filter(({ input }) => input.id === item.id);
    if (results.length > 0) {
      results.forEach(result => {
        //console.log(result.input.id, result.message)
        showInputError(item, result.message);
      });
    }
    else {
      showInputSuccess(item);
    }
  });
}

function resetErrorsInForm(allInputs) {
  allInputs.forEach(item => {
    const formControl = item.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = '';
  });

}

function validateForm() {
  let errors = [];
  resetErrorsInForm([username, email, password, password2]);
  errors = checkRequired([username, email, password, password2], errors);
  errors = checkLength(username, 3, 15, errors);
  errors = checkLength(password, 3, 15, errors);
  errors = checkEmail(email, errors);
  errors = checkPasswordsMatch(password, password2, errors);
  showErrorsInForm([username, email, password, password2], errors);
  return errors;
}

// Events listeners
/*form.addEventListener('submit', (e) => {
  e.preventDefault();
  let errors = validateForm();
  if (errors.length > 0) {
    console.log('not submitted!!')
  } else {
    console.log('submitted!!');
    form.submit();
    alert("Gracias por registrarte");
  }
})*/