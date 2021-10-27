const baseUrl = "http://localhost:8080";

signInButton.onclick = async () => {
  //for sign up to web

  const userNameVal = userNameSignIn.value;
  if (!userNameVal) {
    alert("type something...");
    return;
  }
  const response = await axios.get(`${baseUrl}/users/signin/${userNameVal}`);
  console.log(response);
  if (response.data) {
    //if there is such username
    alert("you just logged in!");
    connected(userNameVal);
    document.getElementById("buyClassic").style.visibility = "visible";
    document.getElementById("buyElectric").style.visibility = "visible";
    document.getElementById("buyBass").style.visibility = "visible";
  } else {
    document.getElementById("buyClassic").style.visibility = "hidden";
    document.getElementById("buyElectric").style.visibility = "hidden";
    document.getElementById("buyBass").style.visibility = "hidden";
    alert("your username doesn't exsist, click the link below to sign up!");
    document.getElementById("connect").textContent = "";
  }
};

document.getElementById("signUpButton").addEventListener("click", async (e) => {
  e.preventDefault();
  //for sign up to web
  const userNameVal = userNameSignUp.value;
  if (!userNameVal) {
    alert("type something...");
    return;
  }
  const response = await axios.post(`${baseUrl}/users/signup/${userNameVal}`);
  alert(response.data);
});

function connected(userName) {
  userNameSignUp.value = "";
  userNameSignIn.value = "";
  const connectNofiaction = document.getElementById("connect");
  connectNofiaction.className = "connected";
  connectNofiaction.textContent = `connected as: ${userName}`;
  connectNofiaction.style.color = "white";
}

document.getElementById("buyClassic").addEventListener("click", async () => {
  const userNameVal = document
    .getElementById("connect")
    .textContent.split("")
    .splice(14)
    .join("");
  const res = await axios.post(`${baseUrl}/users/buyGuitar/${userNameVal}`, {
    id: "1",
  });
  alert(res.data);
});
document.getElementById("buyElectric").addEventListener("click", async () => {
  const userNameVal = document
    .getElementById("connect")
    .textContent.split("")
    .splice(14)
    .join("");
  const res = await axios.post(`${baseUrl}/users/buyGuitar/${userNameVal}`, {
    id: "2",
  });
  alert(res.data);
});
document.getElementById("buyBass").addEventListener("click", async () => {
  const userNameVal = document
    .getElementById("connect")
    .textContent.split("")
    .splice(14)
    .join("");
  const res = await axios.post(`${baseUrl}/users/buyGuitar/${userNameVal}`, {
    id: "3",
  });
  alert(res.data);
});
