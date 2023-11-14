"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Lo necesitas? <br /> Lo tenemos!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Aquí es donde los verdaderos protagonistas son las herramientas y
              productos que hacen posible que cada proyecto se convierta en una
              historia de éxito.
            </p>

            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Explora ahora
            </button>

            <a
              href="https://api.whatsapp.com/send?phone=529842051122&text=Hola!!, necesito asistencia..."
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="ml-2 mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Contáctanos
              </button>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="rounded-custom"
              src="https://firebasestorage.googleapis.com/v0/b/next-js-ecommerse.appspot.com/o/ecommerce%2Fhero-image.jpeg-1698272013836-93ifbfobuo?alt=media&token=634c5043-ed14-4a1f-a0dc-365c80817b69&_gl=1*rruja7*_ga*MTMwNzg4Mzc3LjE2Nzc1NTE5MjA.*_ga_CW55HF8NVT*MTY5ODI3MjAxOS4xMC4xLjE2OTgyNzIwMjIuNTcuMC4w"
              alt="Explore Now"
            />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Novedades en Octubre
                  </h2>
                </div>
                <button
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Compra Ahora
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <li
                          onClick={() =>
                            router.push(`/product/${productItem._id}`)
                          }
                          className="cursor-pointer"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">
                              {productItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-800">
                              ${productItem.price}{" "}
                              <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
              Puedes encontrar
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/next-js-ecommerse.appspot.com/o/ecommerce%2Fconstruction-tools-home.jpg-1698274837235-iso103w6xj?alt=media&token=50643356-d056-4ca3-a269-e8f3ae094192&_gl=1*kmtl6c*_ga*MTMwNzg4Mzc3LjE2Nzc1NTE5MjA.*_ga_CW55HF8NVT*MTY5ODI3NDg0My4xMS4xLjE2OTgyNzQ4NTAuNTMuMC4w"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Construcción
                  </h3>
                  {/* <button
                    onClick={() => router.push("/product/listing/construction")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Compra Ahora
                  </button> */}
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/next-js-ecommerse.appspot.com/o/ecommerce%2Felectric-tools-home.jpg-1698275676555-soyikjm7ri?alt=media&token=fc47931d-ed47-43c4-9d5b-c0d2a9c520b8&_gl=1*zi92gr*_ga*MTMwNzg4Mzc3LjE2Nzc1NTE5MjA.*_ga_CW55HF8NVT*MTY5ODI3NDg0My4xMS4xLjE2OTgyNzU3MTEuMzAuMC4w"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Electricos</h3>
                  {/* <button
                    onClick={() => router.push("/product/listing/electric")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Compra Ahora
                  </button> */}
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/next-js-ecommerse.appspot.com/o/ecommerce%2Fmanual-tools-home.jpg-1698275788132-cmhtym6ct9?alt=media&token=00cae808-b99f-436d-ac17-d9193cab97bb&_gl=1*1s6n2bq*_ga*MTMwNzg4Mzc3LjE2Nzc1NTE5MjA.*_ga_CW55HF8NVT*MTY5ODI3NDg0My4xMS4xLjE2OTgyNzU3OTkuNTUuMC4w"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">Manuales</h3>
                  {/* <button
                    onClick={() => router.push("/product/listing/manuals")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Compra Ahora
                  </button> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
