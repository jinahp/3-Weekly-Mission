let signupForm = document.getElementById("signup-form");
let passwordInput = signupForm["password"];
let passwordCheck = signupForm["password-check"];

// 로그인 버튼을 클릭했을 때 폼을 서브밋하는 함수
document
  .getElementById("signup-button")
  .addEventListener("click", attemptSignup);

function attemptSignup() {
  let email = emailInput.value;
  let password = passwordInput.value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (password !== passwordCheck.value) {
    document.getElementById("password-error-message-different").textContent =
      "비밀번호가 다릅니다.";
    passwordInput.classList.add("input-error");
    passwordCheck.classList.add("input-error");
    return;
  }

  if (!emailPattern.test(email)) {
    document.getElementById("email-error-message").textContent =
      "이메일을 확인해주세요.";
    return;
  }
  if (password === "") {
    document.getElementById("password-error-message").textContent =
      "비밀번호를 확인해주세요.";
    return;
  }

  emailInput.classList.add("input-error");
  signupForm.submit();
}
