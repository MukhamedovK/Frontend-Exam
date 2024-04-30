import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-4xl bg-slate-900 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
        <p className="text-gray-700 text-slate-300 leading-relaxed">
          Welcome to our product shop! We are passionate about providing high-quality products that enhance your everyday life. Whether you're looking for stylish clothing, trendy accessories, or innovative gadgets, we've got you covered.
        </p>
        <p className="text-gray-700 text-slate-300 leading-relaxed mt-4">
          Our mission is to curate a selection of products that not only meet your needs but also exceed your expectations. We carefully choose each item based on its quality, functionality, and style to ensure that you're getting the best value for your money.
        </p>
        <p className="text-gray-700 text-slate-300 leading-relaxed mt-4">
          At our product shop, customer satisfaction is our top priority. We strive to provide exceptional service and support to make your shopping experience enjoyable and hassle-free. If you have any questions or concerns, don't hesitate to reach out to our friendly team.
        </p>
      </div>
    </div>
  );
};

export default About;
