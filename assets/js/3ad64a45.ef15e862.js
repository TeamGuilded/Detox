"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5012],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||i;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9680:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"mocking-user-notifications",slug:"api/mocking-user-notifications",title:"Mocking User Notifications",sidebar_label:"Mocking User Notifications"},d=void 0,p={unversionedId:"mocking-user-notifications",id:"mocking-user-notifications",isDocsHomePage:!1,title:"Mocking User Notifications",description:"Mocking User Notifications",source:"@site/../docs/APIRef.MockingUserNotifications.md",sourceDirName:".",slug:"/api/mocking-user-notifications",permalink:"/Detox/docs/api/mocking-user-notifications",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/APIRef.MockingUserNotifications.md",tags:[],version:"current",frontMatter:{id:"mocking-user-notifications",slug:"api/mocking-user-notifications",title:"Mocking User Notifications",sidebar_label:"Mocking User Notifications"},sidebar:"tutorialSidebar",previous:{title:"Mocking Open With URL (Deep Links)",permalink:"/Detox/docs/api/mocking-open-with-url"},next:{title:"Mocking User Activity",permalink:"/Detox/docs/api/mocking-user-activity"}},u=[{value:"Mocking User Notifications",id:"mocking-user-notifications",children:[{value:"Mocking App Launch With a Notification",id:"mocking-app-launch-with-a-notification",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Mocking Notification Reception on a Running App",id:"mocking-notification-reception-on-a-running-app",children:[],level:3},{value:"Notification JSON Format",id:"notification-json-format",children:[{value:"Triggers (iOS-only)",id:"triggers-ios-only",children:[{value:"Trigger Types",id:"trigger-types",children:[],level:5}],level:4},{value:"Date Components (iOS-only)",id:"date-components-ios-only",children:[],level:4},{value:"Region (iOS-only)",id:"region-ios-only",children:[],level:4},{value:"Coordinate (iOS-only)",id:"coordinate-ios-only",children:[],level:4},{value:"Payload",id:"payload",children:[{value:"Handling at Runtime",id:"handling-at-runtime",children:[],level:5}],level:4},{value:"Examples",id:"examples",children:[],level:4}],level:3}],level:2}],m={toc:u};function s(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mocking-user-notifications"},"Mocking User Notifications"),(0,i.kt)("p",null,"Detox supports mocking user notifications."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),' The mocking mechanism will not mimic the UI of a user notification. Instead, it will only simulate a user interaction with the notification - namely, the "opening" of it (equivalent to a user\u2019s tap/swipe on it in the notification center).')),(0,i.kt)("h3",{id:"mocking-app-launch-with-a-notification"},"Mocking App Launch With a Notification"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"launchApp()")," with custom parameters (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"userNotification"),") will trigger the mocking mechanism."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await device.launchApp({newInstance: true, userNotification: notification});\n")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Launch with push notification', () => {\n  it('should handle the notification', async () => {\n    await device.launchApp({\n      newInstance: true,\n      userNotification: userNotificationPushTrigger,\n    });\n    await expect(element(by.text('From push'))).toBeVisible();\n  });\n});\n")),(0,i.kt)("h3",{id:"mocking-notification-reception-on-a-running-app"},"Mocking Notification Reception on a Running App"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendUserNotification()")," method to send notification to ",(0,i.kt)("strong",{parentName:"p"},"running")," app. Notifications can be sent to an active or a background app."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: while the name ",(0,i.kt)("inlineCode",{parentName:"p"},"sendUserNotification()"),' is not very idiomatic on Android, as notification data is not "sent" to apps (rather, it is bundled into an Activity/Service launch Intent as Intent-extras), this unified API is used, for the time being, for both platforms equivalently. With ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/2141"},"plans of a more extensive support")," for Android, we estimate it would be deprecated when the time comes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await device.sendUserNotification(notification);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"describe('Foreground user notifications', () => {\n  it('should handle the local notification from inside the app', async () => {\n    await device.launchApp();\n    await device.sendUserNotification(localNotification);\n    await expect(element(by.text('from local notification'))).toBeVisible();\n   });\n});\n")),(0,i.kt)("h3",{id:"notification-json-format"},"Notification JSON Format"),(0,i.kt)("p",null,"User notifications are passed as JSON objects to Detox. The JSON object needs to provide some required data, but can also provide an additional, optional payload."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mind the major difference here between the two platforms.")," While on iOS many types of data fields are applicable, Android is very loosely defined - with support for just free-form user data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," field."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Platform"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"trigger")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"The conditions that trigger the delivery of the notification. See the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/wix/detox/wiki/User-Notifications-JSON-Format-Documentation#triggers"},"Triggers section")," below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"title")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"A short description of the reason for the alert.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"subtitle")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"A secondary description of the reason for the alert.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"body")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"The body of the notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"badge")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"The number to display as the app\u2019s icon badge.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"payload")),(0,i.kt)("td",{parentName:"tr",align:null},"iOS: No",(0,i.kt)("br",null),"Android: Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS & Android"),(0,i.kt)("td",{parentName:"tr",align:null},"An object of custom information associated with the notification.",(0,i.kt)("br",null),"Android: see ",(0,i.kt)("a",{parentName:"td",href:"#Payload"},"full description below"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"category")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier of the app-defined category object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"content-available")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"Include this key with a value of 1 to configure a silent notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user-text")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"The text response provided by the user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"action-identifier")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"iOS"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for the action that the user selected.")))),(0,i.kt)("h4",{id:"triggers-ios-only"},"Triggers (iOS-only)"),(0,i.kt)("p",null,"Triggers are objects representing the trigger."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The conditions that trigger the delivery of the notification. See the Trigger Types section below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"repeats")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the event repeats. Only used for ",(0,i.kt)("inlineCode",{parentName:"td"},"calendar"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"timeInterval")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"location")," trigger types.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"timeInterval")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes for ",(0,i.kt)("inlineCode",{parentName:"td"},"timeInterval")," trigger type"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The time interval used to create the trigger.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"date-components")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes for ",(0,i.kt)("inlineCode",{parentName:"td"},"calendar")," trigger type"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"The date components used to construct this object. See the Date Components section below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"region")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes for ",(0,i.kt)("inlineCode",{parentName:"td"},"location")," trigger type"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"The region used to determine when the notification is sent. See the Region section below.")))),(0,i.kt)("h5",{id:"trigger-types"},"Trigger Types"),(0,i.kt)("p",null,"There are four types of triggers supported by Detox at this time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"push")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"calendar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeInterval")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"location"))),(0,i.kt)("p",null,"For convenience, these trigger types are provided as constants in ",(0,i.kt)("inlineCode",{parentName:"p"},"DetoxConstants"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const DetoxConstants = require(\'detox\').DetoxConstants;\n\nconst userNotification = {\n  "trigger": {\n    "type": DetoxConstants.userNotificationTriggers.push\n  },\n  // ...\n}\n')),(0,i.kt)("h4",{id:"date-components-ios-only"},"Date Components (iOS-only)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"era")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of era units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"year")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of year units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"month")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of month units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"day")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of day units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hour")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of hour units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"minute")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of minute units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"second")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of second units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"weekday")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of the weekday unit for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"weekdayOrdinal")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ordinal number of weekday units for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"quarter")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of quarters for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"weekOfMonth")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The week number of the month for the receiver.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"leapMonth")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the month is a leap month.")))),(0,i.kt)("h4",{id:"region-ios-only"},"Region (iOS-only)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"center")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"The center point of the geographic area. See the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/wix/detox/wiki/User-Notifications-JSON-Format-Documentation#coordinate"},"Coordinate section")," below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"radius")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The radius (measured in meters) that defines the geographic area\u2019s outer boundary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"notifyOnEntry")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates that notifications are generated upon entry into the region.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"notifyOnExit")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates that notifications are generated upon exit from the region.")))),(0,i.kt)("h4",{id:"coordinate-ios-only"},"Coordinate (iOS-only)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"latitude")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The latitude in degrees. Positive values indicate latitudes north of the equator. Negative values indicate latitudes south of the equator.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"longitude")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"The longitude in degrees. Measurements are relative to the zero meridian, with positive values extending east of the meridian and negative values extending west of the meridian.")))),(0,i.kt)("h4",{id:"payload"},"Payload"),(0,i.kt)("p",null,"On Android, the content will be available via the activity\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/app/Activity#getIntent()"},(0,i.kt)("inlineCode",{parentName:"a"},"getIntent()"))," API, inside the intent\u2019s ",(0,i.kt)("em",{parentName:"p"},"extra")," bundle. Under some limitations, that includes data-cascading so as to provide comprehensive support for JavaScript\u2019s advanced object-hierarchy capabilities as much as possible. As an example, consider this payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const userNotification = {\n  payload: {\n    userData: 'userDataValue',\n    userDataNum: 111.2,\n    userDataFlag: true,\n    userDataArray: ['rock', 'paper', 'scissors'],\n    userDataObj: {\n      cascadedKey: 'cascadedValue'\n    },\n  },\n};\n")),(0,i.kt)("p",null,"The outcome on the native side will be such that all of these conditions evaluate to ",(0,i.kt)("em",{parentName:"p"},"true"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'activity.getIntent().getStringExtra("userData") == "userDataValue";\nactivity.getIntent().getDoubleExtra("userDataNum") == 111.2;\nactivity.getIntent().getBooleanExtra("userDataFlag") == true;\nactivity.getIntent().getStringArrayExtra("userDataArray")[0] == "rock";\nactivity.getIntent().getBundleExtra("userDataObj").getString("cascadedKey") == "cascadedValue";\n')),(0,i.kt)("h5",{id:"handling-at-runtime"},"Handling at Runtime"),(0,i.kt)("p",null,"Note that on Android, data delivered through an intent at runtime, is typically received in your activity\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/android/app/Activity#onNewIntent(android.content.Intent)"},(0,i.kt)("inlineCode",{parentName:"a"},"onNewIntent"))," callback. Be sure to consider what should be done in order to handle this type of a use case in your app: Namely, that ",(0,i.kt)("inlineCode",{parentName:"p"},"setIntent()")," should be called in order for the data to be later available in your app through ",(0,i.kt)("inlineCode",{parentName:"p"},"getIntent()"),", as explained earlier."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"This isn\u2019t related to Detox in particular"),", and is set here simply to help you consider all the use cases in your app so that tests coverage would be optimal.")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wix/detox/blob/master/detox/ios/DetoxUserNotificationTests/user_notification_calendar_trigger.json"},"Calendar Trigger")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wix/detox/blob/master/detox/ios/DetoxUserNotificationTests/user_notification_location_trigger.json"},"Location Trigger")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wix/detox/blob/master/detox/ios/DetoxUserNotificationTests/user_notification_timeInterval_trigger.json"},"Time Interval Trigger")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wix/detox/blob/master/detox/ios/DetoxUserNotificationTests/user_notification_push_trigger.json"},"Push Trigger"))))}s.isMDXComponent=!0}}]);