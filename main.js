var express=require('express')
var fs=require('fs')
var app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
var port=3001;
app.use('/',express.static('./public'));
app.post("/",(req,res)=>
{
    // let dt=req.body.numbers;
    // console.log("given input code"+dt)
    fs.writeFile("foo.js",req.body.test,function(err){
        if(err)
        {
            return console.log(err);
        }
    })
    var beautify = require('js-beautify').js;
fs.readFile('./foo.js', 'utf8', function(err, data) {
    if (err) {
        throw err;
    }
    fs.writeFile("result.js",beautify(data, { indent_size: 2, space_in_empty_paren: true }),function(err){
        if(err)
        {
            return console.log(err);
        }
    })

});

    res.sendFile(__dirname+"/result.js")

})

app.listen(port,function(err){
    
    console.log("server listening")
    
});