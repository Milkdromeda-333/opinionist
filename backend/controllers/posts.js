
function getAllPosts(req, res, next){
    res.send("all posts")
};

function getUsersPosts(req, res, next) {
    res.send("all users posts")
}

function addNewPost(req, res, next) {
    res.send("add new post")
}

module.exports = {
    getAllPosts,
    getUsersPosts,
    addNewPost
}