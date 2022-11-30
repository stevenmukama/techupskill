// Answers to javascript questions
const item = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200},
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000},
    ]

    // 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one

      // cheapest product you can buy
function cheapestPrice (item){
    const cheapestItem = item.sort((a,b) => a.price - b.price) 
    return cheapestItem[0]
}

const cheap = cheapestPrice(item)
console.log(cheap)

// 2 . Filter and show the product that will be expensive in the array
    // expensive product you can buy
    function expensiveProduct(item) {
        const expensiveItem = item.sort((a,b) => b.price - a.price)
        return expensiveItem[0]
    }

    const expensive = expensiveProduct(item)
console.log(expensive)

  
// 3 . Calculate the full price of all product combined
// total price of all items
let total = 0;

item.forEach(item => {
    total += item.price
})
console.log("TOTAL: ", total)

// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

    let sum = 0;

    item.forEach(item =>  {
        if(item.price >10) {
    sum += item.price
    }})
        console.log(sum)