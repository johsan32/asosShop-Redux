import { useSelector } from "react-redux";
import EmptyFavorite from "../components/EmptyFavorite";
import FavoriteCard from "../components/FavoriteCard";


const FavoritePage= () => {
  const state = useSelector((store) => store.favoriteState);
  console.log("favorite, ", state);

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-between">
      {state.favorite.length === 0 && <EmptyFavorite />}
        <div className="col-md-12">     
          {state.favorite.length > 0 && (
            
            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light text-center">
                <tr>
                  <th>Name</th>
                  <th>Add To Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state.favorite.map((item) => (
                  <FavoriteCard key={item.id} item={item} state={state} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
