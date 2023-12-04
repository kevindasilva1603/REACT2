import React, { useState, useEffect, useRef } from "react";

function Restaurants() {
    const [restaurants, setRestaurants] = useState([
        { id: 1, name: "Restaurant 1", isOpen: true },
        { id: 2, name: "Restaurant 2", isOpen: false },
        // Autres restaurants...
    ]);

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log("Un statut de restaurant a changé");
            // Autres actions à exécuter lors du changement de statut
        }
    }, [restaurants]);

    function toggleRestaurantStatus(id) {
        setRestaurants(
            restaurants.map((restaurant) =>
                restaurant.id === id
                    ? { ...restaurant, isOpen: !restaurant.isOpen }
                    : restaurant
            )
        );
    }

    return (
        <div>
            {restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.isOpen ? "Ouvert" : "Fermé"}</p>
                    <button
                        onClick={() => toggleRestaurantStatus(restaurant.id)}>
                        Changer l'état
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Restaurants;
