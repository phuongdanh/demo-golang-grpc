(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{115:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t(8);function i(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))}}var s=document.getElementById("snack-zone");s&&Object(r.render)(Object(r.h)(a.a,{lifespan:"3"}),s),top.addSnackbarItem=a.b;var c=setInterval(o((function*(){var e=document.body.dataset,n=e.user,i=void 0===n?null:n,s=e.userStatus;if("logged-out"!==s){if("logged-in"===s&&null!==i){clearInterval(c);var u=document.querySelector("#comment-subscription");try{var l=yield t.e(77).then(t.bind(null,255)),d=l.getCommentSubscriptionStatus,f=l.setCommentSubscriptionStatus,p=l.CommentSubscription,b=document.querySelector("#article-body").dataset.articleId,m=(yield d(b)).config,v=function(){var e=o((function*(e){var n=yield f(b,e);Object(a.b)({message:n,addCloseButton:!0})}));return function(n){return e.apply(this,arguments)}}();Object(r.render)(Object(r.h)(p,{subscriptionType:m,positionType:"static",onSubscribe:v,onUnsubscribe:v}),u)}catch(y){document.querySelector("#comment-subscription").innerHTML='<p className="color-accent-danger">Unable to load Comment Subscription component.<br />Try refreshing the page.</p>'}}}else clearInterval(c)})))},14:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return c}));var r=t(1),a=t.n(r),i=t(6),o=t(5),s=a.a.shape({body_text:a.a.arrayOf(a.a.string)}),c=a.a.shape({id:a.a.number.isRequired,title:a.a.string.isRequired,path:a.a.string.isRequired,cloudinary_video_url:a.a.string,video_duration_in_minutes:a.a.number,type_of:a.a.oneOf(["podcast_episodes"]),class_name:a.a.oneOf(["PodcastEpisode","User","Article"]),flare_tag:i.a,tag_list:a.a.arrayOf(a.a.string),cached_tag_list_array:a.a.arrayOf(a.a.string),podcast:a.a.shape({slug:a.a.string.isRequired,title:a.a.string.isRequired,image_url:a.a.string.isRequired}),user_id:a.a.string.isRequired,user:a.a.shape({username:a.a.string.isRequired,name:a.a.string.isRequired}),organization:o.a,highlight:s,public_reactions_count:a.a.number,reactions_count:a.a.number,comments_count:a.a.number,reading_time:a.a.number})},15:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t(1),i=t.n(a),o=t(2);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e){var n=e.variant,t=e.className,r=e.contentType,a=e.size,i=e.inverted,o=e.disabled,s="";return n&&n.length>0&&"primary"!==n&&(s+=" crayons-btn--".concat(n)),a&&a.length>0&&"default"!==a&&(s+=" crayons-btn--".concat(a)),r&&r.length>0&&"text"!==r&&(s+=" crayons-btn--".concat(r)),o&&(s+=" crayons-btn--disabled"),i&&(s+=" crayons-btn--inverted"),t&&t.length>0&&(s+=" ".concat(t)),s}var l=function(e){var n=e.children,t=e.variant,a=void 0===t?"primary":t,i=e.tagName,o=void 0===i?"button":i,l=e.inverted,d=e.contentType,f=void 0===d?"text":d,p=e.size,b=void 0===p?"default":p,m=e.className,v=e.icon,y=e.url,h=e.buttonType,g=e.disabled,O=e.onClick,j=e.onMouseOver,_=e.onMouseOut,k=e.onFocus,w=e.onBlur,R=e.tabIndex,q=e.title,N=c(e,["children","variant","tagName","inverted","contentType","size","className","icon","url","buttonType","disabled","onClick","onMouseOver","onMouseOut","onFocus","onBlur","tabIndex","title"]),S=o,P=v,T="button"===o?{type:h,disabled:g}:{href:g?void 0:y};return Object(r.h)(S,s({className:"crayons-btn".concat(u({variant:a,size:b,contentType:f,className:m,icon:v,inverted:l,disabled:"a"===o&&g,children:n})),onClick:O,onMouseOver:j,onMouseOut:_,onFocus:k,onBlur:w,tabIndex:R,title:q},T,N),"text"!==f&&"icon-right"!==f&&P&&Object(r.h)(P,null),("text"===f||"icon-left"===f||"icon-right"===f)&&n,"text"!==f&&"icon-right"===f&&P&&Object(r.h)(P,null))};l.displayName="Button",l.defaultProps={className:void 0,icon:void 0,url:void 0,buttonType:"button",disabled:!1,inverted:!1,onClick:void 0,onMouseOver:void 0,onMouseOut:void 0,onFocus:void 0,onBlur:void 0,tabIndex:void 0,title:void 0},l.propTypes={children:o.c.isRequired,variant:i.a.oneOf(["primary","secondary","outlined","danger","ghost","ghost-brand","ghost-success","ghost-warning","ghost-danger"]).isRequired,contentType:i.a.oneOf(["text","icon-left","icon-right","icon","icon-rounded"]).isRequired,inverted:i.a.bool,tagName:i.a.oneOf(["a","button"]).isRequired,className:i.a.string,icon:i.a.node,url:i.a.string,buttonType:i.a.string,disabled:i.a.bool,size:i.a.oneOf(["default","s","l","xl"]).isRequired,onClick:i.a.func,onMouseOver:i.a.func,onMouseOut:i.a.func,onFocus:i.a.func,onBlur:i.a.func,tabIndex:i.a.number,title:i.a.string}},18:function(e,n,t){"use strict";var r=t(15);t.d(n,"a",(function(){return r.a}))},2:function(e,n,t){"use strict";t.d(n,"g",(function(){return i})),t.d(n,"c",(function(){return o.a})),t.d(n,"d",(function(){return s.a})),t.d(n,"f",(function(){return c.a})),t.d(n,"b",(function(){return u.b})),t.d(n,"a",(function(){return u.a})),t.d(n,"e",(function(){return l}));var r=t(1),a=t.n(r),i=a.a.shape({id:a.a.string.isRequired,name:a.a.string.isRequired,profile_image_url:a.a.string.isRequired,summary:a.a.string.isRequired}),o=t(9),s=t(5),c=t(6),u=t(14),l=a.a.shape({tags:a.a.arrayOf(a.a.string).isRequired,onClick:a.a.func.isRequired,onKeyPress:a.a.func.isRequired})},20:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0),a=function(){return Object(r.h)("svg",{className:"crayons-icon crayons-spinner",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(r.h)("path",{d:"M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z",fill:"currentColor"}))}},22:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(0),a=t(1),i=t.n(a),o=t(2),s=t(3),c={children:o.c.isRequired,actions:i.a.arrayOf(i.a.shape({message:i.a.string.isRequired,handler:i.a.func.isRequired,lifespan:i.a.number.isRequired}))},u=function(e){var n=e.message,t=e.actions,a=void 0===t?[]:t;return Object(r.h)("div",{className:"crayons-snackbar__item flex"},Object(r.h)("div",{className:"crayons-snackbar__body",role:"alert"},n),Object(r.h)("div",{className:"crayons-snackbar__actions"},a.map((function(e){var n=e.text,t=e.handler;return Object(r.h)(s.a,{variant:"ghost-success",inverted:!0,onClick:t,key:n},n)}))))};u.displayName="SnackbarItem",u.propTypes=c.isRequired},25:function(e,n,t){"use strict";t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return _}));var r=t(0),a=t(1),i=t.n(a),o=t(22);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=h(e);if(n){var a=h(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return v(this,t)}}function v(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?y(e):n}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O=[];function j(e){Array.isArray(e.actions)||(e.actions=[]),O.push(e)}var _=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(s,e);var n,t,a,i=m(s);function s(){var e;f(this,s);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return g(y(e=i.call.apply(i,[this].concat(t))),"state",{snacks:[]}),g(y(e),"pollingId",void 0),g(y(e),"paused",!1),g(y(e),"pauseLifespan",void 0),g(y(e),"resumeLifespan",void 0),e}return n=s,(t=[{key:"componentDidMount",value:function(){this.initializePolling()}},{key:"componentDidUpdate",value:function(){var e=this;this.pauseLifespan||(this.pauseLifespan=function(n){e.paused=!0},this.resumeLifespan=function(n){n.stopPropagation(),e.paused=!1},this.element.addEventListener("mouseover",this.pauseLifespan),this.element.addEventListener("mouseout",this.resumeLifespan,!0))}},{key:"componentWillUnmount",value:function(){this.element&&(this.element.removeEventListener("mouseover",this.pauseLifespan),this.element.addEventListener("mouseout",this.resumeLifespan))}},{key:"initializePolling",value:function(){var e=this,n=this.props,t=n.pollingTime,r=n.lifespan;this.pollingId=setInterval((function(){if(O.length>0){var n=O.map((function(e){return d(d({},e),{},{lifespan:r})}));O=[],e.updateSnackbarItems(n),n.forEach((function(n){n.lifespanTimeoutId=setTimeout((function(){e.decreaseLifespan(n)}),1e3),n.addCloseButton&&n.actions.push({text:"Dismiss",handler:function(){e.setState((function(e){return{prevState:e,snacks:e.snacks.filter((function(e){return e!==n}))}}))}})}))}}),t)}},{key:"updateSnackbarItems",value:function(e){this.setState((function(n){var t=[].concat(c(n.snacks),c(e));return t.length>3&&(t.slice(0,t.length-3).forEach((function(e){var n=e.lifespanTimeoutId;clearTimeout(n)})),t=t.slice(t.length-3)),d(d({},n),{},{snacks:t})}))}},{key:"decreaseLifespan",value:function(e){var n=this;if(!this.paused&&0===e.lifespan)return clearTimeout(e.lifespanTimeoutId),void this.setState((function(n){var t=n.snacks.filter((function(n){return n!==e}));return d(d({},n),{},{snacks:t})}));this.paused||(e.lifespan-=1),e.lifespanTimeoutId=setTimeout((function(){n.decreaseLifespan(e)}),1e3)}},{key:"render",value:function(){var e=this,n=this.state.snacks;return Object(r.h)("div",{className:n.length>0?"crayons-snackbar":"hidden",ref:function(n){e.element=n}},n.map((function(e){var n=e.message,t=e.actions,a=void 0===t?[]:t;return Object(r.h)(o.a,{message:n,actions:a})})))}}])&&p(n.prototype,t),a&&p(n,a),s}(r.Component);_.defaultProps={lifespan:5,pollingTime:300},_.displayName="SnackbarPoller",_.propTypes={lifespan:i.a.number,pollingTime:i.a.number}},3:function(e,n,t){"use strict";t.d(n,"a",(function(){return r.a})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return p})),t.d(n,"f",(function(){return v})),t.d(n,"e",(function(){return g})),t.d(n,"g",(function(){return O.a}));var r=t(18),a=t(0),i=t(2),o=function(e){var n=e.children;return Object(a.h)("div",{role:"presentation",className:"crayons-btn-group"},n)};o.displayName="ButtonGroup",o.propTypes={children:i.c.isRequired};var s=t(1),c=t.n(s),u=t(9);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=function(e){var n=e.children,t=e.className,r=d(e,["children","className"]);return Object(a.h)("div",l({className:"crayons-dropdown".concat(t&&t.length>0?" ".concat(t):"")},r),n)};f.defaultProps={className:void 0},f.displayName="Dropdown",f.propTypes={children:u.a.isRequired,className:c.a.string};var p=function(e){var n=e.children,t=e.variant;return Object(a.h)("div",{className:"crayons-field".concat(t&&t.length>0?" crayons-field--".concat(t):"")},n)};function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}p.displayName="FormField",p.defaultProps={variant:void 0},p.propTypes={children:i.c.isRequired,variant:c.a.oneOf(["radio","checkbox"])};var v=function(e){var n=e.id,t=e.value,r=e.name,i=e.className,o=e.checked,s=e.onClick,c=m(e,["id","value","name","className","checked","onClick"]);return Object(a.h)("input",b({id:n,value:t,name:r,className:"crayons-radio".concat(i&&i.length>0?" ".concat(i):""),checked:o,onClick:s,type:"radio"},c))};function y(e){var n=e.size,t=e.className,r="";return n&&n.length>0&&"default"!==n&&(r+=" crayons-modal--".concat(n)),t&&t.length>0&&(r+=" ".concat(t)),r}v.displayName="RadioButton",v.defaultProps={id:void 0,className:void 0,checked:!1,name:void 0},v.propTypes={id:c.a.string,value:c.a.string.isRequired,className:c.a.string,checked:c.a.bool,name:c.a.string,onClick:c.a.func.isRequired};var h=function(){return Object(a.h)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:"crayons-icon",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":"714d29e78a3867c79b07f310e075e824"},Object(a.h)("title",{id:"714d29e78a3867c79b07f310e075e824"},"Close"),Object(a.h)("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"}))},g=function(e){var n=e.children,t=e.size,i=void 0===t?"default":t,o=e.className,s=e.title,c=e.overlay,u=e.onClose;return Object(a.h)("div",{"data-testid":"modal-container",className:"crayons-modal".concat(y({size:i,className:o}))},Object(a.h)("div",{role:"dialog","aria-modal":"true",className:"crayons-modal__box"},s.length>0&&s&&Object(a.h)("div",{className:"crayons-modal__box__header"},Object(a.h)("h2",null,s),Object(a.h)(r.a,{icon:h,variant:"ghost",contentType:"icon","aria-label":"Close",onClick:u})),Object(a.h)("div",{className:"crayons-modal__box__body"},n)),c&&Object(a.h)("div",{"data-testid":"modal-overlay",className:"crayons-modal__overlay"}))};g.displayName="Modal",g.defaultProps={className:void 0,overlay:!0,onClose:void 0},g.propTypes={children:i.c.isRequired,className:c.a.string,title:c.a.string.isRequired,overlay:c.a.bool,onClose:c.a.func,size:c.a.oneOf(["default","s","m"]).isRequired};var O=t(20)},5:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(1),a=t.n(r),i=a.a.shape({id:a.a.number.isRequired,name:a.a.string.isRequired,slug:a.a.string.isRequired,profile_image_90:a.a.string.isRequired})},6:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(1),a=t.n(r),i=a.a.shape({id:a.a.number.isRequired,name:a.a.string.isRequired,hotness_score:a.a.number.isRequired,points:a.a.number.isRequired,bg_color_hex:a.a.string.isRequired,text_color_hex:a.a.string.isRequired})},8:function(e,n,t){"use strict";var r=t(25);t.d(n,"a",(function(){return r.a})),t.d(n,"b",(function(){return r.b}));t(22)},9:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(1),a=t.n(r),i=a.a.oneOfType([a.a.arrayOf(a.a.node),a.a.node])}},[[115,40,0]]]);
//# sourceMappingURL=articlePage-5e23895a0c2b3746cf94.chunk.js.map