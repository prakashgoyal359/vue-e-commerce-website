import Vuex from 'vuex'

export const store = new Vuex.Store({
    state:{
        products: [
            {
                id: 1,
                image: "https://assets2.razerzone.com/images/pnx.assets/d8ab14a41acd4e40358a56a3bd0df4c1/base-station-v2-chroma.jpg",
                title: "Razer BlackShark V2 - Wired Gaming On Ear Headset Special Edition",
                price: "₹9,123",
            },
            {
                id: 2,
                image: "https://assets2.razerzone.com/images/pnx.assets/21c7f663fd0f53f5fdda9ba662c8858c/razer-blackwidow-v3-category-500x500.jpg",
                title: "Razer BlackWidow V3 Tenkeyless - Mechanical Wired Gaming Keyboard",
                price: "₹6,658",
            },
            {
                id: 3,
                image: "https://media.wired.com/photos/5bc67212a8af293117556237/1:1/w_1800,h_1800,c_limit/razerblade.jpg",
                title: "Razer Blade 15 Advanced Gaming Laptop 2021, Windows 10 Home,Intel Core i7-11800H 8-Core",
                price: "₹3,41,907",
            },
            {
                id: 4,
                image: "https://assets2.razerzone.com/images/pnx.assets/d73c60f517b403e2ff5d96e0a3aedab0/razer-seiren-v2-pro_500x500.jpg",
                title: "Razer Seiren Mini - Ultra-Compact Condenser Microphone",
                price: "₹4,335",
            },
            {
                id: 5,
                image: "https://accenthub.com.ph/wp-content/uploads/2022/06/Razer-DeathAdder-V2-Wired-Gaming-Mouse-With-Best-in-class-Ergonomics-5.jpg",
                title: "Razer Naga V2 Pro Wireless Gaming Mouse",
                price: "₹16,999",
            },
            {
                id: 6,
                image: "https://computerspace.in/cdn/shop/products/854455.jpg?v=1629052747&width=1445",
                title: "Razer Nommo Chroma 2.0 Gaming Spkrs",
                price: "₹33,413",
            },
        ]
    }
})