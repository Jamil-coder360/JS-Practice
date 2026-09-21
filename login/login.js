const text = document.getElementById("text");
const email = document.getElementById("email");
const action = document.getElementById("action");
const password = document.getElementById("password");
const show = document.getElementById("show");
const hide = document.getElementById("hide");
const form = document.querySelector("#form");
const button = document.querySelector("button");

let loginUser = {
  text: "",
  email: "",
  password: "",
};
loginUser.Action = Boolean;

show.addEventListener("click", function () {
  password.setAttribute("type", "text");
  // if (type === "password") {
  //     hide.style.font= "100px";
  // }
  show.style.display = "none";
  hide.style.display = "inline";
});
hide.addEventListener("click", function () {
  password.setAttribute("type", "password");
  hide.style.display = "none";
  show.style.display = "inline";
});
hide.addEventListener("mouseover", function(){
    // hide.style.position = absolute;
    hide.style.top=0;
})

text.addEventListener("input", function (event) {
  loginUser.text = event.target.value;
});
email.addEventListener("input", function (e) {
  loginUser.email = e.target.value;
});
password.addEventListener("input", function (e) {
  loginUser.password = e.target.value;
});
action.addEventListener("click", function (e) {
  loginUser.Action = e.target.value;
});
button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(loginUser);
  action.innerHTML = ` <label for="text">Enter Action</label>

         <select name="boolean" id="boolean"    style="
            outline: none;
            border-radius: 10px;
            border: 2px solid rgb(6, 212, 253);
            padding: 5px 20px;
          ">
        <option value="true">true</option>
        <option value="false">false</option>
      </select> `;
  //   loginUser.Action = e.target.value;
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(loginUser);
});
