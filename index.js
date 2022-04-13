

document.getElementById("fetch-btn").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
  document.getElementById("fetch-content").textContent = data.activity
  document.getElementById("title").textContent = "🤖 FunBot"
  })
})
