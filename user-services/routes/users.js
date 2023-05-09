'use strict';

module.exports = function (app) {
  const userController = require('../controllers/user_controller');

  //Users Routes
  app.route('/users/')
      .get(userController.allUserList)
      .post(userController.createUser);


  app.route('/users/:userId')
      .get(userController.viewUser)
      .put(userController.updateUser)
};


