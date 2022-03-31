function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        //validation in api route is better than on the frontend cause user can`t view it or change it
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address'})
            return; // to close the execution of this function here and continue processing
        }

        console.log(userEmail);
        res.status(201).json({ message: 'Signed up!'})
    }
}

export default handler;