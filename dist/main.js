(()=>{"use strict";var e={832:(e,n,t)=>{t.d(n,{c:()=>d});var r=t(500),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([e.id,'/* CSS für den Titel */\nh1 {\n    font-family: Arial, sans-serif;\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n#todo-list-container{\n    font-family: Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#input-container {\n    font-family: Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n}\n\n/* Neue Aufgabe hinzufügen - Button*/\n#show-input-btn {\n    font-family: Arial, sans-serif;\n    margin: 20px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n    \n    border-radius: 30px;\n    border: none;\n\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n#app {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* +  - Button*/\n#addCategory-Btn {\n    margin: 0 15px;\n    border-radius: 40px;\n    border: none;\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n\n    cursor: pointer;\n    transition: background-color 0.3s;\n    \n}\n/* Home - Button*/\n#home-Btn{\n    border: none;\n\n    border-radius: 15px;\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n\n#category{\n    margin: 0 10px;\n\n}\n/*Neue Kategorien - Button*/\n.category-button {\n    border-radius: 15px; /* Abrunden der Ecken */\n    margin: 0 5px;\n    border: none; /* Seitenabstand */\n    /* Weitere Stile nach Bedarf */\n\n\n    padding: 10px 20px; /* Erhöht den Innenabstand */\n    font-size: 15px; /* Vergrößert die Schrift */\n\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n/* Hover Animationen */\n#home-Btn:hover {\n    background-color: #D3D3D3; \n    color: white; \n\n\n}\n\n#addCategory-Btn:hover {\n\n    background-color: #D3D3D3; \n    color: white; \n\n}\n\n.category-button:hover{\n    background-color: #D3D3D3; \n    color: white; \n\n}\n\n#show-input-btn:hover {\n    background-color: #D3D3D3; \n    color: white; \n\n}\n\n#submit-btn:hover{\n    background-color: #ffcf76; \n    color: white; \n}\n\n.saveAddButton:hover {\n    background-color: #ffcf76; \n    color: white; \n\n}\n\n\n.category-input{\n    padding: 10px; /* Fügt Innenabstand hinzu */\n    margin: 5px 0; /* Fügt Außenabstand oben und unten hinzu */\n    border-radius: 15px; /* Abrunden der Ecken */\n    border: 1px solid #ccc; /* Definiert eine Grenze */\n    font-size: 15px; /* Vergrößert die Schriftgröße */\n    \n}\n\n.saveAddButton {\n\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 10px 20px; /* Polsterung um den Text */\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 15px;\n    \n    margin: 0 5px;\n\n    transition: background-color 0.3s;\n\n}\n\n\n.deleteButton {\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 8px 10px; /* Polsterung um den Text */\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 10px;\n    \n    margin: 15 10px;\n\n}\n\n.editBtn {\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 8px 10px; /* Polsterung um den Text */\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 10px;\n    \n    margin: 15 10px;\n\n}\n\n.descriptionBtn, #description-btn, #deleteTask-btn, #editBtn{\n    background-color: orange; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    padding: 8px 16px; /* Polsterung um den Text */\n\n    margin: 5px 2px;\n    border: none; /* Keine Grenze */\n    border-radius: 15px; /* Ecken abrunden */\n    cursor: pointer; /* Cursor beim Überfahren */\n    font-size: 10px;\n\n\n}\n\n\n#todo-list {\n    margin-top: 10px; /* Fügt oben Abstand hinzu */\n    margin-bottom: 10px; /* Fügt unten Abstand hinzu */\n    padding: 10px; /* Optional: Fügt Innenabstand hinzu für mehr Platz innerhalb des Eintrags */\n    background-color: #f0f0f0; /* Optional: Hintergrundfarbe für bessere Sichtbarkeit */\n    border-radius: 15px; /* Optional: Abrunden der Ecken */\n    display: flex; /* Verwendet Flexbox */\n    flex-direction: column; /* Stellt sicher, dass die Einträge in einer Spalte angezeigt werden */\n    align-items: flex-start; /* Linksbündige Ausrichtung der Einträge */\n}\n\n#task, #task-date, #task-description, #submit-btn {\n    padding: 10px; /* Fügt Innenabstand hinzu */\n    margin: 5px 2px; /* Fügt Außenabstand oben und unten hinzu */\n    border-radius: 15px; /* Abrunden der Ecken */\n    border: 1px solid #ccc; /* Definiert eine Grenze */\n    font-size: 15px; /* Vergrößert die Schriftgröße */\n\n}\n\n#submit-btn{\n    background-color: #ffa500; /* Grüner Hintergrund */\n    color: white; /* Weiße Schrift */\n    cursor: pointer; /* Cursor beim Überfahren */\n    transition: background-color 0.3s;\n\n}\n\n\n\n\n\n\n\n  /* Checkbox*/\n\ninput[type="checkbox"] {\n    width: 20px; /* Breite der Checkbox */\n    height: 20px; /* Höhe der Checkbox */\n    margin-right: 5px; /* Abstand zwischen Checkbox und benachbarten Elementen */\n    /* Weitere Stile nach Bedarf */\n  }\n  \n  input[type="checkbox"]:checked {\n    /* Hier kannst du die Stile für die angeklickte Checkbox festlegen */\n    /* Zum Beispiel: */\n    background-color: #007bff; /* Hintergrundfarbe, wenn die Checkbox ausgewählt ist */\n    /* Weitere Stile nach Bedarf */\n  }\n\n  .todo-item {\n    display: flex; /* Verwendet Flexbox */\n    align-items: center; /* Zentriert die Elemente vertikal */\n\n  }\n\n  .todo-checkbox {\n    margin-right: 5px; /* Fügt einen Abstand zwischen Checkbox und Text hinzu */\n}\n\n',""]);const d=a},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var g=o(m,r);r.byIndex=d,n.splice(d,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var c=r(e,o),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=c}}},176:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){localStorage.setItem("todos",JSON.stringify(e))}function n(){const e=localStorage.getItem("todos");if(!e)return[];try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch(e){return console.error("Error parsing todos from localStorage:",e),[]}}function r(e=""){const n=localStorage.getItem("inputValueArr"),t=n?JSON.parse(n):[];let r=t;e&&(r=t.filter((n=>n.category===e))),Array.isArray(r)&&r.length>0&&o(r)}function o(e){const t=document.getElementById("todo-list");t.innerHTML="",Array.isArray(e)||(e=[]).push(n()),e.forEach((n=>{const r=document.createElement("li");r.classList.add("todo-item");const o=document.createElement("input");o.type="checkbox",o.classList.add("todo-checkbox"),o.checked=n.checked,o.addEventListener("change",(function(){const t=e.findIndex((e=>e.id===n.id));-1!==t&&(e[t].checked=o.checked,localStorage.setItem("inputValueArr",JSON.stringify(e)))})),r.appendChild(o);const i=document.createElement("span");i.textContent=`${n.title} - ${n.date}`,r.appendChild(i),t.appendChild(r);const a=document.createElement("button");a.textContent="Bearbeiten",a.classList.add("editBtn"),a.addEventListener("click",(function(){const e=document.createElement("input"),t=document.createElement("input"),o=document.createElement("input");t.type="date",t.value=n.date,e.type="text",e.value=n.title,e.placeholder="Title",o.type="text",o.value=n.details,o.placeholder="Details",e.classList.add("category-input"),t.classList.add("category-input"),o.classList.add("category-input"),r.innerHTML="",r.appendChild(e),r.appendChild(o),r.appendChild(t);const i=document.createElement("button");function c(){let i=JSON.parse(localStorage.getItem("inputValueArr"))||[];const c=i.findIndex((e=>e.id===n.id));-1!==c&&(i[c].title=e.value.trim(),i[c].details=o.value.trim(),i[c].date=t.value),localStorage.setItem("inputValueArr",JSON.stringify(i)),r.textContent=i[c].title,r.textContent+=" "+i[c].details,r.textContent+=" "+i[c].date,r.appendChild(d),r.appendChild(a),r.appendChild(l)}function s(e){"Enter"===e.key&&c()}i.textContent="Speichern",r.appendChild(i),i.classList.add("saveAddButton"),i.addEventListener("click",c),e.addEventListener("keydown",s),o.addEventListener("keydown",s),t.addEventListener("keydown",s)})),r.appendChild(a);const d=document.createElement("button");d.textContent="Delete",d.classList.add("deleteButton"),d.addEventListener("click",(function(){t.removeChild(r);let e=JSON.parse(localStorage.getItem("inputValueArr"))||[];e=e.filter((e=>e.id!==n.id)),localStorage.setItem("inputValueArr",JSON.stringify(e))})),r.appendChild(d),document.getElementById("task-description");const c=document.createElement("span");c.id="description-display",c.style.display="none",r.appendChild(c);const l=document.createElement("button");l.textContent="Details",l.classList.add("descriptionBtn"),l.addEventListener("click",(()=>{"none"===c.style.display?(c.textContent=n.details,c.style.display="block",l.textContent="Weniger anzeigen"):(c.style.display="none",l.textContent="Mehr Details")})),r.appendChild(l),t.appendChild(r)}))}n();var i=t(596),a=t.n(i),d=t(520),c=t.n(d),l=t(176),s=t.n(l),u=t(120),p=t.n(u),m=t(808),g=t.n(m),f=t(936),h=t.n(f),y=t(832),b={};b.styleTagTransform=h(),b.setAttributes=p(),b.insert=s().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=g(),a()(y.c,b),y.c&&y.c.locals&&y.c.locals,document.getElementById("add-task-form").addEventListener("submit",(n=>{n.preventDefault(),function(){let n=localStorage.getItem("currentCategory")||localStorage.getItem("homePage");n||(n="HomePage",localStorage.setItem("currentCategory",n));const t=document.getElementById("task"),r=document.getElementById("todo-list"),o=document.getElementById("add-task-form"),i=document.getElementById("task-description"),a=document.getElementById("task-date"),d=document.createElement("li"),c=Date.now();d.id=`listElm-${c}`,r.classList.add("todo-item");let l=JSON.parse(localStorage.getItem("inputValueArr"))||[];{const s=document.createElement("input");s.type="checkbox",s.classList.add("todo-checkbox"),s.checked=!1,s.addEventListener("change",(function(){const e=l.findIndex((e=>e.id===c));-1!==e&&(l[e].checked=s.checked,localStorage.setItem("inputValueArr",JSON.stringify(l)))})),d.appendChild(s);const u=document.createElement("span");u.textContent=`${t.value}-${a.value}`,d.appendChild(u),r.appendChild(d);const p={id:c,title:t.value,date:a.value,details:i.value,category:n,checked:s.checked};l.push(p),localStorage.setItem("inputValueArr",JSON.stringify(l)),t.value="",o.style.display="none",e(r.innerHTML)}!function(n){const t=document.createElement("button");t.textContent="löschen",t.id="deleteTask-btn",n.appendChild(t),t.addEventListener("click",(()=>{r.removeChild(n),l=l.filter((e=>e.id!==c)),localStorage.setItem("inputValueArr",JSON.stringify(l)),e(r.innerHTML)}))}(d),(e=>{const n=document.getElementById(e),t=document.createElement("button");t.id="editBtn",t.textContent="Bearbeiten",t.addEventListener("click",(()=>{const e=document.getElementById("todo-list"),r=document.createElement("input"),o=document.createElement("input"),i=document.createElement("input");o.type="date",o.value="",r.type="text",r.value="",r.placeholder="Titel",i.type="text",i.value="",i.placeholder="Details",n.appendChild(r),n.appendChild(i),n.appendChild(o);const a=document.createElement("button");function d(){const a=r.value.trim(),d=o.value.trim(),c=i.value.trim();n.textContent=a,n.textContent+=" "+c,n.textContent+=" "+d,n.appendChild(t);const l=document.createElement("button");l.textContent="Delete",l.addEventListener("click",(function(){e.removeChild(n);let t=JSON.parse(localStorage.getItem("inputValueArr"))||[];t=t.filter((e=>e.id!==todo.id)),localStorage.setItem("inputValueArr",JSON.stringify(t))})),n.appendChild(l);const s=document.createElement("span");s.id="description-display",s.style.display="none",n.appendChild(s);const u=document.createElement("button");u.textContent="Details",u.addEventListener("click",(()=>{"none"===s.style.display?(s.textContent=i.value,s.style.display="block",u.textContent="Weniger anzeigen"):(s.style.display="none",u.textContent="Mehr Details")})),n.appendChild(u)}function c(e){"Enter"===e.key&&d()}a.textContent="Speichern",n.appendChild(a),a.addEventListener("click",d),r.addEventListener("keydown",c),i.addEventListener("keydown",c),o.addEventListener("keydown",c)})),n.appendChild(t)})(`listElm-${c}`),function(e){const n=document.getElementById(e),t=document.getElementById("task-description"),r=document.createElement("span");r.id="description-display",r.style.display="none",n.appendChild(r);const o=document.createElement("button");o.id="description-btn",o.textContent="Mehr Details",o.addEventListener("click",(()=>{"none"===r.style.display?(r.textContent=t.value,r.style.display="block",o.textContent="Weniger anzeigen"):(r.style.display="none",o.textContent="Mehr Details")})),n.appendChild(o)}(`listElm-${c}`)}()})),document.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("currentCategory")||"HomePage";e||(e="HomePage",localStorage.setItem("currentCategory",e)),r(e)})),document.addEventListener("DOMContentLoaded",(function(){const e=n();e&&(document.getElementById("todo-list").innerHTML=e)})),document.addEventListener("DOMContentLoaded",(function(){const e=n();Array.isArray(e)&&e.length>0?o(e):console.log("Keine gespeicherten Todos gefunden oder ungültiges Format.")})),function(){const e=document.getElementById("show-input-btn"),n=document.getElementById("input-container"),t=document.getElementById("add-task-form");document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("add-task-form"),n=document.createElement("input");n.type="text",n.id="task-description",n.name="taskDescription",n.placeholder="Beschreibung der Aufgabe",e.insertBefore(n,e.lastElementChild);const t=document.createElement("input");t.type="date",t.id="task-date",t.name="taskDate",e.insertBefore(t,e.lastElementChild)})),e.addEventListener("click",(()=>{n.style.display="block",t.style.display="block"}))}(),function(){const n=document.getElementById("addCategory-Btn"),t=Date.now();n.addEventListener("click",(function(){const o=document.createElement("input");o.type="text",o.placeholder="Name der Kategorie",o.id=`category-${t}`,o.classList.add("category-input"),n.parentNode.insertBefore(o,n.nextSibling);const i=document.createElement("button");i.id=`saveAddButton-${t}`,i.textContent="Bestätigen",n.parentNode.insertBefore(i,o.nextSibling),i.classList.add("saveAddButton"),i.addEventListener("click",(function(){if(""!==o.value.trim()){const e=document.createElement("button");e.textContent=o.value,e.id=`categoryBtn-${t}`,e.classList.add("category-button"),e.addEventListener("click",(function(n){n.preventDefault(),document.getElementById("todo-list").innerHTML="";const t=e.textContent;localStorage.setItem("currentCategory",t),r(t)}));const n=document.getElementById("home-Btn");n.parentNode.insertBefore(e,n.nextElementSibling),o.remove(),i.remove()}})),o.addEventListener("keypress",(function(n){if("Enter"===n.key&&""!==n.target.value.trim()){e(document.getElementById("todo-list").innerHTML);const o=document.createElement("button");o.textContent=n.target.value,o.id=`categoryBtn-${t}`,o.classList.add("category-button"),o.addEventListener("click",(function(e){e.preventDefault(),document.getElementById("todo-list").innerHTML="";const n=o.textContent;localStorage.setItem("currentCategory",n),r(n)}));const a=document.getElementById("home-Btn");a.parentNode.insertBefore(o,a.nextElementSibling),n.target.remove(),i.remove()}}))}))}(),function(){localStorage.setItem("HomePage",!0);const e=document.getElementById("todo-list");document.getElementById("home-Btn").addEventListener("click",(function(n){n.preventDefault();const t=localStorage.getItem("HomePage");console.log("Current Category:",t),t?(e.innerHTML="",localStorage.setItem("currentCategory",!0),r(t)):e.innerHTML="<p>Keine Todos gefunden. Füge einige hinzu!</p>"}))}()})()})();