const menu = document.getElementById("menu");
const menu_button = document.getElementById("menu-button");

menu.style.display = "none";

function handle_menu_button() {
    if (isMouseInMenu) return;
    menu.style.display = menu.style.display == "none" ? "inline-block" : "none";
}

menu_button.addEventListener("click", () => setTimeout(handle_menu_button, 30));
menu_button.addEventListener("mouseenter", () => setTimeout(handle_menu_button, 30));
menu_button.addEventListener("mouseleave", () => setTimeout(handle_menu_button, 30));

var isMouseInMenu = false;
menu.addEventListener("mouseenter", () => isMouseInMenu = true)
menu.addEventListener("mouseleave", () => {
    isMouseInMenu = false;
    handle_menu_button();
})