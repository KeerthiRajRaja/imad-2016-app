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
    'article-two':{title:'article-two | Keerthiraj',
        heading:'Article two',
        date:'sep 2016',
        content:`<p>
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                    </p>`},
    'aticle-three':{title:'article-three | Keerthiraj',
        heading:'Article three',
        date:'sep 2016',
        content:`<p>
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                        This is the content for my webapp.This is the content for my webapp.This is the content for my webapp.
                    </p>`}
};
    function createTemplate(data){
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
    
    
    var htmlTemplate=`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-sacle=1"/>
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
return htmplTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function(req, res){
    var articlename=req.params.articlename;
   res.send(createTemlate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
