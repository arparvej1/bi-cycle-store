import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: IOrder) => {
  const result = await Order.create(payload)
  return result
}

const getRevenue = async () => {
  const pipeline = [
    { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } }
  ];
  const result = await Order.aggregate(pipeline);
  return result[0].totalRevenue
}

export const orderService = {
  createOrder,
  getRevenue
}
