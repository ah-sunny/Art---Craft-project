import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {
    const loadedViewItem = useLoaderData()

    const  {item_name, subcategory_Name, image, short_description,price,rating,processing_time,customization} = loadedViewItem
    return (
        <div>
            <div className=" my-14">

                <div className="card lg:card-side bg-base-100 ">
                    <div className="lg:w-[45%] p-9 lg:h-auto bg-base-200 rounded-xl">
                        <figure >
                            <img src={image} alt="Album" className="h-72 lg:h-auto" />
                        </figure>
                    </div>

                    <div className="lg:w-[50%] mt-7 lg:mt-1 flex flex-col pl-14 space-y-5 text-[#131313B3] ">
                        <h2 className="card-title text-xl md:text-3xl lg:text-5xl text-black">{item_name}</h2>
                        {/* <p className="text-lg font-medium ">By : {author}</p> */}
                        <h2 className="border-y-2 py-3 my-5 font-bold md:text-xl text-black"> {subcategory_Name}</h2>

                        <h1 className="flex-grow leading-[2rem] ">
                            <span className="md:text-xl font-semibold text-black">Discription : </span>{short_description}
                        </h1>

                       

                        <div className="text-xl font-medium space-y-3">
                            <h1>price :  <span className="text-black font-bold ml-28">{price}</span> </h1>
                            <h1>customization : <span className="text-black font-bold ml-8 ">{customization}</span> </h1>
                            <h1>processing_time: <span className="text-black font-bold ml-6">{processing_time}</span></h1>
                            <h1>Rating : <span className="text-black font-bold ml-28">{rating}</span></h1>

                        </div>

                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default DetailsPage;