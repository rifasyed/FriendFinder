var friendsArr = require("../data/friends.js")

module.exports = function(app){
	app.get('api/friends', function(req, res){
		res.json(friendsArr)
    })
    app.post('/api/friends', function(req, res) {
        var input = req.body
        var response = input.scores
        var score = 0
        var total = 0
        var newFriend = {
            name: '',
            photo: '',
            diff: 1000
        }
        for (var i = 0; i < friendsArr.length; i++) {
            total = 0
            if (newFriend.diff <= 5) {
                
            }
        }
    })
}