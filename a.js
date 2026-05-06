document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.getElementById("spinner");
  const sign = document.getElementById("sign");

  sign.addEventListener("click", (e) => {
    e.preventDefault();
    goToPages();
  });
  //CCOUNT CREATION FUNCTION
  function goToPages() {
    const inputs = document.querySelectorAll(".form-control");
    let filled = [];
    const parent = document.getElementById("insertion_parent");
    const point = document.getElementById("insertion_point");

    // remove old errors first
    document.querySelectorAll(".error-msg").forEach((el) => el.remove());

    //check if there are any emoty filled by using trim() which checks for empty spaces and pushing each input that has been found with empty spaces into the array
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        filled.push(input);
      }
    });

    //if the array has more than 1 empty space, let it prompt to  fill in  required details
    if (filled.length > 1) {
      message("Please fill in required details", "bg-danger-subtle");
    }
    //else, if its only one, let it prompt user to fill in for only that field
    else if (filled.length == 1) {
      message(`Please fill in ${filled[0].placeholder}`, "bg-danger-subtle");
    }
    //if it doesnt have empty spaces, let it carry on as usual
    else {
      const password = document.getElementById("floatingInputGroup2").value;
      const c_pass = document.getElementById("floatingInputGroup3").value;
      const name = document.getElementById("floatingInputGroup1").value;

      //REGULAR EXPRESSIONS TO VALIDATE FORM INPUT
      const pattern = /^[a-zA-Z0-9]{6,8}$/;
      const name_pattern = /^[a-z_]{4,16}$/;

      //CONDITIONS FOR VALIDATION
      //ensure username is btw alphabets and the underscore
      if (name_pattern.test(name)) {
        //ensures password entered for account creation are identical
        if (password === c_pass) {
          //ensures password fits the required formating criteria
          if (pattern.test(password)) {
            //executions
            localStorage.setItem("userPassword", JSON.stringify(password));
            localStorage.setItem("username", JSON.stringify(name));
            message("account creation successful", "bg-success-subtle");

            setTimeout(() => {
              const loader = document.getElementById("loader-screen");
              spinner.classList.remove("d-none");
              loader.style.display = "flex";

              setTimeout(() => {
                window.location.href = "/index.html";
              }, 2000);
            }, 1000);
          } else {
            message("enter valid password format", "bg-danger-subtle");
          }
        } else {
          message("enter a correct password", "bg-danger-subtle");
        }
      } else {
        message("invalid username format", "bg-danger-subtle");
      }
    }
    //ERROR MESSAGE FUNCTION
    function message(err, className) {
      const div = document.createElement("div");
      div.className = `${className} h-50`;
      div.textContent = `${err}`;
      parent.insertBefore(div, point);

      setTimeout(() => {
        div.remove();
      }, 2000);
    }
  }
});
