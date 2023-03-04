"use strict";
function returnValue(){
    let array = document.getElementById("seq").value.split(' ');
    for(let i =0; i < array.length; i++){
        array[i] = parseInt(array[i])
    }
    document.getElementById("RespField").innerHTML = "";
    // let array = [1,2,3,4,5,6,7,8, 9, 10, 11]
    const R = parseInt(document.getElementById("key").value);
    let result = binarySearch(array, R);
    if(result == -1){
        alert("Елемент не знайденно, спробуйте перевірити массив на недопустимі символи");
    }
    return 0;
}

function binarySearch(array, R) {
    let tempArray = [];
    let start=0, end=array.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (array[mid]===R) {
        document.getElementById("RespField").innerHTML += '<span style = "background-color: brown;">' + array[mid] + '</span>'+ '<br>' + "at index: " + mid;
        return mid;
        }
        else if (array[mid] < R){
            document.getElementById("RespField").innerHTML += '<span style = "background-color: red;">' + array.slice(start, mid) + ',' + '</span>' +
            '<span style = "background-color: yellow;">' + array[mid] + ',' + '</span>' + '<span style = "background-color: green;">' + array.slice(mid+1, end+1) + '</span>' + '<br>';
            start = mid + 1;
        }
        else{
            document.getElementById("RespField").innerHTML += '<span style = "background-color: green;">' + array.slice(start, mid) + ',' + '</span>' +
            '<span style = "background-color: yellow;">' + array[mid] + ',' + '</span>' + '<span style = "background-color: red;">' + array.slice(mid+1, end+1) + '</span>' + '<br>';
            end = mid - 1;
        }
    }
    return -1;
}
