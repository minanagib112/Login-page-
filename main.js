    function validateForm() {
      let password = document.getElementById("password");

      // Check the validity of the input
      if (password.checkValidity()) {
        return true;
      } else {
        // Input is invalid, return false and show an alert message
        alert(password.validationMessage);
        return false;
      }
    }