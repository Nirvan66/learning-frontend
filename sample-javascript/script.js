window.onload = () => {
  button = document.getElementById("button1");
  button.addEventListener("click", () => {
    console.log("here");
    document.getElementById("helloMessage").innerHTML = "Hello, world!";
  });
};
