var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    console.log(collection);
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});*/

router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'helow world!' });
});
router.get('/newuser',function(req,res){
	res.render('newuser',{'title':'add new user'});
});
router.post('/adduser',function(req,res){
	var db=req.db;
	var userName=req.body.username;
	var userEmail=req.body.useremail;
	var collection=db.get('usercollection');
	collection.insert({
		'username':userName,
		'email':userEmail
	},function(err,doc){
		if(err){
			res.send("There wos a problem adding the information to the database");
		}else{
			res.redirect('userlist');
		}
	});
});
module.exports = router;
/*test 分支修改内容*/
