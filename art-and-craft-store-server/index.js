const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors({
    origin: ['http://localhost:5173','https://sani4242.web.app']
}));

// app.use(cors())
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sy54hal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();
        // Get the database and collection on which to run the operation
        const db = client.db("ArtCraftDB");
        const userCollection = db.collection("User");
        const itemCollection = db.collection("Items");
        const viewItemCollection = db.collection("ViewItems");

        app.get('/users', async (req, res) => {
            const data = userCollection.find()
            const userData = await data.toArray()
            res.send(userData)
        })
        app.post('/users', async (req, res) => {
            const user = req.body
            const result = await userCollection.insertOne(user)
            res.send(result)
        })


        //art and craft part
        app.post('/all-Items', async (req, res) => {
            const items = req.body
            const itemsResult = await itemCollection.insertOne(items)
            res.send(itemsResult)
        })
        app.get('/all-Items', async (req, res) => {
            const data = itemCollection.find()
            const itemData = await data.toArray()
            res.send(itemData)
        })
        app.get('/all-Items/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const item = await itemCollection.findOne(query);
            // console.log(query,item)
            res.send(item);
        })

        //
        app.post('/viewItems', async (req, res) => {
            const items = req.body
            const itemsResult = await viewItemCollection.insertOne(items)
            res.send(itemsResult)
        })
        app.get('/viewItems', async (req, res) => {
            const data = viewItemCollection.find()
            const viewItem = await data.toArray()
            res.send(viewItem)
        })

        app.get('/viewItems/:Id', async (req, res) => {
            const ID = req.params.Id;
            const query = { _id: ID }
            const user = await viewItemCollection.findOne(query);
            console.log(query,user)
          
        res.send(user);
    })

    app.delete('/viewItems/:id', async (req, res) => {
        const id = req.params.id;
        console.log('please delete from database', id);
        const query = { _id: id }

        const result = await viewItemCollection.deleteOne(query);
        console.log(result)
        res.send(result);
    })

    //
    app.put('/viewItems/:id', async (req, res) => {
        const id = req.params.id;
        const item = req.body;
        // console.log(id, user);

        const filter = { _id: id }
        const options = { upsert: true }
        const viewItem = {
            $set: {
                item_name: item.item_name,
                subcategory_Name: item.subcategory_Name,
                image: item.image,
                short_description: item.short_description,
                price: item.price,
                rating: item.rating,
                processing_time: item.processing_time,
                customization: item.customization,
            }
        }
        const result = await viewItemCollection.updateOne(filter, viewItem, options);
        res.send(result);

    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
}
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("art and craft server is running");
})

app.listen(port, () => {
    console.log(`art and carft server is running on port : ${port}`);
})