const breakfast = {
    status: "success",
    items: [
        {
            "id": "",
            "name": "Café con leche",
            "description": "Bebida caliente que combina café y leche",
            "price": "2.50",
            "stock": "20",
            "category": "bebida"
        },
        {
            "id": "",
            "name": "Tostadas",
            "description": "Pan tostado servido con mantequilla y mermelada",
            "price": "1.75",
            "stock": "15",
            "category": "repostería"
        },
        {
            "id": "",
            "name": "Croissant de jamón y queso",
            "description": "Delicioso croissant relleno de jamón y queso",
            "price": "2.25",
            "stock": "10",
            "category": "repostería"
        },
        {
            "id": "",
            "name": "Zumo de naranja",
            "description": "Refrescante zumo natural de naranja",
            "price": "2.00",
            "stock": "18",
            "category": "bebida"
        },
        {
            "id": "",
            "name": "Bocadillo mixto",
            "description": "Bocadillo de jamón y queso",
            "price": "3.00",
            "stock": "12",
            "category": "sándwich"
        },
        {
            "id": "",
            "name": "Magdalena",
            "description": "Clásica magdalena esponjosa",
            "price": "1.50",
            "stock": "8",
            "category": "repostería"
        },
        {
            "id": "",
            "name": "Café americano",
            "description": "Café negro muy suave",
            "price": "2.25",
            "stock": "20",
            "category": "bebida"
        },
        {
            "id": "",
            "name": "Cruasán de chocolate",
            "description": "Cruasán relleno de deliciosa crema de chocolate",
            "price": "2.50",
            "stock": "10",
            "category": "repostería"
        },
        {
            "id": "",
            "name": "Té verde",
            "description": "Infusión de té verde",
            "price": "2.00",
            "stock": "15",
            "category": "bebida"
        },
        {
            "id": "",
            "name": "Sándwich mixto",
            "description": "Sándwich de jamón y queso",
            "price": "3.50",
            "stock": "10",
            "category": "sándwich"
        }
    ]
};

// Iterar sobre los items y asignar un valor incremental a la propiedad "id"
for (let i = 0; i < breakfast.items.length; i++) {
    breakfast.items[i].id = (i + 1).toString();
}

console.log(breakfast);
