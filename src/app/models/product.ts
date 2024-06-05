export class Product {

    id: number
    name: string
    price: number
    inStock: boolean = false
    img: string

    static lastId = 0

    constructor (name: string, price: number, img: string) {
        this.name = name
        this.price = price
        this.img = img

        Product.lastId++
        this.id = Product.lastId
    }



}


