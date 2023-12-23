const emailInput = document.querySelector(".sign-email");
const errorMessage = document.getElementById("email-error-message");
const passwordContainers = document.querySelectorAll(".input-container");
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

emailInput.addEventListener("focusout", function (e) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = this.value;

  if (emailValue.trim() === "") {
    errorMessage.textContent = "이메일을 입력해주세요.";
    this.classList.add("input-error");
  } else if (!emailPattern.test(emailValue)) {
    errorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
    this.classList.add("input-error");
  } else {
    errorMessage.textContent = "";
    this.classList.remove("input-error");
  }
});

passwordContainers.forEach((container) => {
  const icon = container.querySelector(".eye-icon");
  const passwordInput = container.querySelector(".sign-password");

  icon.style.backgroundImage = 'url("/img/ic-eye-off.png")';
  passwordInput.type = "password";

  icon.addEventListener("click", function () {
    const currentType = passwordInput.type;

    if (currentType === "password") {
      passwordInput.type = "text";
      icon.style.backgroundImage = 'url("/img/ic-eye-on.png")';
    } else {
      passwordInput.type = "password";
      icon.style.backgroundImage = 'url("/img/ic-eye-off.png")';
    }
  });

  passwordInput.addEventListener("focusout", function () {
    const password = passwordInput.value;
    if (!password) {
      container.nextElementSibling.textContent = "비밀번호를 입력해주세요.";
      passwordInput.classList.add("input-error");
    } else if (!passwordPattern.test(password)) {
      container.nextElementSibling.textContent =
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
      passwordInput.classList.add("input-error");
    } else {
      container.nextElementSibling.textContent = "";
      passwordInput.classList.remove("input-error");
    }
  });
});
