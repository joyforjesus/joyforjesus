const menuButton = document.getElementById("menuButton");
const menuTabs = document.getElementById("mainTabs");
const allTabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

// Opens and closes the hamburger-menu table of contents.
menuButton.addEventListener("click", () => {
  const menuIsHidden = menuTabs.hidden;

  menuTabs.hidden = !menuIsHidden;

  menuButton.setAttribute("aria-expanded", String(menuIsHidden));
  menuButton.setAttribute(
    "aria-label",
    menuIsHidden ? "Close table of contents" : "Open table of contents"
  );
});

// Both table-of-contents menus open the matching content panel.
// This does not scroll the page.
allTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabNumber = button.dataset.tab;

    // Removes selected color from all buttons.
    allTabButtons.forEach((item) => {
      item.classList.remove("active");
    });

    // Hides all content panels.
    tabPanels.forEach((panel) => {
      panel.hidden = true;
    });

    // Shows the selected panel.
    document.getElementById(`tabPanel-${tabNumber}`).hidden = false;

    // Highlights the selected item in both menus.
    document.querySelectorAll(`[data-tab="${tabNumber}"]`).forEach((item) => {
      item.classList.add("active");
    });

    // Closes the pop-up menu after a selection.
    menuTabs.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open table of contents");
  });
});

// Donation message.
document.getElementById("contactButton").addEventListener("click", () => {
  document.getElementById("message").textContent =
    "Send a Check to Joy For Jesus!";
});

// Full-screen Google Form.
const formDialog = document.getElementById("formDialog");

document.getElementById("openFormBtn").addEventListener("click", () => {
  formDialog.showModal();
});

document.getElementById("MoreBtn").addEventListener("click", () => {
  formDialog.showModal();
});

document.getElementById("closeFormBtn").addEventListener("click", () => {
  formDialog.close();
});