import { Request, Response } from 'express'
import { productService } from './product.service'

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    // console.log(payload)

    const result = await productService.createProduct(payload)

    res.json({
      status: true,
      message: 'Bicycle created successfully',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const getProducts = async (req: Request, res: Response) => {
  try {

    const { name } = req.query;
 
    const filter: any = {};
 
    if (name) {
      filter.name = { $regex: name, $options: 'i' }; 
    }
    console.log('Filter:', filter);  // Log the filter to debug

    const result = await productService.getProducts(filter)  
console.log(result);
    res.send({
      status: true,
      message: 'Bicycles retrieved successfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId

    const result = await productService.getSingleProduct(productId)

    res.send({
      status: true,
      message: 'Bicycle retrieved successfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const body = req.body

    const result = await productService.updateProduct(productId, body)

    res.send({
      status: true,
      message: 'Bicycle updated successfully',
      result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const result = await productService.deleteProduct(productId)

    res.send({
      status: true,
      message: 'Bicycle deleted successfully',
      result: {},
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

export const productController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
