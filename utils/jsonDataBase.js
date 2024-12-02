const menuListings = {
  entradas: {
    menuId: 1,
    type: "entrada",
    categoryIcon: "🍟",
    title: "Entradas",
    // description: "description goes here",
    prompts: [
      {
        feature: "variants",
        verbose: false,
        message:
          "Explora Nuestra Exquisita Variedad de Entradas 🍴🍔🥓\n\n🍟 Elige tus favoritas:\n",
      },
    ],
    features: ["variants"],
    variants: [
      {
        variantId: 1100,
        feature: "Papas Fritas",
        featureIcon: "🍟",
        title: "Papas Fritas",
        // description: "description goes here",
        // images: ["domain.com/1100.jpg"],
        servings: "portion",
        price: 2.5,
      },
      {
        variantId: 1101,
        feature: "Aros de Cebolla",
        featureIcon: "🧅",
        title: "Aros de Cebolla",
        // description: "description goes here",
        // images: ["domain.com/1101.jpg"],
        servings: "portion",
        price: 2,
      },
      {
        variantId: 1102,
        feature: "Dedos de Mozzarella",
        featureIcon: "🧀",
        title: "Dedos de Mozzarella",
        // description: "description goes here",
        // images: ["domain.com/1102.jpg"],
        servings: "portion",
        price: 3.5,
      },
      {
        variantId: 1103,
        feature: "Alitas de Pollo",
        featureIcon: "🍗",
        title: "Alitas de Pollo",
        // description: "description goes here",
        // images: ["domain.com/1103.jpg"],
        servings: "portion",
        price: 4,
      },
    ],
  },
  hamburguesas: {
    menuId: 2,
    type: "hamburguesa",
    categoryIcon: "🍔",
    title: "Menu de Hamburguesas",
    // description: "description goes here",
    prompts: [
      {
        feature: "variants",
        verbose: false,
        message:
          "Explora Nuestra Deliciosa Variedad de Sandwiches  🥪🥪🥪\n\n🍔 Elige tu favorito:\n",
      },
    ],
    features: ["variants"],
    variants: [
      {
        variantId: 2100,
        feature: "Classic Beef Bliss",
        featureIcon: "🍔",
        title: "Classic Beef Bliss",
        // description: "description goes here",
        // images: ["domain.com/2100.jpg"],
        servings: "portion",
        price: 5,
      },
      {
        variantId: 2101,
        feature: "Double Trouble",
        featureIcon: "🍔",
        title: "Double Trouble",
        // description: "description goes here",
        // images: ["domain.com/2101.jpg"],
        servings: "portion",
        price: 7,
      },
      {
        variantId: 2102,
        feature: "Sizzling Delight",
        featureIcon: "🍔",
        title: "Sizzling Delight",
        // description: "description goes here",
        // images: ["domain.com/2102.jpg"],
        servings: "portion",
        price: 7,
      },
      {
        variantId: 2103,
        feature: "The Chicken Duo",
        featureIcon: "🍔",
        title: "The Chicken Duo",
        // description: "description goes here",
        // images: ["domain.com/2103.jpg"],
        servings: "portion",
        price: 6,
      },
    ],
  },
  bebidas: {
    menuId: 4,
    type: "bebida",
    categoryIcon: "🥤",
    title: "Bebidas",
    // description: "description goes here",
    features: ["category", "variants"],
    prompts: [
      {
        feature: "category",
        verbose: false, //if true, will display the description of the variant (to be implemented)
        message:
          "🥤 Descubre Nuestra Refrescante Selección de Bebidas 🥤🍹🍺\n\n🥤 Selecciona tu preferida:\n",
      },
      {
        feature: "variants",
        message: "🥤 ¿Qué opción te gustaría?\n",
      },
    ],
    category: [
      {
        feature: "Refresco de lata",
        title: "Refresco de lata",
        featureIcon: "🥤",
        // description: "description goes here",
        variants: [
          {
            variantId: 4300,
            feature: "Pepsi",
            featureIcon: "🥤",
            // images: ["domain.com/4300.jpg"],
            price: 2.5,
          },
          {
            variantId: 4301,
            feature: "7up",
            featureIcon: "🥤",
            // images: ["domain.com/4301.jpg"],
            price: 2.5,
          },
          {
            variantId: 4302,
            feature: "Golden",
            featureIcon: "🥤",
            // images: ["domain.com/4302.jpg"],
            price: 2.5,
          },
        ],
      },
      {
        feature: "Refresco de 1.5 litros",
        title: "Refresco de 1.5 litros",
        featureIcon: "🥤",
        // description: "description goes here",
        variants: [
          {
            variantId: 4200,
            feature: "Pepsi",
            featureIcon: "🥤",
            // images: ["domain.com/4200.jpg"],
            price: 3.5,
          },
          {
            variantId: 4201,
            feature: "7up",
            featureIcon: "🥤",
            // images: ["domain.com/4201.jpg"],
            price: 3.5,
          },
          {
            variantId: 4202,
            feature: "Golden",
            featureIcon: "🥤",
            // images: ["domain.com/4202.jpg"],
            price: 3.5,
          },
        ],
      },
      {
        feature: "Refresco de 2 litros",
        title: "Refresco de 2 litros",
        featureIcon: "🥤",
        // description: "description goes here",
        variants: [
          {
            variantId: 4100,
            feature: "Pepsi",
            featureIcon: "🥤",
            // images: ["domain.com/4100.jpg"],
            price: 4.5,
          },
          {
            variantId: 4101,
            feature: "7up",
            featureIcon: "🥤",
            // images: ["domain.com/4101.jpg"],
            price: 4.5,
          },
          {
            variantId: 4102,
            feature: "Golden",
            featureIcon: "🥤",
            // images: ["domain.com/4102.jpg"],
            price: 4.5,
          },
        ],
      },

      {
        feature: "Agua Mineral",
        title: "Agua Mineral",
        featureIcon: "🥤",
        // description: "description goes here",
        variants: [
          {
            variantId: 4400,
            feature: "Minalba",
            featureIcon: "💧",
            // images: ["domain.com/4400.jpg"],
            price: 1.5,
          },
          {
            variantId: 4401,
            feature: "Sparkling",
            featureIcon: "💧",
            // images: ["domain.com/4401.jpg"],
            price: 3.5,
          },
        ],
      },
      {
        feature: "Té Lipton",
        title: "Té Lipton",
        featureIcon: "🧃",
        // description: "description goes here",
        variants: [
          {
            variantId: 4500,
            feature: "Té Lipton Durazno",
            featureIcon: "🍑",
            // images: ["domain.com/4500.jpg"],
            price: 3.5,
          },
          {
            variantId: 4501,
            feature: "Té Lipton Limón",
            featureIcon: "🍋",
            // images: ["domain.com/4501.jpg"],
            price: 3.5,
          },
        ],
      },
      {
        feature: "Jugo Yukery",
        title: "Jugo Yukery",
        featureIcon: "🧃",
        // description: "description goes here",
        variants: [
          {
            variantId: 4600,
            feature: "Jugo Yukery Durazno",
            featureIcon: "🍑",
            // images: ["domain.com/4600.jpg"],
            price: 3,
          },
          {
            variantId: 4601,
            feature: "Jugo Yukery Naraja",
            featureIcon: "🍊",
            // images: ["domain.com/4601.jpg"],
            price: 3,
          },
        ],
      },
    ],
  },
  extras: {
    menuId: 3,
    type: "extra",
    categoryIcon: "🌟",
    title: "Extras y salsas",
    // description: "description goes here",
    prompts: [
      {
        feature: "variants",
        verbose: false,
        message:
          "Descubre Nuestra Variedad de Deliciosos Complementos 🍔🥓🍔\n\n🍟 Selecciona tus favoritos:\n",
      },
    ],
    features: ["variants"],
    variants: [
      {
        feature: "Salsa",
        // featureIcon: "🔥",
        featureIcon: "🧴",
        // featureIcon: "🍽️",
        title: "Salsa",
        prompts: [
          {
            feature: "options",
            verbose: false,
            message:
              "Explora Nuestro Surtido de Salsas 🧴🍯🥫\n\n🌟 Elige tu salsa favorita:\n",
          },
        ],
        features: ["options"],
        options: [
          {
            variantId: 3100,
            feature: "Salsa Ahumada BBQ",
            featureIcon: "🍖",
            // description: "description goes here",
            // images: ["domain.com/3100.jpg"],
            servings: "portion",
            price: 1,
          },
          {
            variantId: 3101,
            feature: "Ranchera Creamy",
            featureIcon: "🥗",
            // description: "description goes here",
            // images: ["domain.com/3101.jpg"],
            servings: "portion",
            price: 1,
          },
          {
            variantId: 3102,
            feature: "Mostaza Dorada y Miel",
            featureIcon: "🍯",
            // description: "description goes here",
            // images: ["domain.com/3102.jpg"],
            servings: "portion",
            price: 1,
          },
          {
            variantId: 3103,
            feature: "Champiñones Mágicos",
            featureIcon: "🍄",
            description: "description goes here",
            // images: ["domain.com/3103.jpg"],
            servings: "portion",
            price: 1,
          },
        ],
      },
      {
        variantId: 3200,
        feature: "Pepinillo",
        featureIcon: "🥒",
        title: "Pepinillo",
        // description: "description goes here",
        // images: ["domain.com/3200.jpg"],
        servings: "portion",
        price: 0.5,
      },
      {
        variantId: 3201,
        feature: "Tocineta",
        featureIcon: "🥓",
        title: "Tocineta",
        // description: "description goes here",
        // images: ["domain.com/3201.jpg"],
        servings: "portion",
        price: 1,
      },
      {
        variantId: 3202,
        feature: "Huevo Frito",
        featureIcon: "🍳",
        title: "Huevo Frito",
        // description: "description goes here",
        // images: ["domain.com/3202.jpg"],
        servings: "portion",
        price: 1,
      },
      {
        variantId: 3203,
        feature: "Queso Fundido",
        featureIcon: "🧀",
        title: "Queso Fundido",
        // description: "description goes here",
        // images: ["domain.com/3203.jpg"],
        servings: "portion",
        price: 1,
      },
    ],
  },
  especial: {
    menuId: 4,
    type: "especial",
    // categoryIcon: "🌟",
    categoryIcon: "🍔",
    title: "Especial",
    // description: "description goes here",
    prompts: [
      {
        feature: "variants",
        verbose: false,
        // message:
        //   "🌟 ¡Te presentamos la Hamburguesa de la Semana! 🍔\n\n¿Listo para una explosión de sabor? 🤤 Nuestra *Beef Extravaganza* de esta semana está rellena de jugosa carne de primera calidad y un centro derretido de queso fundido. 🧀🍔\n\nCada mordisco es una fiesta de sabores que te hará querer más. ¡No querrás perderte esta delicia exclusiva, ven y pruébala hoy mismo!  😋🍔\n\n¡Satisfacción garantizada en cada bocado! ¡Te esperamos!\n\n✨ ¿Preparado para saborearla?\n├1️⃣ ¡Sí, la quiero ahora! 🍔🤩\n└2️⃣ Volver atrás",
        // message:
        //   "🌟 ¡Te presentamos la Hamburguesa de la Semana! 🍔\n\n¿Listo para una explosión de sabor?, 🤤 Nuestra *Beef Extravaganza* está rellena de jugosa carne de primera calidad y un centro derretido de queso fundido. 🧀🍔\n\nCada mordisco es una fiesta de sabores que te hará querer más. ¡No querrás perderte esta delicia exclusiva, ven y pruébala hoy mismo!  😋🍔\n\n¡Satisfacción garantizada en cada bocado!\n\n✨ ¿Preparado para saborearla?\n",
        // message:
        //   "🌟 ¡Te presentamos la Hamburguesa de la Semana! 🍔\n\n¿Listo para una explosión de sabor?, 🤤 Nuestra *Beef Extravaganza* está rellena de jugosa carne de primera calidad y un centro derretido de queso fundido. 🧀🍔\n\n¡Satisfacción garantizada en cada bocado! ✨\n\n😋 ¿Preparado para saborearla?\n├1️⃣ ¡Sí, la quiero ahora! 🍔🤩\n└2️⃣ Volver atrás",
        // message:
        //   "🌟 Hamburguesa del Momento 🍔\n\n¿Listo para una explosión de sabor?, 🤤 Nuestra *Beef Extravaganza* está rellena de jugosa carne de primera calidad y un centro derretido de queso fundido. 🧀🍔\n\n😋 ¿Preparado para saborearla?\n├1️⃣ ¡Sí, la quiero ahora! 🍔🤩\n└2️⃣ Volver atrás",
        message:
          "🌟 Hamburguesa del Momento 🍔\n\n*Beef Extravaganza*: ¡Una explosión de sabor!\n\n😋 ¿Deseas deleitarte?\n├1️⃣ ¡Sí, la quiero ahora! 🍔🤩\n└2️⃣ Volver atrás",
      },
    ],
    features: ["variants"],
    variants: [
      {
        variantId: 4100,
        feature: "Beef Extravaganza",
        // feature: "¡Sí, la quiero ahora! 🍔🤩",
        featureIcon: "🍔",
        // title: "¡Sí, la quiero ahora! 🍔🤩",
        title: "Beef Extravaganza",
        // description: "description goes here",
        // images: ["domain.com/2103.jpg"],
        servings: "portion",
        price: 8,
      },
    ],
  },
  // deals: {
  //   menuId: 5,
  //   type: "deal",
  //   categoryIcon: "🎉",
  //   title: "Deals",
  //   description: "Deals for every taste and occasion.",
  //   prompt_message:
  //     "Savor Savings and Delectable Deals!💸\n\n🎉 Grab Deals Now! \n├1️⃣ COMBO 2 PLUS 2\n│\tChoose your 2 Large Pizzas & 2 Sides\n│\t➩\t$27.95\tPick Up 🏃\n│\t➩\t$33.95\tDelivered 🛵\n├2️⃣ COMBO 3 PLUS 3\n│\tChoose your 3 Large Pizzas & 3 Sides\n│\t➩\t$36.95\tPick Up 🏃\n│\t➩\t$39.95\tDelivered 🛵\n├3️⃣ COMBO 4 PLUS 4\n│\tChoose your 4 Large Pizzas & 4 Sides\n│\t➩\t$47.95 \tPick Up 🏃\n│\t➩\t$51.95\tDelivered 🛵\n└4️⃣ Go Back",
  //   prompts: [
  //     {
  //       feature: "variants",
  //       verbose: false,
  //       message:
  //         "Savor Savings and Delectable Deals!💸\n\n🎉 Grab Deals Now! \n",
  //     },
  //   ],
  //   features: ["variants"],
  //   variants: [
  //     {
  //       variantId: 5100,
  //       feature: "Ultimate Feast", //2 PLUS 2: two Large Pizzas & two Sides
  //       featureIcon: "🎉",
  //       title: "Ultimate Feast",
  //       description: "Choose your 2 Large Pizzas & 2 Sides",
  //       images: ["domain.com/5100.jpg"],
  //       type: {
  //         handle: "fixed-price", //discount-percentage, fixed-price
  //         value: 34.99,
  //       },
  //       products: [
  //         {
  //           // menu_id: 2,
  //           menuCategory: "pizzas",
  //           quantity: 2,
  //           servings: ["Large"], //all servings allowed to choose from
  //           toppings: ["Pepperoni", "Supreme", "Hawaiian", "Veggie"], //all toppings allowed to choose from
  //         },
  //         {
  //           // menu_id: 1,
  //           menuCategory: "sides",
  //           quantity: 2,
  //           variants: ["Garlic Bread", "Spud Bites", "Hot Chips"], //all variants to choose from
  //         },
  //       ],
  //     },
  //     {
  //       variantId: 5101,
  //       feature: "Family Fiesta", //3 PLUS 3: three Large Pizzas & three Sides
  //       featureIcon: "🎉",
  //       title: "Family Fiesta",
  //       description: "Choose your 3 Large Pizzas & 3 Sides",
  //       images: ["domain.com/5101.jpg"],
  //       type: {
  //         handle: "fixed-price",
  //         value: 49.99,
  //       },
  //       products: [
  //         {
  //           // menu_id: 2,
  //           menuCategory: "pizzas",
  //           quantity: 3,
  //           servings: ["Large"], //all servings allowed to choose from
  //           toppings: ["Pepperoni", "Supreme", "Hawaiian", "Veggie"], //all toppings allowed to choose from
  //         },
  //         {
  //           // menu_id: 1,
  //           menuCategory: "sides",
  //           quantity: 3,
  //           variants: ["Garlic Bread", "Spud Bites", "Hot Chips"], //all variants to choose from
  //         },
  //       ],
  //     },
  //     {
  //       variantId: 5102,
  //       feature: "Group Share", //4 PLUS 4: four Large Pizzas & four Sides
  //       featureIcon: "🎉",
  //       title: "Group Share",
  //       description: "Choose your 4 Large Pizzas & 4 Sides",
  //       images: ["domain.com/5102.jpg"],
  //       type: {
  //         handle: "fixed-price",
  //         value: 64.99,
  //       },
  //       products: [
  //         {
  //           // menu_id: 2,
  //           menuCategory: "pizzas",
  //           quantity: 4,
  //           servings: ["Large"], //all servings allowed to choose from
  //           toppings: ["Pepperoni", "Supreme", "Hawaiian", "Veggie"], //all toppings allowed to choose from
  //         },
  //         {
  //           // menu_id: 1,
  //           menuCategory: "sides",
  //           quantity: 4,
  //           variants: ["Garlic Bread", "Spud Bites", "Hot Chips"], //all variants to choose from
  //         },
  //       ],
  //     },
  //   ],
  // },
};

const fetchMenuListings = () =>
  new Promise((resolve) => setTimeout(() => resolve(menuListings), 1000));

module.exports = { fetchMenuListings };
