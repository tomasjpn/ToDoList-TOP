(()=>{"use strict";var e={832:(e,t,n)=>{n.d(t,{c:()=>d});var r=n(500),o=n.n(r),i=n(312),a=n.n(i)()(o());a.push([e.id,"/* CSS für den Titel */\nh1 {\n    font-family: Arial, sans-serif;\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n#todo-list-container{\n    font-family: Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#input-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n}\n\n/* Neue Aufgabe hinzufügen - Button*/\n#show-input-btn {\n    font-family: Arial, sans-serif;\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n    \n    border-radius: 30px;\n    border: none;\n}\n\n#app {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* +  - Button*/\n#addCategory-Btn {\n    margin: 0 15px;\n    border-radius: 40px;\n    border: none;\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n\n    cursor: pointer;\n    \n}\n/* Home - Button*/\n#home-Btn{\n    border: none;\n\n    border-radius: 15px;\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n    cursor: pointer;\n}\n\n#category{\n    margin: 0 10px;\n\n}\n/*Neue Kategorien - Button*/\n.category-button {\n    border-radius: 15px; /* Abrunden der Ecken */\n    margin: 0 5px;\n    border: none; /* Seitenabstand */\n    /* Weitere Stile nach Bedarf */\n\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n\n    cursor: pointer;\n}\n\n.category-input{\n    padding: 10px; /* Fügt Innenabstand hinzu */\n    margin: 5px 0; /* Fügt Außenabstand oben und unten hinzu */\n    border-radius: 15px; /* Abrunden der Ecken */\n    border: 1px solid #ccc; /* Definiert eine Grenze */\n    font-size: 15px; /* Vergrößert die Schriftgröße */\n}\n\n.saveAddButton {\n\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 10px 20px; /* Polsterung um den Text */\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 15px;\n    \n    margin: 0 5px;\n\n}\n\n.deleteButton {\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 8px 10px; /* Polsterung um den Text */\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 10px;\n    \n    margin: 15 10px;\n\n}\n\n.editBtn {\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 8px 10px; /* Polsterung um den Text */\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 10px;\n    \n    margin: 15 10px;\n\n}\n\n.descriptionBtn{\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 8px 10px; /* Polsterung um den Text */\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 10px;\n    \n    margin: 15 10px;\n\n\n}\n\n#todo-list {\n    margin-top: 10px; /* Fügt oben Abstand hinzu */\n    margin-bottom: 10px; /* Fügt unten Abstand hinzu */\n    padding: 10px; /* Optional: Fügt Innenabstand hinzu für mehr Platz innerhalb des Eintrags */\n    background-color: #f0f0f0; /* Optional: Hintergrundfarbe für bessere Sichtbarkeit */\n    border-radius: 15px; /* Optional: Abrunden der Ecken */\n}",""]);const d=a},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var c=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=c}}},176:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){localStorage.setItem("todos",JSON.stringify(e))}function t(){const e=localStorage.getItem("todos");if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch(e){return console.error("Error parsing todos from localStorage:",e),[]}}function r(e=""){const t=localStorage.getItem("inputValueArr"),n=t?JSON.parse(t):[];let r=n;e&&(r=n.filter((t=>t.category===e))),Array.isArray(r)&&r.length>0&&o(r)}function o(e){const n=document.getElementById("todo-list");n.innerHTML="",Array.isArray(e)||(e=[]),Array.isArray(e)||(e=[]).push(t()),e.forEach((e=>{const t=document.createElement("li");t.textContent=`${e.title} - ${e.date}`,n.appendChild(t);const r=document.createElement("button");r.textContent="Bearbeiten",r.classList.add("editBtn"),r.addEventListener("click",(function(){const n=document.createElement("input"),i=document.createElement("input"),d=document.createElement("input");i.type="date",i.value=e.date,n.type="text",n.value=e.title,n.placeholder="Title",d.type="text",d.value=e.details,d.placeholder="Details",n.classList.add("category-input"),i.classList.add("category-input"),d.classList.add("category-input"),t.innerHTML="",t.appendChild(n),t.appendChild(d),t.appendChild(i);const c=document.createElement("button");function l(){let c=JSON.parse(localStorage.getItem("inputValueArr"))||[];const l=c.findIndex((t=>t.id===e.id));-1!==l&&(c[l].title=n.value.trim(),c[l].details=d.value.trim(),c[l].date=i.value),localStorage.setItem("inputValueArr",JSON.stringify(c)),t.textContent=c[l].title,t.textContent+=" "+c[l].details,t.textContent+=" "+c[l].date,t.appendChild(o),t.appendChild(r),t.appendChild(a)}function s(e){"Enter"===e.key&&l()}c.textContent="Speichern",t.appendChild(c),c.classList.add("saveAddButton"),c.addEventListener("click",l),n.addEventListener("keydown",s),d.addEventListener("keydown",s),i.addEventListener("keydown",s)})),t.appendChild(r);const o=document.createElement("button");o.textContent="Delete",o.classList.add("deleteButton"),o.addEventListener("click",(function(){n.removeChild(t);let r=JSON.parse(localStorage.getItem("inputValueArr"))||[];r=r.filter((t=>t.id!==e.id)),localStorage.setItem("inputValueArr",JSON.stringify(r))})),t.appendChild(o),document.getElementById("task-description");const i=document.createElement("span");i.id="description-display",i.style.display="none",t.appendChild(i);const a=document.createElement("button");a.textContent="Details",a.classList.add("descriptionBtn"),a.addEventListener("click",(()=>{"none"===i.style.display?(i.textContent=e.details,i.style.display="block",a.textContent="Weniger anzeigen"):(i.style.display="none",a.textContent="Mehr Details")})),t.appendChild(a),n.appendChild(t)}))}t();var i=n(596),a=n.n(i),d=n(520),c=n.n(d),l=n(176),s=n.n(l),u=n(120),p=n.n(u),m=n(808),g=n.n(m),f=n(936),y=n.n(f),h=n(832),x={};x.styleTagTransform=y(),x.setAttributes=p(),x.insert=s().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=g(),a()(h.c,x),h.c&&h.c.locals&&h.c.locals,document.getElementById("add-task-form").addEventListener("submit",(t=>{t.preventDefault(),function(){let t=localStorage.getItem("currentCategory")||localStorage.getItem("homePage");t||(t="HomePage",localStorage.setItem("currentCategory",t));const n=document.getElementById("task"),r=document.getElementById("todo-list"),o=document.getElementById("add-task-form"),i=document.getElementById("task-description"),a=document.getElementById("task-date"),d=document.createElement("li"),c=Date.now();d.id=`listElm-${c}`;let l=JSON.parse(localStorage.getItem("inputValueArr"))||[];const s={id:c,title:n.value,date:a.value,details:i.value,category:t};d.textContent=`${n.value}-${a.value}`,r.appendChild(d),l.push(s),localStorage.setItem("inputValueArr",JSON.stringify(l)),n.value="",o.style.display="none",e(r.innerHTML),function(t){const n=document.createElement("button");n.textContent="löschen",n.id="deleteTask-btn",t.appendChild(n),n.addEventListener("click",(()=>{r.removeChild(t),l=l.filter((e=>e.id!==c)),localStorage.setItem("inputValueArr",JSON.stringify(l)),e(r.innerHTML)}))}(d),(e=>{const t=document.getElementById(e),n=document.createElement("button");n.id="editBtn",n.textContent="Bearbeiten",n.addEventListener("click",(()=>{const e=document.getElementById("todo-list"),r=document.createElement("input"),o=document.createElement("input"),i=document.createElement("input");o.type="date",o.value="",r.type="text",r.value="",r.placeholder="Titel",i.type="text",i.value="",i.placeholder="Details",t.appendChild(r),t.appendChild(i),t.appendChild(o);const a=document.createElement("button");function d(){const a=r.value.trim(),d=o.value.trim(),c=i.value.trim();t.textContent=a,t.textContent+=" "+c,t.textContent+=" "+d,t.appendChild(n);const l=document.createElement("button");l.textContent="Delete",l.addEventListener("click",(function(){e.removeChild(t);let n=JSON.parse(localStorage.getItem("inputValueArr"))||[];n=n.filter((e=>e.id!==todo.id)),localStorage.setItem("inputValueArr",JSON.stringify(n))})),t.appendChild(l);const s=document.createElement("span");s.id="description-display",s.style.display="none",t.appendChild(s);const u=document.createElement("button");u.textContent="Details",u.addEventListener("click",(()=>{"none"===s.style.display?(s.textContent=i.value,s.style.display="block",u.textContent="Weniger anzeigen"):(s.style.display="none",u.textContent="Mehr Details")})),t.appendChild(u)}function c(e){"Enter"===e.key&&d()}a.textContent="Speichern",t.appendChild(a),a.addEventListener("click",d),r.addEventListener("keydown",c),i.addEventListener("keydown",c),o.addEventListener("keydown",c)})),t.appendChild(n)})(`listElm-${c}`),function(e){const t=document.getElementById(e),n=document.getElementById("task-description"),r=document.createElement("span");r.id="description-display",r.style.display="none",t.appendChild(r);const o=document.createElement("button");o.id="description-btn",o.textContent="Mehr Details",o.addEventListener("click",(()=>{"none"===r.style.display?(r.textContent=n.value,r.style.display="block",o.textContent="Weniger anzeigen"):(r.style.display="none",o.textContent="Mehr Details")})),t.appendChild(o)}(`listElm-${c}`)}()})),document.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("currentCategory")||"HomePage";e||(e="HomePage",localStorage.setItem("currentCategory",e)),r(e)})),document.addEventListener("DOMContentLoaded",(function(){const e=t();e&&(document.getElementById("todo-list").innerHTML=e)})),document.addEventListener("DOMContentLoaded",(function(){const e=t();Array.isArray(e)&&e.length>0?o(e):console.log("Keine gespeicherten Todos gefunden oder ungültiges Format.")})),function(){const e=document.getElementById("show-input-btn"),t=document.getElementById("input-container"),n=document.getElementById("add-task-form");document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("add-task-form"),t=document.createElement("input");t.type="text",t.id="task-description",t.name="taskDescription",t.placeholder="Beschreibung der Aufgabe",e.insertBefore(t,e.lastElementChild);const n=document.createElement("input");n.type="date",n.id="task-date",n.name="taskDate",e.insertBefore(n,e.lastElementChild)})),e.addEventListener("click",(()=>{t.style.display="block",n.style.display="block"}))}(),function(){const t=document.getElementById("addCategory-Btn"),n=Date.now();t.addEventListener("click",(function(){const o=document.createElement("input");o.type="text",o.placeholder="Name der Kategorie",o.id=`category-${n}`,o.classList.add("category-input"),t.parentNode.insertBefore(o,t.nextSibling);const i=document.createElement("button");i.id=`saveAddButton-${n}`,i.textContent="Bestätigen",t.parentNode.insertBefore(i,o.nextSibling),i.classList.add("saveAddButton"),i.addEventListener("click",(function(){if(""!==o.value.trim()){const e=document.createElement("button");e.textContent=o.value,e.id=`categoryBtn-${n}`,e.classList.add("category-button"),e.addEventListener("click",(function(t){t.preventDefault(),document.getElementById("todo-list").innerHTML="";const n=e.textContent;localStorage.setItem("currentCategory",n),r(n)}));const t=document.getElementById("home-Btn");t.parentNode.insertBefore(e,t.nextElementSibling),o.remove(),i.remove()}})),o.addEventListener("keypress",(function(t){if("Enter"===t.key&&""!==t.target.value.trim()){e(document.getElementById("todo-list").innerHTML);const o=document.createElement("button");o.textContent=t.target.value,o.id=`categoryBtn-${n}`,o.addEventListener("click",(function(e){e.preventDefault(),document.getElementById("todo-list").innerHTML="";const t=o.textContent;localStorage.setItem("currentCategory",t),r(t)}));const a=document.getElementById("home-Btn");a.parentNode.insertBefore(o,a.nextElementSibling),t.target.remove(),i.remove()}}))}))}(),function(){localStorage.setItem("HomePage",!0);const e=document.getElementById("todo-list");document.getElementById("home-Btn").addEventListener("click",(function(t){t.preventDefault();const n=localStorage.getItem("HomePage");console.log("Current Category:",n),n?(e.innerHTML="",localStorage.setItem("currentCategory",!0),r(n)):e.innerHTML="<p>Keine Todos gefunden. Füge einige hinzu!</p>"}))}()})()})();