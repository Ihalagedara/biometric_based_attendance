const fileContent = document.getElementById("file-content");

// Read data from file and display it
const file = new XMLHttpRequest();
file.open("GET", "data.txt", false);
file.onreadystatechange = function () {
  if (file.readyState === 4) {
    if (file.status === 200 || file.status == 0) {
      fileContent.innerHTML = file.responseText;
    }
  }
};
file.send(null);