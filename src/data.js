import { v4 as uuidv4 } from 'uuid';
 

export const data = {
    fruits: [
        {
            id: uuidv4(),
            price: 5.00,
            name: "Pinkerton Avocado",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_360x.jpg?v=1565594363",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_360x.jpg?v=1565594363",
            sale: false,
            topRated:true,
            bestSelling: true,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "Red Pithaya",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_360x.jpg?v=1565594423",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_360x.jpg?v=1565594423",
            sale: true,
            topRated:true,
            bestSelling: true,
            onSale: false,
            salePercent:-25,
            saleCount:20.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Bananas",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_360x.jpg?v=1565594302",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_360x.jpg?v=1565594302",
            sale: false,
            topRated:false,
            bestSelling: true,
            onSale: true,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Fresh Strawberries",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-4_360x.jpg?v=1565591604",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-2_360x.jpg?v=1565591604",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-50,
            saleCount:20.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Organic Lemon",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio-1_360x.jpg?v=1565592743",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio_360x.jpg?v=1565592743",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-20,
            saleCount:25.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Annurca Apples",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/annurca-apples-igp-3_360x.jpg?v=1565591484",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/annurca-apples-igp_360x.jpg?v=1565591484",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "White Grape",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/seedless-white-grape-2_360x.jpg?v=1565591842",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/seedless-white-grape_360x.jpg?v=1565591842",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 8.00,
            name: "Pomegranate",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pomegranate_360x.jpg?v=1565591723",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pomegranate-3_360x.jpg?v=1565591723",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        
    ],
    vegatables: [
        {
            id: uuidv4(),
            price: 15.00,
            name: "Plum Tomato",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato_360x.jpg?v=1565592563",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato-3_360x.jpg?v=1565592563",
            sale: false,
            topRated:true,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        }, 
        {
            id: uuidv4(),
            price: 10.00,
            name: "Violet Cauliflower",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_360x.jpg?v=1565592922",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_360x.jpg?v=1565592922",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-34,
            saleCount:15.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Black Eggplants",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_360x.jpg?v=1565594063",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_360x.jpg?v=1565594063",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Orange Cauliflower",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower_360x.jpg?v=1565592622",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower-2_360x.jpg?v=1565592622",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Organic Almaverde",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/dark-green-organic-courgettes-almaverde-bio_360x.jpg?v=1565592683",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/dark-green-organic-courgettes-almaverde-bio-2_360x.jpg?v=1565592683",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Red Onion",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-organic-onion-almaverde-bio_360x.jpg?v=1565592863",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-organic-onion-almaverde-bio-3_360x.jpg?v=1565592863",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "Red Cabbage",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-red-cabbage-almaverde-bio_360x.jpg?v=1565592803",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-red-cabbage-almaverde-bio-3_360x.jpg?v=1565592803",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Chili Pepper",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chili-pepper-jalapeno-green-fresh-1_360x.jpg?v=1565592443",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chili-pepper-jalapeno-green-fresh_360x.jpg?v=1565592443",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        
    ],
    milks: [
        {
            id: uuidv4(),
            price: 10.00,
            name: "Peanut Butter",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/978a7499-ce93-4da0-a805-fb449a34e3be_360x.jpg?v=1565594242",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2cc67697-7856-4b5c-8f04-fe5cd3112e2b_360x.jpg?v=1565594242",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-17,
            saleCount:12.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Butter Pista",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_360x.jpg?v=1565594181",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_360x.jpg?v=1565594181",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: true,
            salePercent:-34,
            saleCount:10.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 8.00,
            name: "Basil Pesto",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a_360x.jpg?v=1565594123",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420_360x.jpg?v=1565594123",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: true,
            salePercent:-20,
            saleCount:10.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Sorbet Ice Cream",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/4b91a65d-ab47-4b8a-8c87-0dacd3eb7b19_360x.jpg?v=1565592383",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/952c5f3d-e89a-4146-8dae-5b904af6ad49_360x.jpg?v=1565592383",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-20,
            saleCount:15.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Ratto Milk",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/estratto-di-limone-insal-arte_360x.jpg?v=1565592322",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/estratto-di-limone-insal-arte-1_360x.jpg?v=1565592322",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Purea Lime",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime_360x.jpg?v=1565592262",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime-1_360x.jpg?v=1565592262",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-34,
            saleCount:18.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Pineapple Slices",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/b431fc16-4874-4b0d-8cfa-34b8e7977ed1_360x.jpg?v=1565592202",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/e94f6f87-244e-4443-8604-9cdbc7c24fd3_360x.jpg?v=1565592202",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-20,
            saleCount:25.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 16.00,
            name: "Pomegranate Juice",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/e09e4ce9-f6ed-45f9-96f9-f6513a415e56-1_360x.jpg?v=1565591783",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/40fc5300-42ac-4035-94e4-d4e5e46c9eac_360x.jpg?v=1565591783",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
    ],
    allProducts:[
        {
            id: 1,
            price: 15.00,
            name: "Plum Tomato",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato_360x.jpg?v=1565592563",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato-3_360x.jpg?v=1565592563",
            sale: false,
            topRated:true,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 2,
            price: 5.00,
            name: "Pinkerton Avocado",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_360x.jpg?v=1565594363",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_360x.jpg?v=1565594363",
            sale: false,
            topRated:true,
            bestSelling: true,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 3,
            price: 15.00,
            name: "Red Pithaya",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-4_360x.jpg?v=1565594423",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-pithaya-with-white-pulp-1_360x.jpg?v=1565594423",
            sale: true,
            topRated:true,
            bestSelling: true,
            onSale: false,
            salePercent:-25,
            saleCount:20.00,
            save: false,
        },
        {
            id: 4,
            price: 18.00,
            name: "Bananas",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chiquita-bananas_360x.jpg?v=1565594302",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_360x.jpg?v=1565594302",
            sale: false,
            topRated:false,
            bestSelling: true,
            onSale: true,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 5,
            price: 10.00,
            name: "Fresh Strawberries",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-4_360x.jpg?v=1565591604",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-strawberries-2_360x.jpg?v=1565591604",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-50,
            saleCount:20.00,
            save: false,
        },
        {
            id: 6,
            price: 10.00,
            name: "Violet Cauliflower",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower_360x.jpg?v=1565592922",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/violet-cauliflower-3_360x.jpg?v=1565592922",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-34,
            saleCount:15.00,
            save: false,
        },
        {
            id: 7,
            price: 12.00,
            name: "Black Eggplants",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants-1_360x.jpg?v=1565594063",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-round-black-eggplants_360x.jpg?v=1565594063",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 8,
            price: 20.00,
            name: "Organic Lemon",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio-1_360x.jpg?v=1565592743",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-organic-lemon-almaverde-bio_360x.jpg?v=1565592743",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-20,
            saleCount:25.00,
            save: false,
        },
        {
            id: 9,
            price: 10.00,
            name: "Peanut Butter",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/978a7499-ce93-4da0-a805-fb449a34e3be_360x.jpg?v=1565594242",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2cc67697-7856-4b5c-8f04-fe5cd3112e2b_360x.jpg?v=1565594242",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-17,
            saleCount:12.00,
            save: false,
        },
        {
            id: 10,
            price: 12.00,
            name: "Butter Pista",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_360x.jpg?v=1565594181",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/0030f6d1-cef5-4f5c-9ec4-e4d807b30267_360x.jpg?v=1565594181",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: true,
            salePercent:-34,
            saleCount:10.00,
            save: false,
        },
        {
            id: 11,
            price: 8.00,
            name: "Basil Pesto",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/be21e9bd-67b7-4e84-af0c-d43d4898d72a_360x.jpg?v=1565594123",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/2e0e87f2-4fdf-4ca7-912c-47e11eadd420_360x.jpg?v=1565594123",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: true,
            salePercent:-20,
            saleCount:10.00,
            save: false,
        },
        {
            id: 12,
            price: 10.00,
            name: "Orange Cauliflower",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower_360x.jpg?v=1565592622",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/orange-cauliflower-2_360x.jpg?v=1565592622",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 13,
            price: 12.00,
            name: "Sorbet Ice Cream",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/4b91a65d-ab47-4b8a-8c87-0dacd3eb7b19_360x.jpg?v=1565592383",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/952c5f3d-e89a-4146-8dae-5b904af6ad49_360x.jpg?v=1565592383",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-20,
            saleCount:15.00,
            save: false,
        },
        {
            id: 14,
            price: 18.00,
            name: "Organic Almaverde",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/dark-green-organic-courgettes-almaverde-bio_360x.jpg?v=1565592683",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/dark-green-organic-courgettes-almaverde-bio-2_360x.jpg?v=1565592683",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 15,
            price: 10.00,
            name: "Fresh Bergamot",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-bergamot-3_360x.jpg?v=1565592504",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/fresh-bergamot_360x.jpg?v=1565592504",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 16,
            price: 18.00,
            name: "Annurca Apples",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/annurca-apples-igp-3_360x.jpg?v=1565591484",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/annurca-apples-igp_360x.jpg?v=1565591484",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 17,
            price: 10.00,
            name: "Red Onion",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-organic-onion-almaverde-bio_360x.jpg?v=1565592863",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/red-organic-onion-almaverde-bio-3_360x.jpg?v=1565592863",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 18  ,
            price: 15.00,
            name: "Red Cabbage",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-red-cabbage-almaverde-bio_360x.jpg?v=1565592803",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-red-cabbage-almaverde-bio-3_360x.jpg?v=1565592803",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 19,
            price: 10.00,
            name: "Chili Pepper",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chili-pepper-jalapeno-green-fresh-1_360x.jpg?v=1565592443",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/chili-pepper-jalapeno-green-fresh_360x.jpg?v=1565592443",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 20,
            price: 16.00,
            name: "Navel Orange",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-navel-orange-almaverde-bio_360x.jpg?v=1565591662",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/organic-navel-orange-almaverde-bio-3_360x.jpg?v=1565591662",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-20,
            saleCount:20.00,
            save: false,
        },
        {
            id: 21,
            price: 20.00,
            name: "Ratto Milk",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/estratto-di-limone-insal-arte_360x.jpg?v=1565592322",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/estratto-di-limone-insal-arte-1_360x.jpg?v=1565592322",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 22,
            price: 15.00,
            name: "White Grape",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/seedless-white-grape-2_360x.jpg?v=1565591842",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/seedless-white-grape_360x.jpg?v=1565591842",
            sale: false,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:0,
            saleCount:0,
            save: false,
        },
        {
            id: 23,
            price: 12.00,
            name: "Purea Lime",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime_360x.jpg?v=1565592262",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/purea-di-lime-1_360x.jpg?v=1565592262",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-34,
            saleCount:18.00,
            save: false,
        },
        {
            id: 24,
            price: 20.00,
            name: "Pineapple Slices",
            img: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/b431fc16-4874-4b0d-8cfa-34b8e7977ed1_360x.jpg?v=1565592202",
            img2: "https://cdn.shopify.com/s/files/1/0085/5618/3637/products/e94f6f87-244e-4443-8604-9cdbc7c24fd3_360x.jpg?v=1565592202",
            sale: true,
            topRated:false,
            bestSelling: false,
            onSale: false,
            salePercent:-20,
            saleCount:25.00,
            save: false,
        },
    ]
}