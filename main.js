const paragraphs = document.querySelectorAll('#wrapper p');
const angleDownIcons = document.querySelectorAll('.fa-angle-down');

/**
 * Toggles the visibility of a paragraph and switches the icon direction
 * when an associated icon is clicked.
 *
 * @param {Event} e - The event object from the click event on the icon.
 */
const showContent = (e) => {
    const currentIcon = e.currentTarget;
    const para = currentIcon.nextElementSibling;
    paragraphs.forEach(paragraph => {
        if(paragraph === para) {
            paragraph.classList.toggle('hidden');
            currentIcon.classList.toggle('fa-angle-down');
            currentIcon.classList.toggle('fa-angle-up');
        }
       
    })
}

angleDownIcons.forEach(icon => {
    icon.addEventListener('click', showContent)
})