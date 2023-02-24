function getAllComments(req, res) {
    // '/:postID'
    res.send('all comments');
}

function getUserComments(req, res) {
    // '/:userID/comments'
    res.send('all user comments');
}

module.exports = {
    getAllComments,
    getUserComments
};