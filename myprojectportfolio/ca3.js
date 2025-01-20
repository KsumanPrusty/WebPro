
function mergefind(arr1, arr2) {
    const mergeArray = arr1.concat(arr2);

    const secondsmallest = arry[1];
    const secondlargest = arry[arry.length - 2];

    return {
        secondsmallest,
        secondlargest,
    };
}
const arr1 = [1, 8, 12, 4, 6, 9, 14];
const arr2 = [16, 6, 12, 33, 44, 18, 7];
const result = mergefind(arr1, arr2);
console.log("Second Smallest is:", result.secondsmallest);
console.log("Second Largest is:", result.secondlargest);
