import express, { Request, Response } from 'express'
import productRouter from './module/product/product.router'
import orderRouter from './module/order/order.router'
import cors from "cors";

const app = express()

app.use(cors({
  origin: [
    'http://localhost:5173'
  ],
  credentials: true
}));

// middleware
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app
