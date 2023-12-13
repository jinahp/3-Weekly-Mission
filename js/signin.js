let signinForm = document.getElementById("signin-form");
let passwordInput = document.querySelector(".sign-password");

// 로그인 버튼을 클릭했을 때 폼을 서브밋하는 함수
document
  .getElementById("signin-button")
  .addEventListener("click", attemptSignin);

function attemptSignin() {
  let email = emailInput.value;
  let password = passwordInput.value;

  if (email === "test@codeit.com" && password === "codeit101") {
    signinForm.submit();
    return;
  }

  document.getElementById("email-error-message").textContent =
    "이메일을 확인해주세요.";
  document.getElementById("password-error-message").textContent =
    "비밀번호를 확인해주세요.";

  emailInput.classList.add("input-error");
  passwordInput.classList.add("input-error");
}
