class ProductManager{
    constructor(){
        this.products = []
        this.nextId = 1
    }

    addProduct(title, description, price, thumbnail, code, stock){
        
        // Valida que los datos no esten incompletos
        if (!title || !description || isNaN(price) || !thumbnail || !code  || isNaN(stock)) {
            console.log("Los datos del producto son inválidos o están incompletos.")
            return
        }

        // Valida el code que no se repita
        if (code && this.products.some(product => product.code === code)) {
            console.log(`El código ${code} ya está en uso. Elige un código único.`)
            return
        }

        // Carga los datos del producto
        let nuevoEvento = {
            id: this.nextId,
            title,          // nombre del producto
            description,    // descripción del producto
            price,          // percio
            thumbnail,      // ruta de imagen
            code,           // código identificador
            stock           //número de piezas disponibles
        }

        // Agrega al array product un producto nuevo
        this.products.push(nuevoEvento)
        this.nextId++ // Incrementar el id para el próximo producto
    }

    getProductById(id){
        let indice = this.products.findIndex(products => products.id === id)
        if (indice === -1){
            console.log(`Not found code:${id}`)
        } else{
            console.log(this.products[indice])
        }
        
        return this.products[indice]
    }

    getProducts() {
        console.log("Lista de productos:");
        this.products.forEach(products => console.log(products));
    }
}


let array = new ProductManager()
array.getProducts()
array.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
array.getProducts()
array.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
array.getProductById(2)