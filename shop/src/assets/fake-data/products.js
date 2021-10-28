const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "Tommy",
        price: '12500',
        image01: product_01_image_01,
        image02: product_01_image_02,
    },
    {
        title: "T.Pupps & Cattys",
        price: '12500',
        image01: product_02_image_01,
        image02: product_02_image_02,
    },
    {
        title: "Keil & Sabby",
        price: '9500',
        image01: product_03_image_01,
        image02: product_03_image_02,
    },
    {
        title: "Dorry & Corri",
        price: '15500',
        image01: product_04_image_01,
        image02: product_04_image_02,
    },
    {
        title: "Gerry & Bosco",
        price: '11400',
        image01: product_05_image_01,
        image02: product_05_image_02,
    },
    {
        title: "Taska & Kiddi",
        price: '29500',
        image01: product_06_image_01,
        image02: product_06_image_02,
    },
    {
        title: "Mat, Fabia & Fio",
        price: '13000',
        image01: product_07_image_01,
        image02: product_07_image_02,
    },
    {
        title: "Sande & Maude",
        price: '25000',
        image01: product_08_image_01,
        image02: product_08_image_02,
    },
    {
        title: "Tod & Toddy",
        price: '18000',
        image01: product_09_image_01,
        image02: product_09_image_02,
    },
    {
        title: "Goat Matata",
        price: '7000',
        image01: product_10_image_01,
        image02: product_10_image_02,

    },
    {
        title: "Bunny Weila",
        price: '5000',
        image01: product_11_image_01,
        image02: product_11_image_02,

    },
    {
        title: "Kaka Mjanja",
        price: '4000',
        image01: product_12_image_01,
        image02: product_12_image_02,
    },
    {
        title: "Jay",
        price: '9000',
        image01: product_01_image_01,
        image02: product_01_image_02,

    },
    {
        title: "John-Jill & the Cats",
        price: '19000',
        image01: product_02_image_01,
        image02: product_02_image_02,
    },
    {
        title: "Rose & Ron",
        price: '5400',
        image01: product_03_image_01,
        image02: product_03_image_02,
    },
    {
        title: "Milli & Borry",
        price: '14000',
        image01: product_08_image_01,
        image02: product_08_image_02,
    },
    {
        title: "Tod Oise",
        price: '22000',
        image01: product_09_image_01,
        image02: product_09_image_02,
    },
    {
        title: "Bestie",
        price: '12000',
        image01: product_10_image_01,
        image02: product_10_image_02,

    },
    // 18 pets
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData