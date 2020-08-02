function enterTheHeart() {
  document.body.classList.add("transition");
  setTimeout(() => {
    window.location.href = "mainpage.html";
  }, 900);
}


function openPaper() {

}

function loadQuestNotes() {
  document.getElementById("questNotes").innerHTML = "ENTER YOUR QUEST NOTES HERE";
}