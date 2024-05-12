import swal from 'sweetalert';

const AddItems = () => {
const handleAddItem =(event)=>{
    event.preventDefault();
    const form = new FormData(event.currentTarget);
        const item_name = form.get('item_name');
        const subcategory_Name = form.get('subcategory_Name');
        const image = form.get('image');
        const short_description = form.get('short_description');

        const price = form.get('price');
        const rating = form.get('rating');
        const processing_time = form.get('processing_time');
        const customization = form.get('customization');

        const Items = {item_name, subcategory_Name, image, short_description,price,rating,processing_time,customization}
        console.log(Items);

        fetch('https://art-and-craft-store-server-henna.vercel.app/all-Items',{
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(Items)
        })
        .then(res => res.json())
        .then(data => {
            // console.log('in post responsee', data)

            if (data.insertedId) {
                swal({
                    title: "Good job!",
                    text: "User create successfully!",
                    icon: "success",
                    button: "okay!",
                });
            }
            event.target.reset()
        })


}

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">Add Art & Craft Item</h1>
            <form onSubmit={handleAddItem} className="w-full my-10 border-2 rounded-2xl p-10 shadow-2xl space-y-3 ">
                {/* 1st row */}
                <div className="flex justify-between gap-10">
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Item Name :</span>
                        </label>
                        <input type="text" name="item_name" placeholder="Enter your item name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Subcategory Name:</span>
                        </label>
                        <input type="text" name="subcategory_Name" placeholder="Enter category " className="input input-bordered" required />
                    </div>
                </div>
                {/* 2nd row */}
                <div className="flex justify-between gap-10">
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Image URl :</span>
                        </label>
                        <input type="text" name="image" placeholder="Enter your Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Short discription:</span>
                        </label>
                        <input type="text" name="short_description" placeholder="Discription " className="input input-bordered" required />
                    </div>
                </div>
                {/* 3rd row */}
                <div className="flex justify-between gap-10">
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Price :</span>
                        </label>
                        <input type="number" name="price" placeholder="Product Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Rating :</span>
                        </label>
                        <input type="text" name="rating" placeholder="Enter item rating " className="input input-bordered"  />
                    </div>
                </div>
                {/* 4th row */}
                <div className="flex justify-between gap-10">
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Processing TIme :</span>
                        </label>
                        <input type="text" name="processing_time" placeholder="processing time" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold"> Customization :</span>
                        </label>
                        <input type="text" name="customization" placeholder="Enter yes / no" className="input input-bordered" required />
                    </div>
                </div>
                <div className="text-center mx-auto">
                    <button className="btn btn-secondary font-semibold ">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;