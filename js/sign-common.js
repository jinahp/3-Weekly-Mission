let emailInput = document.querySelector(".sign-email");

emailInput.addEventListener("focusout", function (e) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValue = this.value;

  if (emailValue.trim() === "") {
    document.getElementById("email-error-message").textContent =
      "이메일을 입력해주세요.";
    this.classList.add("input-error");
  } else if (!emailPattern.test(emailValue)) {
    document.getElementById("email-error-message").textContent =
      "올바른 이메일 형식이 아닙니다.";
    this.classList.add("input-error");
  } else {
    document.getElementById("email-error-message").textContent = "";
    document.getElementById("password-error-message").textContent = "";
    document.getElementById("password-error-message-different").textContent =
      "";
    emailInput.classList.remove("input-error");
  }
});
