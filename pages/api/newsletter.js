import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        //validation in api route is better than on the frontend cause user can`t view it or change it
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address'})
            return; // to close the execution of this function here and continue processing
        }

        const client = await MongoClient.connect(
            'mongodb+srv://janisjenny:t7F23E40b808j8uR@cluster0.spsrw.mongodb.net/newsletter?retryWrites=true&w=majority'
        )
        const db = client.db();
        // collection is like a table in db  to store data
        // entries in a collection are documents as js objects
        await db.collection('emails').insertOne({ email: userEmail });
        client.close();
        res.status(201).json({ message: 'Signed up!'})
    }
}

export default handler;