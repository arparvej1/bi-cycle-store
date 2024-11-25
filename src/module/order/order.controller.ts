import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await orderService.createOrder(body)
    console.log(result);
    res.send({
      status: true,
      message: "Order created successfully",
      data: result
    })
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
      error,
    })
  }
}

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.getRevenue()

    res.send({
      status: true,
      message: "Revenue calculated successfully",
      data: { totalRevenue }
    })
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
      error,
    })
  }
}

export const orderController = {
  createOrder,
  getRevenue
}
