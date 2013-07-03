var express = require('express');
var app = express();

app.configure(function() {
    app.engine('html', require('uinexpress').__express) // ���������� ������� "template" ���������� underscore ��� ����������
    app.set('view engine', 'html')                      
    app.set('views', __dirname + "/tpl");
    app.set("view options", {layout: 'layout.html'});   // ���� layout.html �� ��������� ����� ����������� ��� �������
    app.use(express.static(__dirname + "/assets"));     // ������ ����� �� ����� public ���������� �� �����
});

app.get('/', function(req, res){          // ������������ ������ �������� �������� "/"
    res.render('index.html');
});


var port = process.env.PORT || 5000;       
app.listen(port)                           // ��������� ������ �� 5000 �����, ���� �� ������� ���������� ��������� "port" 
console.log("Listening at " + port)        // ����� � �������, ��� �����������