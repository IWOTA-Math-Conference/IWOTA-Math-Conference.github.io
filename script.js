document.addEventListener("DOMContentLoaded", function() {
    const collapsibleButtons = document.querySelectorAll(".collapsible-button");

    collapsibleButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Toggle the active class to change the button style
            this.classList.toggle("active");

            // Get the content element associated with the button
            const content = this.nextElementSibling;

            // Toggle the display of the content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
