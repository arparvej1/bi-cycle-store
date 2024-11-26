import { Request, Response } from 'express'
import { productService } from './product.service'


const handleError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error: error.message,
    });
  } else {
    console.error(error);  // Log the unknown error for debugging
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error: 'Unknown error',
    });
  }
};

const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body
    // console.log(payload)

    const result = await productService.createProduct(payload)

    res.json({
      status: true,
      message: 'Bicycle created successfully',
      data: result,
    })
  } catch (error: unknown) {
    handleError(res, error);
  }
}

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {

    const { name, brand, type } = req.query;

    const filter: any = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }

    if (brand) {
      filter.brand = { $regex: brand, $options: 'i' };
    }

    if (type) {
      filter.type = { $regex: type, $options: 'i' };
    }

    const result = await productService.getProducts(filter)

    res.send({
      status: true,
      message: 'Bicycles retrieved successfully',
      data: result
    })
  } catch (error: unknown) {
    handleError(res, error);
  }
}

const getSingleProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId

    const result = await productService.getSingleProduct(productId)

    res.send({
      status: true,
      message: 'Bicycle retrieved successfully',
      data: result
    })
  } catch (error: unknown) {
    handleError(res, error);
  }
}

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId
    const body = req.body

    const result = await productService.updateProduct(productId, body)

    res.send({
      status: true,
      message: 'Bicycle updated successfully',
      data: result
    })
  } catch (error: unknown) {
    handleError(res, error);
  }
}

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId
    const result = await productService.deleteProduct(productId)

    res.send({
      status: true,
      message: 'Bicycle deleted successfully',
      data: {}
    })
  } catch (error: unknown) {
    handleError(res, error);
  }
}

export const productController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
