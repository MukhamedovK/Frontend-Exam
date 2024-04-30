import React, { useEffect, useState } from 'react';


const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setCards(data.products)
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const smallDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.substring(0, maxLength) + '...';
    };


    return (
        <div className='flex justify-center gap-10 items-start flex-wrap'>
            {cards.map((item, id) => (
                <div key={id} className="card card-compact w-96 h-96 bg-white shadow-xl">
                    <figure><img src={item.thumbnail} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">{item.title}</h2>
                        <p className='text-black'>Rating: <b>{item.rating}</b></p>
                        <p className='text-black'>{smallDescription(item.description, 100)}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards
