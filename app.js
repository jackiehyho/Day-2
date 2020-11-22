// if i click on an image the screen goes dark

const images = document.querySelector("img");
const modalArea = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");



images.addEventListener('click', function() {
    // if(modalContent.lastElementChild.tagName === 'small'){
    //     modalContent.removeChild(modalContent.lastChild);
    //     console.log(modalContent.lastChild.tagName)

    // }

    if (modalContent.lastChild.tagName !== 'SMALL'){
    let node = document.createElement("small");
    let textnode = document.createTextNode(images.alt);
    node.appendChild(textnode);
    modalContent.appendChild(node);
    }
    else {
        modalContent.removeChild(modalContent.lastChild);
    }
    modalArea.classList.toggle('modalToggle');

}
);

