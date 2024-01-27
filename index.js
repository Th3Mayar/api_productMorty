import exp from "express";
import { products } from "./products";
import { data } from "./R&M";
import cors from 'cors';
//
const app = exp()

app.use(exp.json())

app.use(cors())

const PORT = process.env.PORT

app.get("/characters", (req, res) => {
    res.json(data.results)
})

app.get("/character/:id", (req, res) => {
    const {id} = req.params
    const character = data.results.find((p) => {
        return p.id == id
    })
    if(!character){
        return res.json({
            message: "Character not found!"
        })
    }
    return res.json(character)
})

app.get("/product/:id", (req, res) => {
    const {id} = req.params
    const product = products.find((p) => {
        return p.id == id
    })
    if(!product){
        return res.json({
            message: "Product not found!"
        })
    }
    return res.json(product)
})

app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    })
})

app.put("/product/:id", (req, res) => {
    console.log(req.params)
    const {id} = req.params

    let index = 0

    let product = products.find((p, i)=>{
        if (p.id == id){
            index = i
        }
        return p.id == id
    })

    product = {
        ...product, ...req.body
    }
    
    products[index] = product

    res.json(product)
})

app.get("/products", (req, res) => {
    res.json(products)
})


app.listen(PORT, () =>{
    console.log(`Server running on port http://localhost:${PORT}`)
})
