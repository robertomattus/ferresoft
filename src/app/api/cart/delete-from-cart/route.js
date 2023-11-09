import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id)
        return NextResponse.json({
          success: false,
          message: "ID del item requerido",
        });

      const deleteCartItem = await Cart.findByIdAndDelete(id);

      if (deleteCartItem) {
        return NextResponse.json({
          success: true,
          message: "Item eliminado exitosamente",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Fallo al eliminar item! Intenta de nuevo.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estas autenticado",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Algo salio mal! Intenta de nuevo",
    });
  }
}
