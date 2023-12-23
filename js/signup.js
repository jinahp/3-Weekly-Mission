const signupForm = document.getElementById("signup-form");
const passwordInput = signupForm["password"];
const passwordCheck = signupForm["password-check"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isValid = true;

emailInput.addEventListener("focusout", function (e) {
  checkDuplicateEmail(e.target.value); // 포커스 아웃 됐을 때
});

// 로그인 버튼을 클릭했을 때 폼을 서브밋하는 함수
document
  .getElementById("signup-button")
  .addEventListener("click", attemptSignup);

function checkDuplicateEmail(email) {
  if (email === "test@codeit.com") {
    errorMessage.textContent = "이미 사용 중인 이메일입니다.";
    emailInput.classList.add("input-error");
    isValid = false;
  } else {
    errorMessage.textContent = "";
    emailInput.classList.remove("input-error");
  }
}

function validateEmail() {
  if (!emailPattern.test(emailInput.value)) {
    errorMessage.textContent = "이메일을 확인해주세요.";
    isValid = false;
    emailInput.classList.add("input-error");
  } else {
    checkDuplicateEmail(emailInput.value); // 버튼을 클릭했을 때
  }
}

function validatePasswordMatch() {
  if (passwordInput.value !== passwordCheck.value) {
    document.getElementById("password-error-message-different").textContent =
      "비밀번호가 일치하지 않아요.";
    isValid = false;
    passwordCheck.classList.add("input-error");
  } else {
    document.getElementById("password-error-message-different").textContent =
      "";
    passwordCheck.classList.remove("input-error");
  }
}

function validatePassword() {
  const password = passwordInput.value;
  if (!password || password.trim() === "") {
    document.getElementById("password-error-message").textContent =
      "비밀번호를 입력해주세요.";
    isValid = false;
    passwordInput.classList.add("input-error");
  } else if (!passwordPattern.test(password)) {
    document.getElementById("password-error-message").textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    isValid = false;
    passwordInput.classList.add("input-error");
  } else {
    document.getElementById("password-error-message").textContent = "";
    passwordInput.classList.remove("input-error");
  }
}

function attemptSignup() {
  isValid = true;
  validateEmail();
  validatePasswordMatch();
  validatePassword();

  if (isValid) {
    signupForm.submit();
  }
}
