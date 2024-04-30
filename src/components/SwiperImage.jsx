import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SwiperImage = () => {
  const [filterCards, setFilterCards] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setFilterCards(data.products.filter(obj => obj['rating'] >= 4.9))
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="bg-white w-[80%] rounded-[30px]"
    >
      {filterCards.map((item, id) => (
        <SwiperSlide key={id}>
          <div className="swiper-slide-content relative bg-gray-100 rounded-lg shadow-lg">
            <img className="w-auto h-[500px] m-auto" src={item.thumbnail} alt={item.title} />
            <div className="absolute bottom-0 top-0 right-0 left-0 p-4 bg-black bg-opacity-50">
              <div className='text-center pt-[28%] text-white'>
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
                <p className="text-sm pt-1">Price: ${item.price}</p>
                <p className="text-sm pt-1">Rating: {item.rating}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperImage

