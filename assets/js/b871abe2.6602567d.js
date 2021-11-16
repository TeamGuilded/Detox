"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[955],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9208:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"writing-first-test",slug:"introduction/writing-first-test",title:"Writing Your First Test",sidebar_label:"Writing Your First Test"},l=void 0,p={unversionedId:"writing-first-test",id:"writing-first-test",isDocsHomePage:!1,title:"Writing Your First Test",description:"Writing Your First Test",source:"@site/../docs/Introduction.WritingFirstTest.md",sourceDirName:".",slug:"/introduction/writing-first-test",permalink:"/Detox/docs/introduction/writing-first-test",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Introduction.WritingFirstTest.md",tags:[],version:"current",frontMatter:{id:"writing-first-test",slug:"introduction/writing-first-test",title:"Writing Your First Test",sidebar_label:"Writing Your First Test"},sidebar:"tutorialSidebar",previous:{title:"Detox for Android",permalink:"/Detox/docs/introduction/android"},next:{title:"How Detox Works",permalink:"/Detox/docs/introduction/how-detox-works"}},c=[{value:"Writing Your First Test",id:"writing-your-first-test",children:[{value:"Detox Recorder",id:"detox-recorder",children:[],level:3},{value:"Step 1: Prepare a JavaScript File to Hold Your Scenario (Spec)",id:"step-1-prepare-a-javascript-file-to-hold-your-scenario-spec",children:[],level:3},{value:"Step 2: Decide how to Reset Your App for the Beginning of the Scenario",id:"step-2-decide-how-to-reset-your-app-for-the-beginning-of-the-scenario",children:[],level:3},{value:"Step 3: Add <code>testID</code>s to Your App to Assist in Matching Elements",id:"step-3-add-testids-to-your-app-to-assist-in-matching-elements",children:[],level:3},{value:"Step 4: Match an Element and Perform an Action",id:"step-4-match-an-element-and-perform-an-action",children:[],level:3},{value:"Step 5: Set an Expectation on the Result",id:"step-5-set-an-expectation-on-the-result",children:[],level:3},{value:"Step 6: Rinse and Repeat",id:"step-6-rinse-and-repeat",children:[],level:3},{value:"Step 7: Run Your Tests and Make Sure They Pass",id:"step-7-run-your-tests-and-make-sure-they-pass",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"writing-your-first-test"},"Writing Your First Test"),(0,i.kt)("p",null,"This tutorial assumes you\u2019ve already installed Detox successfully on a working React Native project."),(0,i.kt)("h3",{id:"detox-recorder"},"Detox Recorder"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder"),", our tool for recording tests directly from your device."),(0,i.kt)("h3",{id:"step-1-prepare-a-javascript-file-to-hold-your-scenario-spec"},"Step 1: Prepare a JavaScript File to Hold Your Scenario (Spec)"),(0,i.kt)("p",null,"Every Detox test scenario is usually placed in its own JavaScript file. If you\u2019ve followed the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/getting-started"},"installation tutorial"),", these files are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/e2e/*.spec.js")," under your React Native project root. Feel free to place these files wherever you like, this directory structure is just a recommendation."),(0,i.kt)("p",null,"If you\u2019re using Mocha as your test runner, these files will simply be executed one by one when you run your tests."),(0,i.kt)("p",null,"If you\u2019ve followed the installation tutorial, you should already have ",(0,i.kt)("inlineCode",{parentName:"p"},"firstTest.spec.js")," as a placeholder to start from."),(0,i.kt)("h3",{id:"step-2-decide-how-to-reset-your-app-for-the-beginning-of-the-scenario"},"Step 2: Decide how to Reset Your App for the Beginning of the Scenario"),(0,i.kt)("p",null,"In order to start the scenario from a predictable app state and reset the state from any previous scenarios that may have been running, it\u2019s customary to start the scenario by restarting the app."),(0,i.kt)("p",null,"The fastest way to reset is by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"await device.reloadReactNative();"),". This is equivalent to pressing CMD+R in the simulator window - it will just reload the React Native bundle. You can find other alternatives that may be slower but more thorough ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/api/device-object-api"},"here"),"."),(0,i.kt)("p",null,"Our scenario is made from multiple different test cases (",(0,i.kt)("inlineCode",{parentName:"p"},"it()")," clauses). We usually want to reset before each one is running. This can be accomplished by placing the reset logic inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeEach()")," clause."),(0,i.kt)("h3",{id:"step-3-add-testids-to-your-app-to-assist-in-matching-elements"},"Step 3: Add ",(0,i.kt)("inlineCode",{parentName:"h3"},"testID"),"s to Your App to Assist in Matching Elements"),(0,i.kt)("p",null,"Most test cases start by finding a UI element on screen (",(0,i.kt)("em",{parentName:"p"},"matching"),") and performing some user interaction on it (",(0,i.kt)("em",{parentName:"p"},"action"),"). To assist in finding the correct UI element, it\u2019s recommended to mark it in some way. The best practice is to use the ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view.html#testid"},(0,i.kt)("inlineCode",{parentName:"a"},"testID"))," prop for this purpose. This means we\u2019ll modify the app code and add these props to various elements."),(0,i.kt)("p",null,"Note that not all React components support this prop. Most of the built-in native components in React Native like ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TextInput"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ScrollView")," have support though. If you create your own composite components, you will have to propagate this prop manually to the correct native component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<View>\n  <TouchableOpacity testID='MyUniqueId123'>\n    <Text>Some button</Text>\n  </TouchableOpacity>\n</View>\n")),(0,i.kt)("h3",{id:"step-4-match-an-element-and-perform-an-action"},"Step 4: Match an Element and Perform an Action"),(0,i.kt)("p",null,"Choose a method to match your element, the various alternatives are documented ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/api/matchers"},"here"),". You will most likely be relying on ",(0,i.kt)("inlineCode",{parentName:"p"},"testID")," which means our matching code will look like ",(0,i.kt)("inlineCode",{parentName:"p"},"element(by.id('MyUniqueId123'))"),"."),(0,i.kt)("p",null,"Choose an action to perform on the element, the various alternatives are documented ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/api/actions-on-element"},"here"),". If we have a button, a ",(0,i.kt)("inlineCode",{parentName:"p"},"tap")," is probably what you\u2019re looking for, resulting in this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"await element(by.id('MyUniqueId123')).tap();\n")),(0,i.kt)("h3",{id:"step-5-set-an-expectation-on-the-result"},"Step 5: Set an Expectation on the Result"),(0,i.kt)("p",null,"After performing the action, the app will most likely do something. The process might also take a little time - for example if we\u2019re logging in, there would be a server request. The great thing about detox is that you\u2019re not supposed to worry about synchronization and how much time actions take. Detox will monitor the app and continue to the next line in your test only when the app completes pending operations and becomes idle."),(0,i.kt)("p",null,"The most natural expectation is to verify that some UI element has eventually appeared on screen as a result. Like before, we\u2019ll need to match this element first. We can keep using ",(0,i.kt)("inlineCode",{parentName:"p"},"testID")," for this purpose with ",(0,i.kt)("inlineCode",{parentName:"p"},"element(by.id('AnotherUniqueId456'))"),"."),(0,i.kt)("p",null,"The various available expectations are documented ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/api/expect"},"here"),". If we want to make sure an element is visible, we\u2019ll get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"await expect(element(by.id('AnotherUniqueId456'))).toBeVisible();\n")),(0,i.kt)("p",null,"Note that the visibility matcher makes sure the element is actually visible on screen (at least 75% of it to be exact). If it appears under the fold (e.g. the user has to scroll to see it), this specific matcher will fail."),(0,i.kt)("h3",{id:"step-6-rinse-and-repeat"},"Step 6: Rinse and Repeat"),(0,i.kt)("p",null,"Create more complicated test cases by stringing actions and expectations one after the other. Explore the rest of the API to see what other things you can do in your tests."),(0,i.kt)("p",null,"Add more test cases to your file by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"it()")," clauses. Add new scenarios by adding new ",(0,i.kt)("inlineCode",{parentName:"p"},"*.spec.js")," files."),(0,i.kt)("h3",{id:"step-7-run-your-tests-and-make-sure-they-pass"},"Step 7: Run Your Tests and Make Sure They Pass"),(0,i.kt)("p",null,"This is usually done by running ",(0,i.kt)("inlineCode",{parentName:"p"},"detox test")," in terminal. If your test is not passing and you don\u2019t understand why, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/troubleshooting/running-tests"},"troubleshooting tutorial"),"."),(0,i.kt)("p",null,"How do you continue from here? Read about the various recommended workflows with detox documented ",(0,i.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/workflows"},"here"),". Hopefully you\u2019ll find a workflow that makes sense moving forward and complements your development process."))}d.isMDXComponent=!0}}]);