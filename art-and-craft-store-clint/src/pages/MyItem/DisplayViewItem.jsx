import PropTypes from 'prop-types';
import { AiOutlineDelete } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const DisplayViewItem = ({ viewitem,handleDelete }) => {
    const navigate = useNavigate()
   
    const { _id, item_name, image, price, rating } = viewitem;

    const handleViewDetails = (id) => {
        navigate(`/all-items/details-page/${id}`)
    }



    const handleUpdate = (id) => {
        navigate(`/update-item/${id}`)

    }

    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img className="h-56 w-[75%] rounded-xl"
                    src={image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title  lg:text-xl font-bold">{item_name}</h2>
                    <div className="flex justify-between px-4 my-1">

                        <div className="flex items-center text-lg gap-2"> Price : {price} <GiPriceTag></GiPriceTag> </div>
                        <div className="flex items-center text-lg gap-2">Rating : {rating} <FcRating></FcRating>  </div>
                    </div>
                    <div className="card-actions text-center mx-auto">
                        <button onClick={() => handleViewDetails(_id)} className=" btn btn-link ">Show Details</button>
                    </div>

                    <div className='flex justify-between text-lg font-bold'>
                        <div onClick={() => handleDelete(_id)} className='flex gap-2 items-center btn-ghost btn'>delete : <AiOutlineDelete></AiOutlineDelete> </div>
                        <div onClick={() => handleUpdate(_id)} className='flex gap-2 items-center btn btn-ghost'>update : <MdOutlineTipsAndUpdates></MdOutlineTipsAndUpdates>  </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
DisplayViewItem.propTypes = {
    viewitem: PropTypes.object,
    handleDelete: PropTypes.func,
}
export default DisplayViewItem;