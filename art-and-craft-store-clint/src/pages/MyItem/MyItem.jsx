import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import swal from "sweetalert";
import DisplayViewItem from "./DisplayViewItem";

const MyItem = () => {
    const viewLoadData = useLoaderData()
    // const {setLoading } = useContext(AuthContext)
    const [items, setItems] = useState(viewLoadData)
    // setLoading(true)
    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover Art & Craft Item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://art-and-craft-store-server-henna.vercel.app/viewItems/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal(" Your art & craft item has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = items.filter(item => item._id !== _id);
                                setItems(remaining);
                            }
                        })
                }
            });
    }

    return (
        <div className="my-10">
            <h1 className="uppercase font-semibold">

                <Typewriter
                    words={['my art and craft item is ', ' here ...........']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000} />

            </h1>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {
                    items.map((viewitem, idx) =>
                        <DisplayViewItem
                            key={idx}
                            viewitem={viewitem}
                            handleDelete={handleDelete}>

                        </DisplayViewItem>)
                }
            </div>
        </div>
    );
};

export default MyItem;