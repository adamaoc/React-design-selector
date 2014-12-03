var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  addPlayer:function(item){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_PLAYER,
      item: item
    })
  },
  removePlayer:function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_PLAYER,
      index: index
    })
  },
  decreaseLife:function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DECREASE_LIFE,
      index: index
    })
  },
  increaseLife:function(index){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_LIFE,
      index: index
    })
  }
}

module.exports = AppActions;