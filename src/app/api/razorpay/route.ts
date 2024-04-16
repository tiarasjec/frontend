import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY as string,
  key_secret: process.env.RAZORPAY_SECRET as string,
});

export async function POST(req: Request) {
  const body = await req.json();
  const payment_capture = 1;
  const amount = body.amount * 100; // amount in paisa. In our case it's INR 1
  const currency = "INR";
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
    notes: {
      paymentFor: "testingDemo",
      userId: "100",
      productId: "P100",
    },
  };
  const order = await instance.orders.create(options);
  return NextResponse.json({ msg: "success", order });
}
