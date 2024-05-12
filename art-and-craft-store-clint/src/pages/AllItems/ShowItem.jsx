import PropTypes from 'prop-types';
import { FcRating } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";

const ShowItem = ({ item,handleViewDetails }) => {
 
    const  {_id,item_name, image, price,rating} = item ;


    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className="h-56 w-[75%] rounded-xl" 
                src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{item_name}</h2>
                    <div className="flex justify-between px-4 my-1">
                        
                        <div className="flex items-center text-lg gap-2"> Price : {price} <GiPriceTag></GiPriceTag> </div>
                        <div className="flex items-center text-lg gap-2">Rating : {rating} <FcRating></FcRating>  </div>
                    </div>

                    <div className="card-actions ">
                        <button onClick={()=>handleViewDetails(_id)}  className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
ShowItem.propTypes = {
    item: PropTypes.object,
    handleViewDetails: PropTypes.func,
}
export default ShowItem;