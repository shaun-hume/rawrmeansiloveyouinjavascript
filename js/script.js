function enterTheHeart() {
  document.body.classList.add("transition");
  setTimeout(() => {
    window.location.href = "mainpage.html";
  }, 900);
}

function populateStorage() {
  console.log("the value is set:" + localStorage.getItem("storedindb"));
  localStorage.setItem("storedindb", Date.now());
  document.getElementById("storageStatus").innerHTML = localStorage.getItem(
    "storedindb"
  );
}

function clearStorage() {
  localStorage.clear();
  document.getElementById("storageStatus").innerHTML = "false";
}

function loadPuzzles() {
    // var files = fs.readdirSync('/puzzles/');
    console.log(files);
}