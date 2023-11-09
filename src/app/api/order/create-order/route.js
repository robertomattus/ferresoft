import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { user } = data;

      const saveNewOrder = await Order.create(data);

      if (saveNewOrder) {
        await Cart.deleteMany({ userID: user });

        return NextResponse.json({
          success: true,
          message: "Productos en camino!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Fallo al crear orden! Intenta de nuevo",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estas autenticado",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Algo salio mal! Intenta mas tarde",
    });
  }
}
