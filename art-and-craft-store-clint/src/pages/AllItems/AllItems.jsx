import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import ShowItem from "./ShowItem";


const AllItems = () => {
    const loaderItems = useLoaderData()
    const navigate = useNavigate()
    const [viewItems, setViewItems] = useState([])

    useEffect(()=>{
        fetch('https://art-and-craft-store-server-henna.vercel.app/viewItems')
        .then(res=>res.json())
        .then(data => setViewItems(data))
    },[])

    // console.log(viewItems)

    const handleViewDetails = (id) => {
        const targetItem = loaderItems.find(item => item?._id === id)
        const alreadyExists = viewItems.find(item => item?._id === targetItem?._id )
        // console.log('check', alreadyExists)
        if( !alreadyExists){   
            fetch('https://art-and-craft-store-server-henna.vercel.app/viewItems', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(targetItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        navigate(`/all-items/details-page/${id}`)
                    }
                })
            }else{
                navigate(`/all-items/details-page/${id}`)

            }

    }
    

    return (
        <div className="my-10">
            <h1 className=" mt-5 text-4xl font-bold ml-16">
            <Typewriter
            words={['All Art & Craft Items ', 'are here .......']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
                 </h1>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                {
                    loaderItems.map((item, idx) => <ShowItem key={idx}
                        item={item}
                        handleViewDetails={handleViewDetails} > </ShowItem>)
                }
            </div>

        </div>
    );
};

export default AllItems;