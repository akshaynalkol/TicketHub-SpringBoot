import React from "react";
import nachosImg from "../../assets/images/nachos.jpg";
import cokeImg from "../../assets/images/coke.jpg";
import masalaCokeImg from "../../assets/images/masala-coke.jpg";
import popcornImg from "../../assets/images/popcorn.jpg";
import saltedPopcornImg from "../../assets/images/salted-popcorn.jpg";
import nachosComboImg from "../../assets/images/nachos-combo.jpg";
import samosa from "../../assets/images/samosa.jpg";
import kachori from "../../assets/images/kachori.jpg";
import puff from "../../assets/images/puff.jpg";
import tea from "../../assets/images/tea.jpg";
import coffee from "../../assets/images/coffee.jpg";

const foodItems = [
    { id: 1, name: "Nachos", price: 300, image: nachosImg },
    { id: 2, name: "Coke 500ml", price: 250, image: cokeImg },
    { id: 3, name: "Masala Coke 500ml", price: 250, image: masalaCokeImg },
    { id: 4, name: "Cheese Popcorn", price: 300, image: popcornImg },
    { id: 5, name: "Salted Popcorn", price: 300, image: saltedPopcornImg },
    { id: 6, name: "Stuffed Samosa", price: 150, image: samosa },
    { id: 7, name: "Onion Kachori", price: 150, image: kachori },
    { id: 8, name: "Veg Puff", price: 200, image: puff },
    { id: 9, name: "Tea", price: 75, image: tea },
    { id: 10, name: "Coffee", price: 100, image: coffee },
];

const Beverages = ({ updateTotal, addSelectedItem }) => {
    const handleAdd = (item) => {
        updateTotal(item.price);
        addSelectedItem(item);
    };

    return (
        <div className="row justify-content-center gy-3">
            {foodItems.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-6">
                    <div className="card">
                        <img src={item.image} alt={item.name} className="w-auto" height={180} />
                        <div className="card-body text-center">
                            <h4>{item.name}</h4>
                            <p className="mb-2">₹{item.price}</p>
                            <button className="btn btn-danger" onClick={() => handleAdd(item)}>Add</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Beverages;
