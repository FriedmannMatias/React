import Nike from './img/Nike.png'

const products = [
    {
        id: '1',
        name: 'Nike Air Force',
        price: 1000,
        category: 'zapatillas',
        img: 'https://essential.vtexassets.com/arquivos/ids/922034-800-auto?v=638235536349170000&width=800&height=auto&aspect=true',
        stock: 25,
        description: 'descripcion de zapas'
    },
    { id: '1', name: 'Adidas Classic', price: 1000, category: 'zapatillas', img: 'https://essential.vtexassets.com/arquivos/ids/922034-800-auto?v=638235536349170000&width=800&height=auto&aspect=true', stock: 25, description: 'descripcion de zapas'},
    { id: '1', name: 'Fila pro', price: 1000, category: 'zapatillas', img: 'https://essential.vtexassets.com/arquivos/ids/922034-800-auto?v=638235536349170000&width=800&height=auto&aspect=true', stock: 25, description: 'descripcion de zapas'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id===productId))
        }, 500)
    })
}