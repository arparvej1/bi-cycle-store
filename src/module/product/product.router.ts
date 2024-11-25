import { Router } from 'express'
import { productController } from './product.controller'

const productRouter = Router()

productRouter.get('/:productId', productController.getSingleProduct)
productRouter.put('/:productId', productController.updateProduct)
productRouter.delete('/:productId', productController.deleteProduct)
productRouter.get('/', productController.getProducts)
productRouter.post('/', productController.createProduct)

export default productRouter
