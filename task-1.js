var operations = ['push', 'pop', 'shift', 'unshift'];
var currentOperation = operations[0];
var arr = [];

var arrElem = document.createElement('section');
document.body.appendChild(arrElem );
arrElem.innerHTML = arr;

var elem = document.createElement('input');
elem.type = 'text';
document.body.appendChild(elem);
elem.placeholder = 'новый элемент массива';
// elem.style.visibility = 'hidden';

// elem.onchange = function (event) {
//     arr [currentOperation] (this.value);
//     arrElem.innerHTML = arr;
//     // this.style.visibility = 'hidden'
// };

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
    arr [currentOperation] (elem.value);
    arrElem.innerHTML = arr;

    if (currentOperation === 'push' || currentOperation === 'unshift') {
        // this.style.visibility = 'visible';
    }
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

var buttonInsertElement = document.body.appendChild(document.createElement('button'));
buttonInsertElement.innerHTML = 'Добавить элемент';
buttonInsertElement.style.marginTop = '10px';


buttonInsertElement.onclick = function (event) {
    if (positionElementInput.value <= arr.length) {
        var newElement = elem.value;
        arr.splice(positionElementInput.value, 0, newElement);
        arrElem.innerHTML = arr;
    }
};

















