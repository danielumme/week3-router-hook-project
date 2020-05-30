const express = require("express")
// 라이브러리 로드
// 서버생성

const app = express();
// 서버 구동

/*
    bind() => ip, port 를 연결 => 개통
    listen() => 대기상태
    accept() => 클라이언트가 접속시에 처리
 */

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});




app.listen(3355, ()=>{
    console.log("Server Start...", "http://localhost:3355")
})

// 클라이언트와 통신
// 사용자의 URI
// 몽고 디비 연결

const Client=require("mongodb").MongoClient;
// MongoDB Connection

/*
    MongoClient mc = new MongoClient("localhost", 27017);
    DB db = mc.getDB("mydb");  // DB
    DBCollection dbc = db.getCollection('recipe'); // 테이블, 컬렉션
 */

// /recipe?page=1
app.get('/recipe', (request, response)=>{
    // request= 사옹자가 보내준 요청 정보 : page, id, pwd
    // 요청을 처리
    // 결과를 전송 ==> , response.json

    var page = request.query.page; // request.getParameter("page");
    var rowSize = 12;
    var skip = (page*rowSize)-rowSize;

    /*
        1page => skip = 0
        2page => 12(버림) ==> 13
        앞에서부터 버려나감
     */
    
    var url = "mongodb://211.238.142.181:27017"
    Client.connect(url, (err, client)=>{
        var db = client.db('mydb');
        //select * from recipe => find({})
        // select * from recipe where no=1 => find({no:1})
        // select * from recipe where title like '%값%' => find({"title":{"$regex":".*"+값}})
        /*
                {}
                {}
                {}
                {}
                => [{}{}{}{}]로 변경해야 함
         */
        db.collection('recipe').find({}).skip(skip).limit(rowSize).toArray((err,docs)=>{
            // 요청한 사용자에게 데이터 전송
            response.json(docs);
            console.log(docs);
            client.close();
        })

    })
})


app.get('/recipe_total', (request,response)=>{
    var url="mongodb://211.238.142.181:27017"
    Client.connect(url, (err,client)=>{
        var db = client.db('mydb');
        db.collection('recipe').find({}).count((err, count)=>{
            response.json({total:Math.ceil(count/12.0)})
            client.close();
            return count;
        })
    })
})