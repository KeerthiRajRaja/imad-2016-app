var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'article-one | Keerthiraj',
        heading:'Article one',
        date:'sep 2016',
        content:`<p>
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                    </p>`
    },
    'article-two':{
        title:'article-two | Keerthiraj',
        heading:'Article two',
        date:'sep 2016',
        content:`<p>
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                    </p>`
        
    },
    'article-three':{
        title:'article-three | Keerthiraj',
        heading:'Article three',
        date:'sep 2016',
        content:`<p>
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                    </p>`
        
    }
};
    function createTemplate(data){
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;
    
    
    var htmlTemplate=`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content ="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div> 
                    <a href="/">HOME</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    console.log("counter",counter)
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){// submit-name?name=xxxx
   
  //get the name frm the request
  var name=req.query.name;
  names.push(name);
  //JSON:java script object notation
  res.send(JSON.stringify(names));
});

app.get('/:articlename', function(req, res){
    //articleName==article-one
    //article[articlename]={}content object for article-one
    var articlename=req.params.articlename;
   res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
