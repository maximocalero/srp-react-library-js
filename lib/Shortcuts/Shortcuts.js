'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shortcutsModule = require('./shortcuts.module.css');

var _shortcutsModule2 = _interopRequireDefault(_shortcutsModule);

var _Icon = require('office-ui-fabric-react/lib/Icon');

var _icons = require('@uifabric/icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _icons.initializeIcons)();

/** Component to show shortcuts with an icon */
function Shortcuts(_ref) {
    var alignment = _ref.alignment,
        shortcutItems = _ref.shortcutItems;

    var containerAlign = function containerAlign() {
        if (alignment === "center") {
            return _shortcutsModule2.default.center;
        }
        if (alignment === "left") {
            return _shortcutsModule2.default.left;
        }
        if (alignment === "right") {
            return _shortcutsModule2.default.right;
        }
    };

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            { className: _shortcutsModule2.default.toolBarContainer + ' ' + containerAlign() },
            Object.keys(shortcutItems).map(function (key) {
                return _react2.default.createElement(
                    'li',
                    { className: _shortcutsModule2.default.toolBarItem, key: key },
                    _react2.default.createElement(
                        'a',
                        { className: _shortcutsModule2.default.navigationItem, href: shortcutItems[key].url, target: shortcutItems[key].target },
                        _react2.default.createElement(_Icon.Icon, { iconName: shortcutItems[key].iconName, className: shortcutItems[key].className, title: shortcutItems[key].name })
                    )
                );
            })
        )
    );
}

Shortcuts.propTypes = {
    /** Alignment */
    alignment: _propTypes2.default.string,
    /** Array of shortcuts to show */
    shortcutItems: _propTypes2.default.array
};

exports.default = Shortcuts;