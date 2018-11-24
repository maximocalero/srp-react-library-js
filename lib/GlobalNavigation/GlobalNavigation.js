'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _globalNavigationModule = require('./globalNavigation.module.css');

var _globalNavigationModule2 = _interopRequireDefault(_globalNavigationModule);

var _ItemNavigation = require('../../componentsProps/ItemNavigation');

var _ItemNavigation2 = _interopRequireDefault(_ItemNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalNavigation = function GlobalNavigation(_ref) {
    var title = _ref.title,
        currentUrl = _ref.currentUrl,
        globalNavigationItems = _ref.globalNavigationItems;

    return _react2.default.createElement(
        'div',
        { className: _globalNavigationModule2.default.divContainer },
        _react2.default.createElement(
            'div',
            { className: _globalNavigationModule2.default.marginDiv },
            _react2.default.createElement('span', { className: 'ms-Icon ms-Icon--Family ' + _globalNavigationModule2.default.menuIcon, title: title })
        ),
        _react2.default.createElement(
            'ul',
            { className: _globalNavigationModule2.default.navigationBar },
            Object.keys(globalNavigationItems).map(function (key) {
                if (currentUrl === globalNavigationItems[key].url) {
                    return _react2.default.createElement(
                        'li',
                        { className: _globalNavigationModule2.default.navigationItemSelected, key: key },
                        _react2.default.createElement(
                            'span',
                            null,
                            globalNavigationItems[key].name
                        )
                    );
                } else {
                    return _react2.default.createElement(
                        'li',
                        { className: _globalNavigationModule2.default.navigationItem, key: key },
                        _react2.default.createElement(
                            'a',
                            { className: _globalNavigationModule2.default.navigationItem, href: globalNavigationItems[key].url },
                            globalNavigationItems[key].name
                        )
                    );
                }
            })
        )
    );
};
// import styled from 'styled-components';

GlobalNavigation.propTypes = {
    /** Title of Global Navigation */
    title: _propTypes2.default.string,

    /** Current Url Global Navigation */
    currentUrl: _propTypes2.default.string,

    /** Global Navigation Items*/
    globalNavigationItems: _propTypes2.default.array
};

exports.default = GlobalNavigation;