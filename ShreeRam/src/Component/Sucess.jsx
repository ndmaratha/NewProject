// Success.js

import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-indigo-700 text-white">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-purple-600">Order Placed Successfully!</h2>
        <p className="text-gray-700 mb-8">Thank you for choosing our services.</p>
        <button
          onClick={goToHome}
          className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
