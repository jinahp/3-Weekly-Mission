let signupForm = document.getElementById("signup-form");
let passwordInput = signupForm["password"];
let passwordCheck = signupForm["password-check"];

emailInput.addEventListener("focusout", function (e) {
  if (this.value === "test@codeit.com") {
    document.getElementById("email-error-message").textContent =
      "이미 사용 중인 이메일입니다.";
    this.classList.add("input-error");
    e.stopImmediatePropagation();
  }
});

// 로그인 버튼을 클릭했을 때 폼을 서브밋하는 함수
document
  .getElementById("signup-button")
  .addEventListener("click", attemptSignup);

function attemptSignup() {
  let email = emailInput.value;
  let password = passwordInput.value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

  if (password !== passwordCheck.value) {
    document.getElementById("password-error-message-different").textContent =
      "비밀번호가 일치하지 않아요.";
    isValid = false;
    passwordCheck.classList.add("input-error");
  } else {
    passwordCheck.classList.remove("input-error");
  }

  if (!emailPattern.test(email)) {
    document.getElementById("email-error-message").textContent =
      "이메일을 확인해주세요.";
    isValid = false;
    emailInput.classList.add("input-error");
  } else {
    emailInput.classList.remove("input-error");
  }

  if (!password || password.trim() === "") {
    document.getElementById("password-error-message").textContent =
      "비밀번호를 입력해주세요.";
    isValid = false;
    passwordInput.classList.add("input-error");
  } else {
    passwordInput.classList.remove("input-error");
  }

  if (isValid) {
    signupForm.submit();
  }
}
