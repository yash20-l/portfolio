import connectToDB from "../../database/Connection"
import { BlogModel } from "../../database/Models"
const slugify = require('slugify')
import multer from 'multer';
import nc from 'next-connect';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/blog")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${uniqueSuffix}.jpg`)
    }
})

let handler = nc({
    onError: (err, req, res, next) => {
        console.error(err);
        res.status(500).end("Something broke!");
    }
})

let upload = multer({ storage: storage })
const uploadFile = upload.single('image')
handler.use(uploadFile)
handler.post(async (req, res) => {

    let title = req.body.title;
    let content = req.body.content;
    let keywords = req.body.keywords;
    let category = req.body.category;

    let processedKeywords = keywords.split(',')
    const slug = slugify(title)
    const readtime = Math.round(content.length * 0.005)
    const likes = 0
    const comments = [{
        name : "Yash Verma",
        comment : "contact us for any digital marketing services"
    }]
    const newpost = BlogModel({
        title : title,
        content : content,
        keywords : processedKeywords,
        category : category,
        likes : likes,
        slug : slug,
        readtime : readtime,
        comments : comments,
        image : req.file.filename
    })
    newpost.save()
    res.json({
        "message": "done"
    })
})

// const handler = async (req, res) => {

//     let title = req.body.title
//     let content = req.body.content
//     let keywords = req.body.keywords
//     let category = req.body.category


//     let newPost = new BlogModel({
//         title : "What is SEO",
//         likes : 2,
//         comments : [{
//             name : 'Yash sharma',
//             comment : 'good'
//         }],
//         content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem excepturi maiores non, ab cum nemo minima nam ea, quibusdam quod necessitatibus dolor officia atque accusantium neque hic! Ipsam, recusandae iste.",
//         keywords : [
//             'marketing', 'digital-marketing'
//         ],
//         category : 'latest',
//         slug : slugify('What is SEO"')
//     })
//     newPost.save()
//     res.status(200).json({ name: 'John Doe' })
//   }

export default connectToDB(handler)

export const config = {
    api: {
      bodyParser: false // Disallow body parsing, consume as stream
    },
  };
  