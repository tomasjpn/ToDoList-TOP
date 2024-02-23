(()=>{"use strict";function e(e){localStorage.setItem("todoList",JSON.stringify(e))}function t(){const e=localStorage.getItem("todoList");return e?JSON.parse(e):null}function n(e){const t=document.getElementById(e),n=document.getElementById("task-description"),d=document.createElement("span");d.id="description-display",d.style.display="none",t.appendChild(d);const o=document.createElement("button");o.id="description-btn",o.textContent="Mehr Details",o.addEventListener("click",(()=>{"none"===d.style.display?(d.textContent=n.value,d.style.display="block",o.textContent="Weniger anzeigen"):(d.style.display="none",o.textContent="Mehr Details")})),t.appendChild(o)}const d=e=>{const t=document.getElementById(e),n=document.createElement("button");n.id="editBtn",n.textContent="Bearbeiten",n.addEventListener("click",(()=>{t.textContent.trim();const e=document.createElement("input"),n=document.createElement("input"),d=document.createElement("input");n.type="date",n.value="",e.type="text",e.value="",e.placeholder="Titel",d.type="text",d.value="",d.placeholder="Details",t.appendChild(e),t.appendChild(d),t.appendChild(n);const o=document.createElement("button");function i(){const i=e.value.trim(),l=n.value.trim(),c=d.value.trim();t.textContent=i,t.textContent+=" "+c,t.textContent+=" "+l,t.removeChild(e),t.removeChild(o)}o.textContent="Speichern",t.appendChild(o),o.addEventListener("click",i),e.addEventListener("keydown",(e=>{"Enter"===e.key&&i()}))})),t.appendChild(n)};t(),document.getElementById("add-task-form").addEventListener("submit",(t=>{t.preventDefault(),function(){const t=document.getElementById("task"),o=document.getElementById("todo-list"),i=document.getElementById("add-task-form"),l=(document.getElementById("task-description"),document.getElementById("task-date")),c=document.createElement("li"),a=Date.now();c.id=`listElm-${a}`,c.textContent=`${t.value}-${l.value}`,o.appendChild(c),t.value="",i.style.display="none",e(o.innerHTML),function(t){const n=document.createElement("button");n.textContent="löschen",n.id="deleteTask-btn",t.appendChild(n),n.addEventListener("click",(()=>{o.removeChild(t)})),e(o.innerHTML)}(c),d(`listElm-${a}`),n(`listElm-${a}`)}()})),document.addEventListener("DOMContentLoaded",(function(){const e=t();e&&(document.getElementById("todo-list").innerHTML=e)})),document.addEventListener("DOMContentLoaded",(function(){!function(e){const t=document.getElementById("todo-list");t.innerHTML="",e.forEach((e=>{const o=document.createElement("li");o.textContent=`${e.title} - ${e.date}`,t.appendChild(o),document.getElementById("editBtn").addEventListener("click",d(e)),document.getElementById("deleteTask-btn").addEventListener("click",(function(){t.removeChild(o)})),document.getElementById("description-btn").addEventListener("click",n(o))}))}()})),function(){const e=document.getElementById("show-input-btn"),t=document.getElementById("input-container"),n=document.getElementById("add-task-form");document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("add-task-form"),t=document.createElement("input");t.type="text",t.id="task-description",t.name="taskDescription",t.placeholder="Beschreibung der Aufgabe",e.insertBefore(t,e.lastElementChild);const n=document.createElement("input");n.type="date",n.id="task-date",n.name="taskDate",e.insertBefore(n,e.lastElementChild)})),e.addEventListener("click",(()=>{t.style.display="block",n.style.display="block"}))}(),function(){const t=document.getElementById("addCategory-Btn");t.addEventListener("click",(function(){const n=document.createElement("input");n.type="text",n.placeholder="Name der Category";const d=Date.now();n.id=`category-${d}`,t.parentNode.insertBefore(n,t.nextSibling);const o=document.createElement("button");o.id=`saveAddButton-${d}`,o.textContent="Bestätigen",t.parentNode.insertBefore(o,n.nextSibling),o.addEventListener("click",(function(){if(""!==n.value.trim()){const e=document.createElement("button");e.textContent=n.value,e.id=`categoryBtn-${d}`,e.addEventListener("click",(function(e){e.preventDefault(),document.getElementById("todo-list").innerHTML=""}));const t=document.getElementById("home-Btn");t.parentNode.insertBefore(e,t.nextElementSibling),n.remove(),o.remove()}})),n.addEventListener("keypress",(function(t){if("Enter"===t.key&&""!==t.target.value.trim()){const o=document.createElement("button");o.textContent=t.target.value,o.id=`categoryBtn-${d}`,o.addEventListener("click",(function(t){t.preventDefault(),e(document.getElementById("todo-list").innerHTML),document.getElementById("todo-list").innerHTML="",n.value=""}));const i=document.getElementById("home-Btn");i.parentNode.insertBefore(o,i.nextElementSibling),t.target.remove()}}))}))}(),document.getElementById("home-Btn").addEventListener("click",(function(e){e.preventDefault();const n=t();document.getElementById("todo-list").innerHTML=null!==n?n:"<p>Keine Todos gefunden. Füge einige hinzu!</p>"}))})();