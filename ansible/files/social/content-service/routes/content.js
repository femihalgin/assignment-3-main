'use strict';

import contentController from "../controllers/content_controller";

const createContentRoutes  = function (app) {
    //const contentController = reqimuire('../controllers/content_controller');

    //Content Routes
    app.route('/contents/')
        .get(contentController.allContentList)
        .post(contentController.createContent);


    app.route('/contents/:contentId')
        .get(contentController.viewContent)
        .put(contentController.updateContent)

    app.route('/oauth2callback')
        .get(contentController.authCallback)
};

export default createContentRoutes;
