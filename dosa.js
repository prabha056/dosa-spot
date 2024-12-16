document.addEventListener("DOMContentLoaded", function () {
    const resizeText = (element, maxFontSize = 1.2) => {
        let fontSize = maxFontSize;
        element.style.fontSize = `${fontSize}rem`;
        
        // Adjust the font size until the text fits within the element's container height
        while (element.scrollHeight > element.parentNode.clientHeight && fontSize > 0.8) {
            fontSize -= 0.1;
            element.style.fontSize = `${fontSize}rem`;
        }
    };

    // Apply the resizeText function to each element with the class "resizable-text"
    document.querySelectorAll(".resizable-text").forEach((element) => {
        resizeText(element);
    });
});
