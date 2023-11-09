export const navOptions = [
  {
    id: "home",
    label: "Inicio",
    path: "/",
  },
  {
    id: "listing",
    label: "Productos",
    path: "/product/listing/all-products",
  },
  // {
  //   id: "listingManuals",
  //   label: "Manuales",
  //   path: "/product/listing/manuals",
  // },
  // {
  //   id: "listingElectric",
  //   label: "Electricos",
  //   path: "/product/listing/electric",
  // },
  // {
  //   id: "listingConstruction",
  //   label: "Construcción",
  //   path: "/product/listing/construction",
  // },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Administrar Productos",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Añadir Producto",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Ingresar nombre",
    label: "Nombre",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Ingresar email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Ingresar contraseña",
    label: "Contraseña",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Rol",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Administrador",
      },
      {
        id: "customer",
        label: "Cliente",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Ingresar email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Ingresar contraseña",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Ingresar nombre",
    label: "Nombre",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Ingresar precio",
    label: "Precio",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Ingresar descripción",
    label: "Descripción",
    componentType: "input",
  },
  // {
  //   id: "category",
  //   type: "",
  //   placeholder: "",
  //   label: "Categoria",
  //   componentType: "select",
  //   options: [
  //     {
  //       id: "manuals",
  //       label: "Manuales",
  //     },
  //     {
  //       id: "electric",
  //       label: "Electricos",
  //     },
  //     {
  //       id: "construction",
  //       label: "Construcción",
  //     },
  //   ],
  // },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Ingresar información de entrega",
    label: "Información de entrega",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "En venta",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Si",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Ingresar porcentaje de descuento",
    label: "Descuento",
    componentType: "input",
  },
];

export const AvailableSizes = [
  // {
  //   id: "s",
  //   label: "P",
  // },
  // {
  //   id: "m",
  //   label: "M",
  // },
  // {
  //   id: "l",
  //   label: "G",
  // },
];

export const firebaseConfig = {
  apiKey: "AIzaSyAZUTM7C-I5uotO5wZU6scN1coJ1lcQyHo",
  authDomain: "next-js-ecommerse.firebaseapp.com",
  projectId: "next-js-ecommerse",
  storageBucket: "next-js-ecommerse.appspot.com",
  messagingSenderId: "995070946886",
  appId: "1:995070946886:web:0a540f208de6e561f06447",
  measurementId: "G-VJHBY6YB1M",
};

export const firebaseStroageURL = "gs://next-js-ecommerse.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Ingresar nombre completo",
    label: "Nombre completo",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Ingresar dirección",
    label: "Dirección",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Ingresar ciudad",
    label: "Ciudad",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Ingresar pais",
    label: "Pais",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Ingresar codigo postal",
    label: "Codigo postal",
    componentType: "input",
  },
];
