import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please provide the product name'],
    minlength: 3,
    maxlength: 100,
  },
  brand: {
    type: String,
    required: [true, 'Please provide the product brand'],
    minlength: 2,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: [true, 'Please provide the price'],
    min: [0, 'Price must be a positive value'],
  },
  type: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    required: [true, 'Please specify the product type'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
    minlength: 10,
    maxlength: 500,
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide the quantity'],
    min: [0, 'Quantity cannot be negative'],
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {
  timestamps: true, 
})


productSchema.pre('save', function (next) {
  if (this.quantity <= 0) {
    this.inStock = false
  } else {
    this.inStock = true
  }
  next()
})


const Product = model<IProduct>('Product', productSchema)

export default Product
