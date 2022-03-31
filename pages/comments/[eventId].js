// event ID, is a dynamic api route, is the ID of the event to which the comment belongs, should be encoded in the URL.

function handler(req, res) {
    const eventId = req.query.eventId;
    

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        // server side validation
        if (!email.includes('@') || !name || !name.trim() === '' || !text || !text.trim() === '') {
            res.status(422).json({ message: 'Invalid input' });
            return;
        }

    }

    const newComment = {
        id: new Date().toISOString(),
        email,
        name,
        text
    };

    console.log(newComment);

    res.status(201).json({ message: 'Comment created' , comment: newComment});

    if (req.method === 'GET') {
        const  dummyList = [
            {id: 'c1', name: 'Max', text: '1st comment'},
            {id: 'c2', name: 'Jenn', text: '2nd comment'}
        ]

        res.status(200).json({comments: dummyList})
    }
}

export default handler;