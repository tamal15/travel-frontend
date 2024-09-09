import { useState, useEffect } from 'react';

const GetCard = () => {
  const [cards, setCards] = useState([]);

  // Fetch data using useEffect
  useEffect(() => {
    fetch(`${import.meta.env.VITE_server}/getproduct`)
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

    

  return (
    <div className="flex flex-wrap justify-center p-4">
      {cards.map((card) => (
        <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* <img className="w-full h-48 object-cover" src={card.imageUrl} alt={card.title} /> */}
          <div className="px-20 py-20">
            <div className="font-bold text-xl mb-2">{card.name}</div>
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetCard;
