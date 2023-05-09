'use strict';
import uploadFile from '../middleware/upload';
import * as mongoose from "mongoose";
import config from "config";
import youtube from "youtube-api";
import open from "open";

const Content = mongoose.model('Contents');

const youtubeCredentials = config.get("web");


exports.allContentList = function (req, res) {
    Content.find({}).then(contents => {
        return res.json(contents);
    });
};


exports.createContent = async (req, res) => {
    try {
        await uploadFile(req, res);
        if (req.file) {
            const filename = req.file.filename;
            const {title, description} = req.body;
            open(oAuth.generateAuthUrl({
                access_type: 'offline',
                scope: 'https://www.googleapis.com/auth/youtube.upload',
                state: JSON.stringify({
                    filename, title, description
                })
            }))
        }
        Content.save({
            title: title,
            description: description,
            fileName: filename
        }).then(content => {
            res.json(content)
        });
    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB!",
            });
        }

    }


};


exports.viewContent = function (req, res) {
    newContent.findById(req.params.contentId).then(content => {
        res.json(content)
    })
};


exports.updateContent = function (req, res) {
    Content.findOneAndUpdate({_id: req.params.contentId}, {});
};

const oAuth = youtube.authenticate({
    type: "oauth"
    , client_id: youtubeCredentials.client_id
    , client_secret: youtubeCredentials.client_secret
    , redirect_url: youtubeCredentials.redirect_uris[0]
});

exports.authCallback = (req, res) => {
    console.log(req, "req")
    console.log(req, "req")
    //res.redirect("https://localhost:8080/Success")
    const {filename, title, description} = JSON.parse(req.query.state);
    oAuth.getToken(req.query.code, (err, tokens) => {
        if (err) {
            console.log(err);
            return;
        }

        oAuth.setCredentials(tokens);

        youtube.videos.insert({

            resource: {
                snippet: {title, description},
                status: {privacyStatus: 'private'}

            },

            part: 'snippet,status',
            media: {

                body: fs.createReadStream(filename)
            }

        }, (err, data) => {

            console.log("Done");
            process.exit();

        })

    })
}

