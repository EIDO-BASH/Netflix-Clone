document.addEventListener("DOMContentLoaded", (e) => {
  const create_acct = document.getElementById("create_acct");
  const spinner = document.getElementById("spinner");
  const sign_in = document.getElementById("sign-in");
  const parent = document.getElementById("insertion_parent");
  const point = document.getElementById("insertion_point");
  const switched = document.getElementById("switch");

  create_acct.addEventListener("click", (e) => {
    e.preventDefault();
    createAcct();
  });
  sign_in.addEventListener("click", (e) => {
    e.preventDefault();
    SignIn();
  });

  switched.addEventListener("click", (e) => {
    e.preventDefault();
    switche();
  });

  function message(err, className) {
    const div = document.createElement("div");
    div.className = `${className} `;
    div.textContent = `${err}`;
    parent.insertBefore(div, point);

    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  function createAcct() {
    const loader = document.getElementById("loader-screen");
    spinner.classList.remove("d-none");
    loader.style.display = "flex";

    setTimeout(() => {
      window.location.href = "create.html";
    }, 2000);
  }

  function SignIn() {
    const input1 = document.getElementById("floatingInputGroup1").value;
    const input2 = document.getElementById("floatingInputGroup2").value;
    const storedPass = JSON.parse(localStorage.getItem("userPassword"));
    const storedName = JSON.parse(localStorage.getItem("username"));
    if (input1 == "" || input2 == "") {
      message("fill in required details", "bg-danger-subtle");
    } else if (input2 !== storedPass || input1 !== storedName) {
      message(`Account not found`, "bg-danger-subtle");
    } else {
      message("Sign in successful", "bg-success-subtle");

      setTimeout(() => {
        const loader = document.getElementById("loader-screen");
        spinner.classList.remove("d-none");
        loader.style.display = "flex";

        setTimeout(() => {
          window.location.href = "home.html";
        }, 2000);
      }, 1000);
    }
  }

  function switche() {
    const loader = document.getElementById("loader-screen");
    spinner.classList.remove("d-none");
    loader.style.display = "flex";

    setTimeout(() => {
      window.location.href = "accounts.html";
    }, 2000);
  }
});
