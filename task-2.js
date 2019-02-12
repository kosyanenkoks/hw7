var tagNames = ["div", "div", "div", "div", "button"];
var divStyle = `
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px green;
    font-size: 25px;
`;

elements = tagNames.map (function(x) {
    return document.body.appendChild (
        document.createElement(x)
    )
});

elements.filter(function(element) {
    return element.tagName === "DIV";
})

.forEach(function(element, num) {
    element.style = divStyle;
    element.innerText = num;
});

elements.filter(function(element) {
    return element.tagName === "BUTTON";
})

.forEach(function(element) {
    element.innerHTML = "remove DIVs";
    element.onclick = function (event) {
        recursRemove()
    }
});

var recursRemove = (function(element) {
    var targetElement = document.querySelectorAll(element);
    var index = 0;
    return function deleteElement() {
        if (index == targetElement.length ) {
            return;
        } else {
            document.body.removeChild(targetElement[index]);
            targetElement [index++];
            deleteElement();
        }
    }
})("DIV");