import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv';
import pg from 'pg';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import bcrypt from 'bcrypt';
import session from 'express-session';
import passport from 'passport';

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({

  secret: process.env.TOPSECRETWORD,
  resave: false,
  saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    
    cb(null, './public/image/uploads');

  },

  filename: function (req, file, cb) {
    
    crypto.randomBytes(12, function (err, bytes) {
      
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(err, fn);

    });

  }

});

const upload = multer({ storage: storage });

app.get('/', async (req, res) => {

  let result = await db.query("SELECT * FROM newarrivalproduct");
  let getProduct = [];
  getProduct = result.rows;
  res.render("index.ejs", {products: getProduct});

});

app.get('/vionesseadmin', (req, res) => {

    res.render('vionesseadmin.ejs');

});

app.get('/vionesseregister', (req, res) => {

  res.render('vionesseregister.ejs');

});

app.post("/uploadproductimage", upload.single("productimage"), async(req, res) => {
  
  let image = req.file.filename;
  let imagefile = image;
  let productName = req.body.productname;
  let productPrice = req.body.productprice;

  const checkName = await db.query("SELECT * FROM newarrivalproduct WHERE productname = $1", [productName]);

  if(checkName.rows.length > 0){

    res.send("Your product is already exists....");

  } else {
    
    await db.query("INSERT INTO newarrivalproduct(productimage, productname, productprice) VALUES($1, $2, $3)", [imagefile, productName, productPrice]);
    res.redirect('/vionesseadmin');

  }

});

// app.post("/uploadproductdetails", async (req, res) => {

//   let productName = req.body.productname;
//   let productPrice = req.body.productprice;

//   console.log(productName);
//   console.log(productPrice);

//   let checkProduct = await db.query(
//     "SELECT * FROM newarrivalproduct WHERE productname = $1",
//     [productName]
//   );

//   if (checkProduct.rows.length > 0) {
//     res.send("Product already exists. Please add another product....");
//   } else {
//     await db.query(
//       "INSERT INTO newarrivalproduct(productimage, productname, productprice) VALUES($1, $2)",
//       [productName, productPrice]
//     );
//     res.redirect("/vionesseadmin");
//   }
// });

app.listen(port, () => {

    console.log(`Server is started on ${port} port`);

});