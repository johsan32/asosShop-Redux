import { useDispatch } from "react-redux"
import { AiOutlineDelete } from "react-icons/ai";


const FavoriteCard = ({item, state}) => {


const dispatch = useDispatch();

const handleDelete = () =>{
    dispatch({
        type: "DELETE_FAVORITE",
        payload: item.id,
    })
}
console.log(item, state);
  return (
    <tr>
    <td>
      <div className="d-flex align-items-center">
        <img
          src={`http://${item.imageUrl}`}
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3 w-75">
          <p className="fw-thin mb-1 text-wrap text-center ">{item.name}</p>
          <div className="d-flex align-items-center justify-content-around">
            <p className="text-muted mb-0">Brand: {item.brandName}</p>
            <p className="text-capitalize text-muted mb-0">{item.colour.toLowerCase()}</p>
            <p className="fw-medium fs-6 text-info mb-0"> {item.price.current.text} </p>
          </div>
        </div>
      </div>
    </td>
    <td>
<div>
    <p className="text-center">{item.date}</p>
</div>
    </td>
    <td>
      <div className="d-flex align-items-center justify-content-center">
        <button type="button" 
        onClick={handleDelete}
        className="btn bg-danger text-white btn-rounded p-2">
          <AiOutlineDelete className="fs-5" />
        </button>
      </div>
    </td>
  </tr>
  )
}

export default FavoriteCard
