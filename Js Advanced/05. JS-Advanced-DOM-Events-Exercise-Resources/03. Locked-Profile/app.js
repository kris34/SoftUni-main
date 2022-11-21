function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((b) =>
    b.addEventListener("click", toggle)
  );

  function toggle(e) {
    let profile = e.target.parentElement;
    let isActive = profile.querySelector(
      `input[type="radio"][value="unlock"]`
    ).checked;

    if (isActive) {
      let div = profile.querySelector("div");

      if (e.target.textContent == "Show more") {
        div.style.display = "block";
        e.target.textContent = "Hide it";
      } else {
        div.style.display = "none";
        e.target.textContent = "Show more";
      }
    }
  }
}
