import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Product ID is required",
        });

      const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "Producto eliminado exitosamente",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Fallo al eliminar el producto! Intenta de nuevo",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estas autenticado",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Algo salio mal! Intenta de nuevo",
    });
  }
}
