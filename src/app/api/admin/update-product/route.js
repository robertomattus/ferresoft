import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
      const extractData = await req.json();
      const {
        _id,
        name,
        price,
        description,
        category,
        sizes,
        deliveryInfo,
        onSale,
        priceDrop,
        imageUrl,
      } = extractData;

      const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: _id,
        },
        {
          name,
          price,
          description,
          category,
          sizes,
          deliveryInfo,
          onSale,
          priceDrop,
          imageUrl,
        },
        { new: true }
      );

      if (updatedProduct) {
        return NextResponse.json({
          success: true,
          message: "Producto actualizado exitosamente",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Fallo al actualizar el producto! Intenta mas tarde",
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
      message: "Algo salio mal! Intenta mas tarde",
    });
  }
}
