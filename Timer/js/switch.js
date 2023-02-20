

export function openForm(evt) {
    // Declare all variables
    var i, menuContent, menuLinks;

    // Get all elements with class="tabcontent" and hide them
    menuContent = document.getElementsByClassName("menu_content");
    for (i = 0; i < menuContent.length; i++) {
        menuContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    menuLinks = document.getElementsByClassName("menu_links");
    for (i = 0; i < menuLinks.length; i++) {
        menuLinks[i].className = menuLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    const id = evt.currentTarget.getAttribute('for');
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}

export const switchOn = () => {
    document.getElementById('stop').style.display = 'block';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('start').style.display = 'none';
}

export const switchOff = () => {
    document.getElementById('stop').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('start').style.display = 'block';
}

