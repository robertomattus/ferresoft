import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddToCart = Joi.object({
  userID: Joi.string().required(),
  productID: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { productID, userID } = data;

      const { error } = AddToCart.validate({ userID, productID });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      console.log(productID, userID);

      const isCurrentCartItemAlreadyExists = await Cart.find({
        productID: productID,
        userID: userID,
      });

      console.log(isCurrentCartItemAlreadyExists);

      if (isCurrentCartItemAlreadyExists?.length > 0) {
        return NextResponse.json({
          success: false,
          message: "El producto ya está en el carrito! Añade uno diferente",
        });
      }

      const saveProductToCart = await Cart.create(data);

      console.log(saveProductToCart);

      if (saveProductToCart) {
        return NextResponse.json({
          success: true,
          message: "Producto añadido al carrito!",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Fallo al añadir producto al carrito! Intenta de nuevo.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "No estás autenticado",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Algo salio mal! Intenta mas tarde",
    });
  }
}
