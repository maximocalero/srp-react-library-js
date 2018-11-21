(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t){e.exports=[{name:"GlobalNavigation",description:"",props:{title:{type:{name:"string"},required:!1,description:"Title of Global Navigation"},currentUrl:{type:{name:"string"},required:!1,description:"Current Url Global Navigation"},globalNavigationItems:{type:{name:"array"},required:!1,description:"Global Navigation Items"}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport styles from './globalNavigation.module.css';\r\n// import styled from 'styled-components';\r\n\r\nimport NavigationItem from '../../componentsProps/ItemNavigation';\r\n\r\nconst GlobalNavigation = ({title, currentUrl, globalNavigationItems}) => {\r\n    return (\r\n        <div className={styles.divContainer}>\r\n        <div className={styles.marginDiv}>\r\n            <span className= {`ms-Icon ms-Icon--Family ${styles.menuIcon}`} title={title}></span>\r\n        </div>\r\n        <ul className={styles.navigationBar}>\r\n            {Object.keys(globalNavigationItems).map(key=> {\r\n                if(currentUrl === globalNavigationItems[key].url){\r\n                    return(\r\n                        <li className={styles.navigationItemSelected} key={key}>\r\n                            <span>{globalNavigationItems[key].name}</span>\r\n                        </li>\r\n                    );\r\n                }else{\r\n                    return(\r\n                        <li className={styles.navigationItem} key={key}>\r\n                            <a className={styles.navigationItem} href={globalNavigationItems[key].url}>{globalNavigationItems[key].name}</a>\r\n                        </li>   \r\n                    );\r\n                }\r\n            })}\r\n        </ul>\r\n    </div> \r\n    )\r\n}\r\n\r\nGlobalNavigation.propTypes = {\r\n    /** Title of Global Navigation */\r\n    title: PropTypes.string,\r\n\r\n    /** Current Url Global Navigation */\r\n    currentUrl: PropTypes.string,\r\n    \r\n    /** Global Navigation Items*/\r\n    globalNavigationItems: PropTypes.array\r\n}\r\n\r\n\r\nexport default GlobalNavigation;",examples:[{name:"ExampleGlobalNavigation",description:"Custom message",code:'import React from \'react\';\r\nimport GlobalNavigation from \'srp-react-library-js/GlobalNavigation\';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n    const globalNavigationItems = \r\n    [\r\n        {\r\n            "name": "News",\r\n            "url": "https://sirpointdevs.sharepoint.com/sites/news",\r\n            "description": "Corporate Company News Portal",\r\n            "target": "",\r\n            "className" : ""\r\n        },\r\n        {\r\n            "name": "Human Resources",\r\n            "url": "https://sirpointdevs.sharepoint.com/sites/hr",\r\n            "description": "Human Resources Portal",\r\n            "target": "",\r\n            "className" : ""\r\n        },\r\n        {\r\n            "name": "Learning",\r\n            "url": "https://sirpointdevs.sharepoint.com/sites/learning",\r\n            "description": "Learning Portal",\r\n            "target": "",\r\n            "className" : ""\r\n        }\r\n    ] \r\n    \r\n    return <GlobalNavigation title="Global Navigation Example" currentUrl ="#" globalNavigationItems = {globalNavigationItems} />\r\n}'}]},{name:"Shortcuts",description:"Component to show shortcuts with an icon",props:{alignment:{type:{name:"string"},required:!1,description:"Alignment"},shortcutItems:{type:{name:"array"},required:!1,description:"Array of shortcuts to show"}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport styles from './shortcuts.module.css';\r\nimport { Icon } from 'office-ui-fabric-react/lib/Icon';\r\nimport { initializeIcons } from '@uifabric/icons';\r\ninitializeIcons();\r\n\r\n/** Component to show shortcuts with an icon */\r\nfunction Shortcuts ({alignment, shortcutItems}) {\r\n    const containerAlign = () => {\r\n        if (alignment === \"center\"){\r\n            return styles.center;\r\n        }\r\n        if (alignment === \"left\"){\r\n            return styles.left;\r\n        }\r\n        if (alignment === \"right\"){\r\n            return styles.right;\r\n        }        \r\n    }\r\n\r\n    return (\r\n        <div>\r\n            <ul className= {`${styles.toolBarContainer} ${containerAlign()}`} >\r\n                {Object.keys(shortcutItems).map(key=>{\r\n                    return(                \r\n                        <li className={styles.toolBarItem} key = {key}>\r\n                            <a className={styles.navigationItem} href={shortcutItems[key].url} target= {shortcutItems[key].target}>\r\n                                <Icon iconName = {shortcutItems[key].iconName} className = {shortcutItems[key].className} title = {shortcutItems[key].name}/>\r\n                            </a>\r\n                        </li>   \r\n                    );\r\n                })}\r\n            </ul>        \r\n        </div>\r\n    );\r\n}\r\n\r\nShortcuts.propTypes = {\r\n    /** Alignment */\r\n    alignment: PropTypes.string,\r\n    /** Array of shortcuts to show */\r\n    shortcutItems: PropTypes.array\r\n}\r\n\r\nexport default Shortcuts;",examples:[{name:"ExampleShortcuts",description:"Custom message",code:'import React from \'react\';\r\nimport Shortcuts from \'srp-react-library-js/Shortcuts\';\r\n\r\n/** Custom message */\r\nexport default function ExampleShortcuts() {\r\n    const shorCuts = \r\n    [\r\n        {\r\n            "name": "My site",\r\n            "url": "https://sirpointdevs-my.sharepoint.com",\r\n            "description": "Onedrive",\r\n            "target": "",\r\n            "iconName": "OneDrive",\r\n            "className" : "ms-Icon ms-Icon--OneDrive"\r\n        },\r\n        {\r\n            "name": "Office 365 Delve",\r\n            "url": "https://nam.delve.office.com/",\r\n            "description": "Office 365 Delve site",\r\n            "target": "",\r\n            "iconName": "DelveLogo",\r\n            "className" : "ms-Icon ms-Icon--DelveLogo"\r\n        },\r\n        {\r\n            "name": "All Users Directory",\r\n            "url": "https://outlook.office.com/owa/?realm=sirpoint.com&exsvurl=1&ll-cc=1033&modurl=0&path=/people",\r\n            "description": "All Users Directory",\r\n            "target": "",\r\n            "iconName": "CompanyDirectory",\r\n            "className" : "ms-Icon ms-Icon--CompanyDirectory"\r\n        }\r\n    ] \r\n    \r\n    return <Shortcuts alignment = "right" shortcutItems = {shorCuts} />\r\n}'}]}]},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),i=n.n(o),s=n(14),l=n.n(s),c={title:"",description:"",url:"",target:"",className:""};c.propTypes={name:l.a.string.isRequired,description:l.a.string,url:l.a.string.isRequired,target:l.a.string,className:l.a.string};var m=function(e){var t=e.title,n=e.currentUrl,r=e.globalNavigationItems;return a.a.createElement("div",{className:i.a.divContainer},a.a.createElement("div",{className:i.a.marginDiv},a.a.createElement("span",{className:"ms-Icon ms-Icon--Family ".concat(i.a.menuIcon),title:t})),a.a.createElement("ul",{className:i.a.navigationBar},Object.keys(r).map(function(e){return n===r[e].url?a.a.createElement("li",{className:i.a.navigationItemSelected,key:e},a.a.createElement("span",null,r[e].name)):a.a.createElement("li",{className:i.a.navigationItem,key:e},a.a.createElement("a",{className:i.a.navigationItem,href:r[e].url},r[e].name))})))};function u(){return a.a.createElement(m,{title:"Global Navigation Example",currentUrl:"#",globalNavigationItems:[{name:"News",url:"https://sirpointdevs.sharepoint.com/sites/news",description:"Corporate Company News Portal",target:"",className:""},{name:"Human Resources",url:"https://sirpointdevs.sharepoint.com/sites/hr",description:"Human Resources Portal",target:"",className:""},{name:"Learning",url:"https://sirpointdevs.sharepoint.com/sites/learning",description:"Learning Portal",target:"",className:""}]})}n.d(t,"default",function(){return u})},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(8),i=n.n(o),s=n(62),l=n(54);Object(l.a)();var c=function(e){var t=e.alignment,n=e.shortcutItems;return a.a.createElement("div",null,a.a.createElement("ul",{className:"".concat(i.a.toolBarContainer," ").concat("center"===t?i.a.center:"left"===t?i.a.left:"right"===t?i.a.right:void 0)},Object.keys(n).map(function(e){return a.a.createElement("li",{className:i.a.toolBarItem,key:e},a.a.createElement("a",{className:i.a.navigationItem,href:n[e].url,target:n[e].target},a.a.createElement(s.a,{iconName:n[e].iconName,className:n[e].className,title:n[e].name})))})))};function m(){return a.a.createElement(c,{alignment:"right",shortcutItems:[{name:"My site",url:"https://sirpointdevs-my.sharepoint.com",description:"Onedrive",target:"",iconName:"OneDrive",className:"ms-Icon ms-Icon--OneDrive"},{name:"Office 365 Delve",url:"https://nam.delve.office.com/",description:"Office 365 Delve site",target:"",iconName:"DelveLogo",className:"ms-Icon ms-Icon--DelveLogo"},{name:"All Users Directory",url:"https://outlook.office.com/owa/?realm=sirpoint.com&exsvurl=1&ll-cc=1033&modurl=0&path=/people",description:"All Users Directory",target:"",iconName:"CompanyDirectory",className:"ms-Icon ms-Icon--CompanyDirectory"}]})}n.d(t,"default",function(){return m})},38:function(e,t,n){e.exports=n(57)},43:function(e,t,n){},45:function(e,t,n){var r={"./GlobalNavigation/ExampleGlobalNavigation":33,"./GlobalNavigation/ExampleGlobalNavigation.js":33,"./Shortcuts/ExampleShortcuts":34,"./Shortcuts/ExampleShortcuts.js":34};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=45},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(35),i=n.n(o),s=(n(43),n(9)),l=n(10),c=n(12),m=n(11),u=n(13),p=function(e){var t=e.components;return a.a.createElement("ul",{className:"navigation"},t.map(function(e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:"#".concat(e)},e))}))},g=n(23),v=n.n(g),h=n(36),d=n.n(h),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){v.a.registerLanguage("javascript",d.a),v.a.highlightBlock(this.element)}},{key:"render",value:function(){var e=this;return a.a.createElement("pre",{ref:function(t){e.element=t}},a.a.createElement("code",null,this.props.children))}}]),t}(a.a.Component),N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggleCode=function(e){e.preventDefault(),n.setState(function(e){return{showCode:!e.showCode}})},n.state={showCode:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.showCode,t=this.props.example,r=t.code,o=t.description,i=t.name,s=n(45)("./".concat(this.props.componentName,"/").concat(i)).default;return a.a.createElement("div",{className:"example"},o&&a.a.createElement("h4",null,o),a.a.createElement(s,null),a.a.createElement("div",{className:"showCode"},a.a.createElement("a",{href:"",onClick:this.toggleCode},e?"Hide":"Show"," Code")),e&&a.a.createElement(f,null,r))}}]),t}(a.a.Component),y=function(e){var t=e.props;return a.a.createElement("table",{className:"props"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Description"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Default"),a.a.createElement("th",null,"Required"))),a.a.createElement("tbody",null,Object.keys(t).map(function(e){return a.a.createElement("tr",{key:e},a.a.createElement("td",null,e),a.a.createElement("td",null,t[e].description),a.a.createElement("td",null,t[e].type.name),a.a.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value),a.a.createElement("td",null,t[e].required&&"X"))})))},b=function(e){var t=e.component,n=t.name,r=t.description,o=t.props,i=t.examples;return a.a.createElement("div",{className:"componentpage"},a.a.createElement("h2",null,n),a.a.createElement("p",null,r),a.a.createElement("h3",null,"Example",i&&i.length>1&&"s"),i.length>0?i.map(function(e){return a.a.createElement(N,{key:e.code,example:e,componentName:n})}):"No examples exist.",a.a.createElement("h3",null,"Props"),o?a.a.createElement(y,{props:o}):"This component accepts no props.")},I=n(20),E=n.n(I),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={route:window.location.hash.substr(1)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",function(){e.setState({route:window.location.hash.substr(1)})})}},{key:"render",value:function(){var e=this.state.route,t=e?E.a.filter(function(t){return t.name===e})[0]:E.a[0];return a.a.createElement("div",null,a.a.createElement(p,{components:E.a.map(function(e){return e.name})}),a.a.createElement(b,{component:t}))}}]),t}(a.a.Component);n(55);i.a.render(a.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports={divContainer:"globalNavigation_divContainer__17EKY",marginDiv:"globalNavigation_marginDiv__qej_s",menuIcon:"globalNavigation_menuIcon__3Q4wm",navigationBar:"globalNavigation_navigationBar__1Lt9R",navigationItem:"globalNavigation_navigationItem__1B8hq",navigationItemSelected:"globalNavigation_navigationItemSelected__uQ8Id"}},8:function(e,t,n){e.exports={center:"shortcuts_center__HGNLV",left:"shortcuts_left__1NjCq",right:"shortcuts_right__27_E9",toolBarContainer:"shortcuts_toolBarContainer__1jOWv",toolBarItem:"shortcuts_toolBarItem__3FVnV"}}},[[38,2,1]]]);
//# sourceMappingURL=main.5d2ae62e.chunk.js.map