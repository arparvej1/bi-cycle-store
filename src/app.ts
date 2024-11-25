import express, { Request, Response } from 'express'
import productRouter from './module/product/product.router'

const app = express()

// middleware
app.use(express.json())

app.use('/api/products', productRouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app
