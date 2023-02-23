function reverseArray(n, elements) {
    let arr = elements.slice(0, n);
    let reversedArr = arr.reverse();
    console.log(reversedArr.join(' ')); // prints "5 4 3 2 1"
}

reverseArray(3, [10, 20, 30, 40, 50])