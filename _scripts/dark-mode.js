/*
  manages light/dark mode.
*/

{
  // immediately load saved (or default) mode before page renders
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") ?? "false";

  const onLoad = () => {
    const toggle = document.querySelector(".dark-toggle");
    // update toggle button to match loaded mode
    toggle.checked = document.documentElement.dataset.dark === "true";

    // add event listener for dark mode toggle
    toggle.addEventListener("input", (event) => {
      const value = event.target.checked;
      document.documentElement.dataset.dark = value;
      window.localStorage.setItem("dark-mode", value);
    });
  };

  // after page loads
  window.addEventListener("load", onLoad);
}
