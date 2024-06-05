export class Product {

    id: number
    name: string
    price: number
    inStock: boolean = false

    static lastId = 0

    constructor (name: string, price: number) {
        this.name = name
        this.price = price

        Product.lastId++
        this.id = Product.lastId
    }



}


