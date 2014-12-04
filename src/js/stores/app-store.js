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
  }];



// var _cartItems = [];