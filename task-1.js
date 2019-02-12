// function exploreArray(event) {
//     currentOperation = event.target.innerHTML;
//     if(currentOperation === 'push' || currentOperation === 'unshift') {
//         this.style.visibility = 'visible';
//     } else {
//         if(arr.length === 0) {
//             this.placeholder = 'Массив пуст, невозможно выполнить операцию';
//         } else {
//             extracted.innerHTML = arr [ currentOperation ]();
//             arrElem.innerHTML = arr;
//         }
//     }
// }
//
// var operations = ['push',  'pop',  'shift',  'unshift'];
// var currentOperation = null;
// var arr = [];
//
// var arrElem = document.createElement('section');
// document.body.appendChild(arrElem );
// arrElem.innerHTML = arr;
//
// var elem = document.createElement('input');
// elem.type = 'text';
// document.body.appendChild(elem);
// elem.placeholder = 'новый элемент массива';
// elem.style.visibility = 'hidden';
//
// elem.onchange = function (event) {
//     arr [currentOperation] (this.value);
//     arrElem.innerHTML = arr;
//     this.style.visibility = 'hidden'
// };
//
// var extracted = document.createElement ('p');
// document.body.appendChild(extracted);
//
// var btns = [];
//
// for (var operation of operations) {
//     btns.push (
//         document.body.appendChild (
//             document.createElement ('button')
//         )
//     );
//     btns [btns.length-1].innerHTML = operation;
//     btns [btns.length-1].onclick = exploreArray.bind(elem);
// }



var operations = ['push',  'pop',  'shift',  'unshift', 'custom'];
var currentOperation = null;
var arr = [];

var arrElem = document.createElement('section');
document.body.appendChild(arrElem );
arrElem.innerHTML = arr;

var elem = document.createElement('input');
elem.type = 'text';
document.body.appendChild(elem);
elem.placeholder = 'новый элемент массива';
elem.style.visibility = 'hidden';

elem.onchange = function (event) {
    arr[currentOperation](this.value);
    arrElem.innerHTML = arr;
    // this.style.visibility = 'hidden'
};

var extracted = document.createElement ('p');
document.body.appendChild(extracted);

var btns = [];

for (var operation of operations) {
    btns.push (
        document.body.appendChild (
            document.createElement ('button')
        )
    );
    btns [btns.length-1].innerHTML = operation;
    btns [btns.length-1].onclick = exploreArray.bind(elem);
}

function exploreArray (event) {
    currentOperation = event.target.innerHTML;
    if (currentOperation === 'push' || currentOperation === 'unshift') {
        this.style.visibility = 'visible';
    }
    // else if (currentOperation === 'custom'){
    //     operations[4].onclick = function (event) {
    //         if (positionElementInput.value <= arr.length) {
    //             var positionElement = +positionElementInput.value;
    //             var newElement = elem.value;
    //             arr.splice(positionElement, 0, newElement);
    //             console.log(1)
    //         }
    //     };
    // }
    else {
        if(arr.length === 0) {
            this.placeholder = 'Массив пуст, невозможно выполнить операцию';
        } else {
            extracted.innerHTML = arr[currentOperation]();
            arrElem.innerHTML = arr;
        }
    }


}

var positionElementInput = document.body.appendChild(document.createElement('input'));
positionElementInput.type = 'number';
positionElementInput.placeholder = 'индекс позиции вставки';
positionElementInput.style.display = 'block';
positionElementInput.style.marginTop = '10px';

// var buttonInsertElement = document.body.appendChild(document.createElement('button'));
// buttonInsertElement.innerHTML = 'Добавить элемент';
// buttonInsertElement.style.marginTop = '10px';

// buttonInsertElement.onclick = function (event) {
//     // if (positionElementInput.value <= arr.length) {
//     //     arr.push(elem.value);
//     //     arrElem.innerHTML = arr;
//     // }
//
//     if (positionElementInput.value <= arr.length) {
//         var positionElement = +positionElementInput.value;
//         var newElement = elem.value;
//         arr.splice(positionElement, 0, newElement);
//     }
// };

















