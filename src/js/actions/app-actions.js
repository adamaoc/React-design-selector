var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  updateDesign:function(design){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_DESIGN,
      design: design
    })
  }
}

module.exports = AppActions;