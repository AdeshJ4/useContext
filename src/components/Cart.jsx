import { useCart } from "../hooks/useCart";

const Cart = () => {

  const cart = useCart();


  const totalAmount = cart?.items?.reduce((accumulator, curEle) => accumulator + curEle.productPrice, 0);
  

  return (
    <div>
      <h1>Cart</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart?.items?.map((cartItem, index) => {
            return <tr key={index}>
              <td>{cartItem?.productName}</td>
              <td>{cartItem?.productPrice}</td>
            </tr>
          })}
        </tbody>
      </table>

      <h3>Total Bill: ${totalAmount}</h3>
    </div>
  )
}


export default Cart;