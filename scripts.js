function onMenuButtonClick() {
    let x = document.getElementById("playlist_menu");
    if (x.style.display === "none") {
        x.style.display = "contents";
    } else {
        x.style.display = "none";
    }
}