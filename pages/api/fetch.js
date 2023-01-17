import connectToDB from "../../database/Connection"
import { BlogModel } from "../../database/Models"


const handler = async (req, res) => {

    if (req.method == 'POST') {
        let postid = req.body.id;
        let purpose = req.body.purpose;
        let category = req.body.category;
        let slug = req.body.slug

        if (purpose == 0) {  // 0 for only one post, 1 for category search, 2 for all posts
            BlogModel.findOne({ slug: slug }).then((post) => {
                res.status(200).json(post)
            }).catch(err => res.status(500).send('The requested resource is temporary unavailable. Please try again later...'))
        } else if (purpose == 1) {
            BlogModel.find({ category: category }).then((post) => {
                res.status(200).json(post)
            }).catch(err => res.status(500).send('The requested resource is temporary unavailable. Please try again later...'))
        }
        else if (purpose == 2) {
            BlogModel.find({}).then((post) => {
                res.status(200).json(post)
            }).catch(err => res.status(500).send('The requested resource is temporary unavailable. Please try again later...'))
        }
    }else{
        res.send('not allowed')
    }

}

export default connectToDB(handler)

export const config = {
    api: {
        bodyParser: true
    }
}
