import { useCart } from "../hooks/useCart";

const Item = ({ productName, productPrice }) => {

  const cart = useCart();

  const handleAddCartEvent = () => {
    cart?.setItems((prevState) => [...prevState, { productName, productPrice }]);
  }


  return (
    <div className="box">
      <h3>Name: {productName}</h3>
      <h3>Price: {productPrice}</h3>
      <button onClick={handleAddCartEvent}>Add to cart</button>
    </div>
  )
}


export default Item;