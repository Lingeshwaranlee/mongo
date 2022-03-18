 1. //mongo
2. //use b30wd
 3.//show collections.  -----> (it will not show before inserting)
 4.//db.movies.insertMany ([]);  ----->( copy all the data here)
5.//show collections.  ----->(movies- it will show)
6.//db.movies.find({}).pretty();----->(align document)
7.// d  b.movies.find({}).count(); ----->(to count document)
8.// db.movies.find({rating:{$gt:8} }).pretty();  ----->(greater than)
9.// db.movies.find({},{name:1,rating:1}).pretty(); ----->(inclusion means (athu matum than varanum) it act like boolean 1-true,0-false)
10.// db.movies.find({},{name:0,rating:0}).pretty(); ----->(exclusion means(athu matum than varathu )it act like boolean 1-true,0-false)
11.//db.movies.find({ rating:{$gt:8} },{name:1,rating:1}).pretty();----->
12.// db.movies.find({}).sort({rating:1}).pretty(); ----->(sorting -ascending)
13.// db.movies.find({}).sort({rating:-1}).pretty(); ----->(sorting -descending)
14.//db.movies.find({},{name:1,rating:1}).limit(2).pretty(); ----->(limits 1 & 2 )
15.//db.movies.find({},{name:1,rating:1}).limit(2).skip(2).pretty(); ----->(skips 1 & 2)
16.//db.movies.find({},{name:1,rating:1}).sort({name:1}).pretty(); ----->(sort by name)
17.//db.movies.find({},{name:1,rating:1}).sort({rating:-1,name:1}).pretty(); ----->(sort by name,rating)
//{creating new order}
18.//db.orders.insertMany( copy all the data here)
19.//db.orders.find({}).pretty();
//{aggregate}
20.//db.orders.aggregate([{$match:{status:"urgent"}}]); -----> <stage -1 filter all urgent orders>
21.//db.orders.aggregate([{$match:{status:"urgent"}} ,{$group:{_id:"$productName",totalUrgentQuantity:{$sum:"$quantity"}}}]); -----> <stage -2 group by product>
22.




