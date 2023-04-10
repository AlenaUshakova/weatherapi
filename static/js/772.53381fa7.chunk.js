"use strict";(self.webpackChunkweatherapi=self.webpackChunkweatherapi||[]).push([[772],{1772:function(n,e,i){i.r(e),i.d(e,{default:function(){return O}});var o,t,r,l,a,s,c,d,x,p=i(168),h=i(7691),u=i(1087),g=h.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction:column;\n  padding: 10px;\n  font-size: 30px;\n  width: 100%;\n"]))),f=h.ZP.div(t||(t=(0,p.Z)(["\n  margin-top: 40px;\n  display: flex;\n  gap: 5px;\n  font-size: 10px;\n\n  @media screen and (min-width: 480px) {\n    font-size: 15px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 25px;\n  }\n"]))),m=(0,h.ZP)(u.OL)(r||(r=(0,p.Z)(["\n  padding: 8px 8px;\n  border-top-left-radius: 10px;\n  text-decoration: none;\n  color: white;\n  position: relative;\n  background-color: #2ca4f4;\n  transition: color linear 250ms, background-color linear 250ms,\n    border-right linear 250ms;\n\n  &.active {\n    color: #043385;\n    border-right: 1px solid #043385;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #043385;\n  }\n"]))),b=h.ZP.div(l||(l=(0,p.Z)(["\n  color: ",";\n  padding: 40px 0;\n  font-size: small;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  @media screen and (min-width: 480px) {\n    font-size: medium;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: x-large;\n  }\n\n  p {\n    margin: 0;\n    margin-bottom: 40px;\n    text-align: center;\n  }\n\n  ol {\n    margin: 0;\n    margin-bottom: 40px;\n  }\n"])),(function(n){return"dark"===n.theme?"white":" #043385"})),j=i(2791),w=i(5985),y=i(9993),v=h.ZP.div(a||(a=(0,p.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  width: 100%;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #2ca4f4;\n  border-radius: 20px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),k=h.ZP.form(s||(s=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),Z=h.ZP.button(c||(c=(0,p.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://www.svgrepo.com/show/197627/loupe-search.svg');\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),C=h.ZP.span(d||(d=(0,p.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),z=h.ZP.input(x||(x=(0,p.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),P=i(3190),S=i(184),A=function(){var n=(0,j.useContext)(y.S),e=n.query,i=n.setQuery,o=(0,j.useContext)(P.n).value;return(0,S.jsx)(v,{children:(0,S.jsxs)(k,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.input;return""===t.value?w.Am.error("en"===o?"You have not entered anything to search":"\u0412\u0438 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443"):e===t.value.toLowerCase()?w.Am.error("en"===o?"You are already viewing search results for '".concat(t.value,"'"):"\u0412\u0438 \u0432\u0436\u0435 \u0434\u0438\u0432\u0438\u0442\u0435\u0441\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043f\u043e\u0448\u0443\u043a\u0443 '".concat(t.value,"'")):(i(t.value),void n.target.reset())},children:[(0,S.jsx)(Z,{type:"submit",children:(0,S.jsx)(C,{children:"Search"})}),(0,S.jsx)(z,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"".concat("en"===o?"Select city":"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e"),name:"input"})]})})},F=i(7689),D=i(2116),O=function(){var n=(0,j.useContext)(y.S),e=n.query,i=n.setQuery,o=(0,j.useContext)(D.n).theme,t=(0,j.useContext)(P.n).value;return(0,j.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(n){i("".concat(n.coords.latitude,",").concat(n.coords.longitude))}),(function(n){1===n.code?w.Am.warning("en"===t?"To enable geolocation, please go to your browser settings and enable geolocation for this site.":"\u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430."):2===n.code?w.Am.warning("en"===t?"Sorry, geolocation is not available on your device.":"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435."):3===n.code&&w.Am.warning("en"===t?"Sorry, the geolocation request has expired. Please try again.":"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438\u0441\u0442\u0435\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")}))}),[]),(0,S.jsxs)(g,{children:[(0,S.jsx)(A,{}),e?(0,S.jsxs)(f,{children:[(0,S.jsx)(m,{to:"/",children:"en"===t?"today":"\u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456"}),(0,S.jsx)(m,{to:"tomorrow",children:"en"===t?"tomorrow":"\u0437\u0430\u0432\u0442\u0440\u0430"}),(0,S.jsx)(m,{to:"3days",children:"en"===t?"3 days":"3 \u0434\u043d\u0456"}),(0,S.jsx)(m,{to:"10days",children:"en"===t?"10 days":"10 \u0434\u043d\u0456\u0432"}),(0,S.jsx)(m,{to:"2weeks",children:"en"===t?"2 weeks":"2 \u0442\u0438\u0436\u043d\u044f"})]}):(0,S.jsx)(b,{theme:o,children:"en"===t?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("p",{children:"To increase the geolocation, be kind, go to nalashtuvannya of your browser and allow any geolocation for which website for instructions:"}),(0,S.jsx)("p",{style:{textDecoration:"underline"},children:"Chrome"}),(0,S.jsxs)("ol",{children:[(0,S.jsx)("li",{children:"On your computer, open Chrome"}),(0,S.jsx)("li",{children:'At the top right corner of the window, press on the icon with three dots \u2192 "Settings"'}),(0,S.jsx)("li",{children:'Choose "Privacy and security" \u2192 "Site settings".'}),(0,S.jsx)("li",{children:'Click "Geodata".'}),(0,S.jsx)("li",{children:"Choose the option that will function by default."})]}),(0,S.jsx)("p",{style:{textDecoration:"underline"},children:"Mozilla Firefox"}),(0,S.jsxs)("ol",{children:[(0,S.jsx)("li",{children:"Open on your computer Mozilla Firefox"}),(0,S.jsx)("li",{children:'If the browser menu is not displayed, press the "Alt".'}),(0,S.jsx)("li",{children:'Select "Tools" \u2192 "Page Information"'}),(0,S.jsx)("li",{children:'On the "Permissions" tab, select the "Know your location".'})]}),(0,S.jsx)("b",{children:"Or enter the city of interest in the search flow"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("p",{children:"\u0429\u043e\u0431 \u0443\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438 \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0456\u044e, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0432 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u0432\u043e\u0433\u043e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0456 \u0434\u043e\u0437\u0432\u043e\u043b\u044c\u0442\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0456\u0457 \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0443 \u0437\u0430 \u0456\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u0454\u044e:"}),(0,S.jsx)("p",{style:{textDecoration:"underline"},children:"Chrome"}),(0,S.jsxs)("ol",{children:[(0,S.jsx)("li",{children:"\u041d\u0430 \u043a\u043e\u043c\u043f'\u044e\u0442\u0435\u0440\u0456 \u0432\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 Chrome"}),(0,S.jsx)("li",{children:'\u0423 \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u043c\u0443 \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0443\u0442\u0456 \u0432\u0456\u043a\u043d\u0430 \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a \u0437 \u0442\u0440\u044c\u043e\u043c\u0430 \u043a\u0440\u0430\u043f\u043a\u0430\u043c\u0438 \u2192 "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f"'}),(0,S.jsx)("li",{children:'\u041e\u0431\u0435\u0440\u0456\u0442\u044c "\u041a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u0456\u0441\u0442\u044c \u0442\u0430 \u0431\u0435\u0437\u043f\u0435\u043a\u0430" \u2192 "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u0430\u0439\u0442\u0456\u0432".'}),(0,S.jsx)("li",{children:'\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c "\u0413\u0435\u043e\u0434\u0430\u043d\u0456".'}),(0,S.jsx)("li",{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u044f\u043a\u0438\u0439 \u0431\u0443\u0434\u0435 \u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c."})]}),(0,S.jsx)("p",{style:{textDecoration:"underline"},children:"Mozilla Firefox"}),(0,S.jsxs)("ol",{children:[(0,S.jsx)("li",{children:"\u041d\u0430 \u043a\u043e\u043c\u043f'\u044e\u0442\u0435\u0440\u0456 \u0432\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 Mozilla Firefox"}),(0,S.jsx)("li",{children:'\u042f\u043a\u0449\u043e \u043c\u0435\u043d\u044e \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043d\u0435 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u043a\u043b\u0430\u0432\u0456\u0448\u0443 "Alt".'}),(0,S.jsx)("li",{children:'\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0443\u043d\u043a\u0442 "\u0406\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438" \u2192 "\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"'}),(0,S.jsx)("li",{children:'\u041d\u0430 \u0432\u043a\u043b\u0430\u0434\u0446\u0456 "\u0414\u043e\u0437\u0432\u043e\u043b\u0438" \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 "\u0417\u043d\u0430\u0442\u0438 \u0432\u0430\u0448\u0435 \u043c\u0456\u0441\u0446\u0435\u0437\u043d\u0430\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f".'})]}),(0,S.jsx)("b",{children:"\u0410\u0431\u043e \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e, \u0449\u043e \u0446\u0456\u043a\u0430\u0432\u0438\u0442\u044c, \u0432 \u0441\u0442\u043e\u043a\u0443 \u043f\u043e\u0448\u0443\u043a\u0443"})]})}),(0,S.jsx)(F.j3,{})]})}}}]);
//# sourceMappingURL=772.53381fa7.chunk.js.map