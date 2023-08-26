import { useDispatch } from "react-redux";
import { minusAmount, plusAmount } from "../redux/actions/productActions";

const BasketProduct = ({item}) => {
  
const dispatch = useDispatch()


 
  return (
    <div className="d-flex gap-4 justify-content-between p-4 shadow my-5">
      <div className="d-flex align-items-center gap-5">
        <img
          className="rounded"
          style={{ height: '50px', width: '50px' }}
          src={`http://${item.imageUrl}`}
        />
        <h4>{item.name.slice(0, 20) + '...'}</h4>
        <h4 className="text-success">{item.price.current.text}</h4>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <h6 className="text-nowrap">Miktar: {item.amount}</h6>
        <button 
         onClick={() => dispatch(minusAmount(item))}
        className="btn btn-danger">-</button>
        <button
          onClick={() => dispatch(plusAmount(item))}
          className="btn btn-success"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default BasketProduct;
