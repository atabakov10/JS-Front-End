function reverseArray(n, elements) {
    const arr = elements.slice(0, n);
    const reversedArr = arr.reverse();
    console.log(reversedArr.join(' ')); // prints "5 4 3 2 1"
}

reverseArray(3, [10, 20, 30, 40, 50])