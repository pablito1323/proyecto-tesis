function goTo(section) {
  if (section === "cronograma") {
    document.getElementById("cronograma").style.display = "block";
    window.scrollTo(0, document.getElementById("cronograma").offsetTop);
  } else {
    alert("Ir a: " + section.toUpperCase());
  }
}


function openRepo() {
  window.open("https://github.com", "_blank");
}

function openLinkedIn(number) {
  const urls = {
    1: "https://www.linkedin.com/in/usuario1/",
    2: "https://www.linkedin.com/in/usuario2/"
  };
  window.open(urls[number], "_blank");
}
