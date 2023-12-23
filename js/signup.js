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
  axios
    .post("https://bootcamp-api.codeit.kr/api/check-email", { email })
    .then((response) => {
      console.debug(response.data);
      errorMessage.textContent = "";
      emailInput.classList.remove("input-error");
    })
    .catch(signupError);
}

function signup(email, password) {
  axios
    .post("https://bootcamp-api.codeit.kr/api/sign-up", { email, password })
    .then((response) => {
      let { data } = response.data;
      localStorage.setItem("accessToken", data.accessToken);
      location.href = "/folder";
    })
    .catch(signupError);
}

function signupError(err) {
  let { error } = err.response.data;
  errorMessage.textContent = error.message;
  emailInput.classList.add("input-error");
  isValid = false;
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
  validatePasswordMatch();
  validatePassword();

  if (isValid) {
    signup(emailInput.value, passwordInput.value);
  }
}
