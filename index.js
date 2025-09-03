document.getElementById("submit").onclick = function() {
    event.preventDefault()
    document.getElementById("fullName").innerText = FullName;
    console.log(FullName)
     
  }
  