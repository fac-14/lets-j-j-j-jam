const usernameField = document.querySelector('#signup-username');
const errorMsg = document.querySelector('#username-error-msg');
const registerBtn = document.querySelector('#register-btn');

usernameField.addEventListener('keyup', function(e) {
  const name = usernameField.value
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText)
      if (data.usernameExists) {
        errorMsg.textContent = "This username already exists";
        registerBtn.disabled = true;
      } else if (! data.usernameExists){
        errorMsg.textContent = null;
        registerBtn.disabled = false;
      }
    } else if (xhr.readyState == 4 && xhr.status !== 200) {
      console.log("problem checking username");
    }
  }
  xhr.open('GET',`/username/${name}`, true)
  xhr.send();
});