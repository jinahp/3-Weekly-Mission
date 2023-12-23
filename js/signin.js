const signinForm = document.getElementById("signin-form");
const passwordInput = document.querySelector(".sign-password");

// 로그인 버튼을 클릭했을 때 폼을 서브밋하는 함수
document
  .getElementById("signin-button")
  .addEventListener("click", attemptSignin);

function attemptSignin() {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!passwordPattern.test(passwordInput.value)) {
    document.getElementById("password-error-message").textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    passwordInput.classList.add("input-error");
    return;
  }
  signin(email, password);
}

function signin(email, password) {
  axios
    .post("https://bootcamp-api.codeit.kr/api/sign-in", { email, password })
    .then((response) => {
      let { data } = response.data;
      localStorage.setItem("accessToken", data.accessToken);
      location.href = "/folder";
    })
    .catch(signinError);
}

function signinError() {
  errorMessage.textContent = "이메일을 확인해주세요.";
  document.getElementById("password-error-message").textContent =
    "비밀번호를 확인해주세요.";

  emailInput.classList.add("input-error");
  passwordInput.classList.add("input-error");
}
