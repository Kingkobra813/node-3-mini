let allMessages = [];

module.exports = {
    getAllMessages: (req, res) => {
        res.status(200).send(allMessages)
    },
    createMessage: (req, res) => {
        const newMessage = {
            username: req.body.username,
            message: req.body.message,
        }

        if (req.session.history) {
            req.session.history.push(newMessage)
        } else {
            req.session.history = [newMessage];
        }

        allMessages.push(newMessage);
        res.status(200).send(allMessages);
    },
    history: (req, res) => {
        res.status(200).send(req.session.history)
    }
}