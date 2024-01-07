import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../Redux/CartSlice";

const useCart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Assuming fetchCartData is an asynchronous action
        await dispatch(fetchCartData());
      } catch (error) {
        // Handle errors if necessary
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCart();
  }, []);

  // You can return any values or functions related to the cart if needed
  // For example, you might return the cart data, actions, or selectors.

  // For now, let's return an empty object.
  return {};
};

export default useCart;
