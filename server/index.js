const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const mongoose = require('mongoose')
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { authMiddleware, isAdmin } = require("./middlewares/authMiddleware");
const { handleError, notFound } = require("./middlewares/errorHandler");
const app = express();
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const contactRouter = require("./routes/contactRoutes");
const projectCategoryRouter = require("./routes/projectCategoryRoutes");
const projectRouter = require("./routes/projectRoutes");
const blogRouter = require("./routes/blogRouter");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const categoriesRouter = require("./routes/categoriesRouter");
const blogCommentRouter = require("./routes/blogComments");
const postRouter = require("./routes/postRouter");
const postCommentRouter = require("./routes/postComment");
const storiesRouter = require("./routes/storiesRouter");
const storyCommentRouter = require("./routes/storyCommentRouter");
const albumRouter = require("./routes/albumRouter");
const songsRouter = require("./routes/songsRouter");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "mysecret",
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 12 * 60 * 60
    })
  })
)

app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(cors({origin: ['http://localhost:3000', 'https://yonela-johannes.github.io', 'https://yonela-johannes.github.io/mysite', 'https://johannesyonela.engineer'], credentials: true}));

app.use("/api/user", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/project-categories", projectCategoryRouter);
app.use("/api/projects", projectRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/blog-comment", blogCommentRouter);
app.use("/api/posts", postRouter);
app.use("/api/post-comment", postCommentRouter);
app.use("/api/stories", storiesRouter);
app.use("/api/story-comment", storyCommentRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/songs", songsRouter);
app.use("/api/album", albumRouter);

app.use(notFound)
app.use(handleError)


const server = app.listen(PORT, () => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err.message));
  console.log(`Server is running at http://localhost:${PORT}`)
});
