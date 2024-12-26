const myNums = [1, 2, 3];

// const totalNum = myNums.reduce(function (acc, currVal) {
//     console.log(`acc ${acc} and currVal ${currVal}`);
//     return acc + currVal;
// }, 0)

const totalNum = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// console.log(totalNum);

const shoppingCart = [
    {
        itemName: 'JS course',
        price: 2999,
    },
    {
        itemName: 'DSA course',
        price: 3999,
    },
    {
        itemName: 'Machine Learning Course',
        price: 5999
    },
    {
        itemName: 'Web Devlopment course',
        price: 9999,
    }
]

const totalShopping = shoppingCart.reduce((accumulator, item) => {
    return accumulator + item.price;
}, 0);

console.log(totalShopping);
