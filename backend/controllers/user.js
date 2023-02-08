function updateUserPassword(req,res) {
    res.send("update password")
}

function deleteUser(req, res) {
    res.send('delete user')
}

module.exports = {
    updateUserPassword,
    deleteUser
}