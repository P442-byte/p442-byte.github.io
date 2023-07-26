const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
    
  if (mySrc === "Images/YinYang.png") {
    myImage.setAttribute("src", "Images/YinYangStart.png");
  } else {
    myImage.setAttribute("src", "Images/YinYang.png");
  }
};

/*document.querySelector("img").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});*/


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
  setUserName();
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

function setUserName() {
  const myName = prompt("Please enter your name.");
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}