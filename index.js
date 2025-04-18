import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";
import pg from "pg";
import multer from "multer";
import crypto from "crypto";
import path from "path";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  // connectionString: process.env.DB_URL,
  // ssl: {
    
  //   rejectUnauthorized: false

  // }

});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("trust proxy", 1);

app.use(
  session({
    secret: process.env.TOPSECRETWORD,
    resave: false,
    saveUninitialized: true,
    cookie: {
      
      maxAge: 1000 * 60 * 60 * 24,

    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image/uploads");
  },

  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, bytes) {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(err, fn);
    });
  },
});

const upload = multer({ storage: storage });

app.get("/", async (req, res) => {

  // new arrival product
  let result = await db.query("SELECT * FROM newarrivalproduct");
  let getProduct = [];
  getProduct = result.rows;

  // retro polo product
  let getRetroPolo = await db.query("SELECT * FROM retropoloproduct");
  let getRetroProduct = [];
  getRetroProduct = getRetroPolo.rows;

  res.render("index.ejs", { products: getProduct, retroproduct: getRetroProduct});
});

app.get("/vionesseadmin", async (req, res) => {
  if (req.isAuthenticated()) {

    let getArrivalProducts = await db.query("SELECT * FROM newarrivalproduct");
    let getArrivals = [];
    getArrivals = getArrivalProducts.rows;

    let getNewsLetterSubscriber = await db.query("SELECT * FROM newsletter");
    let getSubscribers = [];
    getSubscribers = getNewsLetterSubscriber.rows;

    res.render("vionesseadmin.ejs", {arrivalproduct: getArrivals, newslettersubscriber: getSubscribers});
  } else {
    res.redirect("/login");
  }
});

app.get('/delete/arrival/:id', async (req, res) => {
  
  let deleteArrivalProductId = req.params.id; 
  await db.query("DELETE FROM newarrivalproduct WHERE id = $1", [deleteArrivalProductId]);
  res.redirect('/vionesseadmin');

});

app.get("/vionesseregister", (req, res) => {
  res.render("vionesseregister.ejs");
});

app.get("/login", (req, res) => {
  res.render("vionesselogin.ejs");
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/login");
  });
});

app.get('/delete/subscriber/:id', async (req, res) => {
  
  await db.query("DELETE FROM newsletter WHERE id = $1", [req.params.id]);
  res.redirect('/vionesseadmin');

});

app.post("/thankyou", async (req, res) => {

  let newsLetterEmail = req.body.email;

  const checkMail = await db.query("SELECT * FROM newsletter WHERE email = $1", [newsLetterEmail]);

  if (checkMail.rows.length > 0) {
    
    res.send("Mail is already exists...");

  } else {
    
    await db.query("INSERT INTO newsletter(email) VALUES($1)", [newsLetterEmail]);
    res.redirect('/');

  }

});

app.post("/register", async (req, res) => {
  let fullname = req.body.fullname;
  let email = req.body.email;
  let password = req.body.password;

  const checkUser = await db.query(
    "SELECT * FROM vionesseadmin WHERE adminemail = $1",
    [email]
  );

  if (checkUser.rows.length > 0) {
    res.send("Sorry! You already exists....");
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log(err);
      }

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          console.log(err);
        }

        let registerUser = await db.query(
          "INSERT INTO vionesseadmin(adminname, adminemail, adminpassword) VALUES($1, $2, $3) RETURNING *",
          [fullname, email, hash]
        );

        let user = registerUser.rows[0];

        req.login(user, function (err) {
          if (err) {
            console.log(err);
          }

          res.redirect("/vionesseadmin");
        });
      });
    });
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/vionesseadmin",
    failureRedirect: "/login",
  })
);

passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    const checkUser = await db.query(
      "SELECT * FROM vionesseadmin WHERE adminemail = $1",
      [username]
    );

    if (checkUser.rows.length > 0) {
      let user = checkUser.rows[0];
      let userPassword = user.adminpassword;

      bcrypt.compare(password, userPassword, (err, result) => {
        if (err) {
          return cb(err);
        } else {
          if (result) {
            return cb(null, user);
          } else {
            return cb(null, false);
          }
        }
      });
    } else {
      return cb("User not found....");
    }
  })
);

app.get("/auth/google", passport.authenticate("google", {

  scope: ["profile", "email"]

}));

app.get("/auth/google/vionesseadmin", passport.authenticate("google", {

  successRedirect: '/vionesseadmin',
  failureRedirect: '/login'

}));

passport.use("google", new GoogleStrategy({

  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/vionesseadmin",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

}, async (accessToken, refreshToken, profile, cb) => {

  const getGoogleUser = await db.query("SELECT * FROM vionesseadmin WHERE adminemail = $1", [profile.email]);

  if (getGoogleUser.rows.length === 0) {
    
    const checkGooogleUser = await db.query("INSERT INTO vionesseadmin(adminname, adminemail, adminpassword) VALUES($1, $2, $3)", [profile.given_name, profile.email, "google"]);

    return cb(null, checkGooogleUser.rows);

  } else {
    
    return cb(null, getGoogleUser.rows);

  }

}));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.post(
  "/uploadproductimage",
  upload.single("productimage"),
  async (req, res) => {
    let image = req.file.filename;
    let imagefile = image;
    let productName = req.body.productname;
    let productPrice = req.body.productprice;

    const checkName = await db.query(
      "SELECT * FROM newarrivalproduct WHERE productname = $1",
      [productName]
    );

    if (checkName.rows.length > 0) {
      res.send("Your product is already exists....");
    } else {
      await db.query(
        "INSERT INTO newarrivalproduct(productimage, productname, productprice) VALUES($1, $2, $3)",
        [imagefile, productName, productPrice]
      );
      res.redirect("/vionesseadmin");
    }
  }
);

app.post("/uploadretroproduct", upload.single("retroimage"), async (req, res) => {
  
  let image = req.file.filename;
  let retroProductImage = image;
  let retroProductName = req.body.retroproductname;
  let retroproductPrice = req.body.retroproductprice;

  const checkproductname = await db.query(
    "SELECT * FROM retropoloproduct WHERE productname = $1",
    [retroProductName]
  );

  if (checkproductname.rows.length > 0) {
    
    res.send("Sorry! This product is already exists....");

  } else {
    
    await db.query(
      "INSERT INTO retropoloproduct(productimage, productname, porductprice) VALUES($1, $2, $3)",
      [retroProductImage, retroProductName, retroproductPrice]
    );
    res.redirect("/vionesseadmin");

  }

});

app.listen(port, () => {
  console.log(`Server is started on ${port} port`);
});
