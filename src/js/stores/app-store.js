var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";


var _fordSkinCatalog = [{
    'DesignName': 'FordUnity',
    'DisplayName':'Ford Unity',
    'Layouts': ['Default', 'B', 'C', 'D'],
    'Palettes': [
        {
            'paletteName': 'EsapeBlueDark',
            'displayName': 'Escape Blue Dark',
            'primaryColor': '#333'
        },
        {
            'paletteName': 'EsapeBlueLight',
            'displayName': 'Escape Blue Light',
            'primaryColor': '#333'
        }
    ]
  },
  {
    'DesignName': 'FordMagnetic',
    'DisplayName':'Ford Magnetic',
    'Layouts': ['Default', 'B', 'C', 'D'],
    'Palettes': [
        {
            'paletteName': 'EsapeBlueDark',
            'displayName': 'Escape Blue Dark',
            'primaryColor': '#333'
        },
        {
            'paletteName': 'EsapeBlueLight',
            'displayName': 'Escape Blue Light',
            'primaryColor': '#333'
        }
    ]
  },
  {
    'DesignName': 'FordPremier',
    'DisplayName':'Ford Premier',
    'Layouts': ['Default', 'B', 'C', 'D'],
    'Palettes': [
        {
            'paletteName': 'EsapeBlueDark',
            'displayName': 'Escape Blue Dark',
            'primaryColor': '#333'
        },
        {
            'paletteName': 'EsapeBlueLight',
            'displayName': 'Escape Blue Light',
            'primaryColor': '#333'
        }
    ]
  }];

var _pageState = "palette";

var _designSelectedDisplayName = "Ford Unity";
var _designSelectedDesignName = "FordUnity";

function _updateDesign(names){
    var designName = names[0];
    var displayName = names[1];
    _designSelectedDisplayName = displayName;
    _designSelectedDesignName = designName;
}

function _updatePageState(page) {
    console.log(page);
    // _pageState = page;
}

var AppStore = merge(EventEmitter.prototype, {
    emitChange:function() {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },

    getDesigns:function() {
        return _fordSkinCatalog
    },

    getSelectedDesignDisplayName:function() {
        return _designSelectedDisplayName;
    },

    getSelectedDesignDesignName:function() {
        return _designSelectedDesignName;
    },
    getCurrentPage:function() {
        return _updatePageState;
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case AppConstants.UPDATE_DESIGN:
                _updateDesign(payload.action.design);
                break;
        }

        AppStore.emitChange();
        return true;
    })
})
module.exports = AppStore;