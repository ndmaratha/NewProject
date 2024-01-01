import React from 'react';

const ProductCard = ({ data }) => {
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<HalfStarIcon key="half" />);
    }

    return stars;
  };

  const StarIcon = () => (
    <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20">
      <path d="M10 2l1.9 5.8h6.1L12 12l1.9 5.8H11L10 18l-1.9-5.7H2.9L4 12l-1.9-4.2h6.1L10 2z" />
    </svg>
  );

 const HalfStarIcon = () => (
  <svg className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20">
    <path d="M10 2v16l1.9-5.8h6.1L12 12l1.9-5.8H11L10 2z" />
  </svg>
);

  return (
    <>
      <div className="ProductCard p-4 border border-gray-300 rounded-md">
        <img className="img w-full h-40 object-cover rounded-md mb-4" src={data?.thumbnail} alt="Image" />
        <div className="title text-lg font-semibold mb-2">{data?.title}</div>
        <div className="desc text-gray-600 mb-2">{data?.description}</div>
        <div className="flex items-center mb-2">
          {renderStarRating(data?.rating)}
          <div className="ml-2">{data?.rating} Star</div>
        </div>
        <div className="price text-xl font-bold mb-2">${data?.price}</div>
      </div>
    </>
  );
};

export default ProductCard;
