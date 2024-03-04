(()=>{"use strict";function e(e){localStorage.setItem("todos",JSON.stringify(e))}function t(){const e=localStorage.getItem("todos");if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch(e){return console.error("Error parsing todos from localStorage:",e),[]}}function n(e=""){const t=localStorage.getItem("inputValueArr"),n=t?JSON.parse(t):[];let d=n;e&&(d=n.filter((t=>t.category===e))),Array.isArray(d)&&d.length>0&&o(d)}function o(e){const n=document.getElementById("todo-list");n.innerHTML="",Array.isArray(e)||(e=[]),Array.isArray(e)||(e=[]).push(t()),e.forEach((e=>{const t=document.createElement("li");t.textContent=`${e.title} - ${e.date}`,n.appendChild(t);const o=document.createElement("button");o.textContent="Bearbeiten",o.addEventListener("click",(function(){const n=document.createElement("input"),a=document.createElement("input"),l=document.createElement("input");a.type="date",a.value=e.date,n.type="text",n.value=e.title,n.placeholder="Title",l.type="text",l.value=e.details,l.placeholder="Details",t.innerHTML="",t.appendChild(n),t.appendChild(l),t.appendChild(a);const r=document.createElement("button");function c(){let r=JSON.parse(localStorage.getItem("inputValueArr"))||[];const c=r.findIndex((t=>t.id===e.id));-1!==c&&(r[c].title=n.value.trim(),r[c].details=l.value.trim(),r[c].date=a.value),localStorage.setItem("inputValueArr",JSON.stringify(r)),t.textContent=r[c].title,t.textContent+=" "+r[c].details,t.textContent+=" "+r[c].date,t.appendChild(d),t.appendChild(o),t.appendChild(i)}function s(e){"Enter"===e.key&&c()}r.textContent="Speichern",t.appendChild(r),r.addEventListener("click",c),n.addEventListener("keydown",s),l.addEventListener("keydown",s),a.addEventListener("keydown",s)})),t.appendChild(o);const d=document.createElement("button");d.textContent="Delete",d.addEventListener("click",(function(){n.removeChild(t);let o=JSON.parse(localStorage.getItem("inputValueArr"))||[];o=o.filter((t=>t.id!==e.id)),localStorage.setItem("inputValueArr",JSON.stringify(o))})),t.appendChild(d),document.getElementById("task-description");const a=document.createElement("span");a.id="description-display",a.style.display="none",t.appendChild(a);const i=document.createElement("button");i.textContent="Details",i.addEventListener("click",(()=>{"none"===a.style.display?(a.textContent=e.details,a.style.display="block",i.textContent="Weniger anzeigen"):(a.style.display="none",i.textContent="Mehr Details")})),t.appendChild(i),n.appendChild(t)}))}t(),document.getElementById("add-task-form").addEventListener("submit",(t=>{t.preventDefault(),function(){let t=localStorage.getItem("currentCategory")||localStorage.getItem("homePage");const n=document.getElementById("task"),o=document.getElementById("todo-list"),d=document.getElementById("add-task-form"),a=document.getElementById("task-description"),i=document.getElementById("task-date"),l=document.createElement("li"),r=Date.now();l.id=`listElm-${r}`;let c=JSON.parse(localStorage.getItem("inputValueArr"))||[];const s={id:r,title:n.value,date:i.value,details:a.value,category:t};l.textContent=`${n.value}-${i.value}`,o.appendChild(l),c.push(s),localStorage.setItem("inputValueArr",JSON.stringify(c)),n.value="",d.style.display="none",e(o.innerHTML),function(t){const n=document.createElement("button");n.textContent="löschen",n.id="deleteTask-btn",t.appendChild(n),n.addEventListener("click",(()=>{o.removeChild(t),c=c.filter((e=>e.id!==r)),localStorage.setItem("inputValueArr",JSON.stringify(c)),e(o.innerHTML)}))}(l),(e=>{const t=document.getElementById(e),n=document.createElement("button");n.id="editBtn",n.textContent="Bearbeiten",n.addEventListener("click",(()=>{t.textContent.trim();const e=document.createElement("input"),n=document.createElement("input"),o=document.createElement("input");n.type="date",n.value="",e.type="text",e.value="",e.placeholder="Titel",o.type="text",o.value="",o.placeholder="Details",t.appendChild(e),t.appendChild(o),t.appendChild(n);const d=document.createElement("button");function a(){const d=e.value.trim(),a=n.value.trim(),i=o.value.trim();t.textContent=d,t.textContent+=" "+i,t.textContent+=" "+a}d.textContent="Speichern",t.appendChild(d),d.addEventListener("click",a),e.addEventListener("keydown",(e=>{"Enter"===e.key&&a()}))})),t.appendChild(n)})(`listElm-${r}`),function(e){const t=document.getElementById(e),n=document.getElementById("task-description"),o=document.createElement("span");o.id="description-display",o.style.display="none",t.appendChild(o);const d=document.createElement("button");d.id="description-btn",d.textContent="Mehr Details",d.addEventListener("click",(()=>{"none"===o.style.display?(o.textContent=n.value,o.style.display="block",d.textContent="Weniger anzeigen"):(o.style.display="none",d.textContent="Mehr Details")})),t.appendChild(d)}(`listElm-${r}`)}()})),document.addEventListener("DOMContentLoaded",(function(){n(localStorage.getItem("currentCategory")||"HomePage")})),document.addEventListener("DOMContentLoaded",(function(){const e=t();e&&(document.getElementById("todo-list").innerHTML=e)})),document.addEventListener("DOMContentLoaded",(function(){const e=t();Array.isArray(e)&&e.length>0?o(e):console.log("Keine gespeicherten Todos gefunden oder ungültiges Format.")})),function(){const e=document.getElementById("show-input-btn"),t=document.getElementById("input-container"),n=document.getElementById("add-task-form");document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("add-task-form"),t=document.createElement("input");t.type="text",t.id="task-description",t.name="taskDescription",t.placeholder="Beschreibung der Aufgabe",e.insertBefore(t,e.lastElementChild);const n=document.createElement("input");n.type="date",n.id="task-date",n.name="taskDate",e.insertBefore(n,e.lastElementChild)})),e.addEventListener("click",(()=>{t.style.display="block",n.style.display="block"}))}(),function(){const t=document.getElementById("addCategory-Btn"),o=Date.now();t.addEventListener("click",(function(){const d=document.createElement("input");d.type="text",d.placeholder="Name der Category",d.id=`category-${o}`,t.parentNode.insertBefore(d,t.nextSibling);const a=document.createElement("button");a.id=`saveAddButton-${o}`,a.textContent="Bestätigen",t.parentNode.insertBefore(a,d.nextSibling),a.addEventListener("click",(function(){if(""!==d.value.trim()){const e=document.createElement("button");e.textContent=d.value,e.id=`categoryBtn-${o}`,e.addEventListener("click",(function(t){t.preventDefault(),document.getElementById("todo-list").innerHTML="";const o=e.textContent;localStorage.setItem("currentCategory",o),n(o)}));const t=document.getElementById("home-Btn");t.parentNode.insertBefore(e,t.nextElementSibling),d.remove(),a.remove()}})),d.addEventListener("keypress",(function(t){if("Enter"===t.key&&""!==t.target.value.trim()){e(document.getElementById("todo-list").innerHTML);const d=document.createElement("button");d.textContent=t.target.value,d.id=`categoryBtn-${o}`,d.addEventListener("click",(function(e){e.preventDefault(),document.getElementById("todo-list").innerHTML="";const t=d.textContent;localStorage.setItem("currentCategory",t),n(t)}));const i=document.getElementById("home-Btn");i.parentNode.insertBefore(d,i.nextElementSibling),t.target.remove(),a.remove()}}))}))}(),function(){const e=document.getElementById("todo-list");document.getElementById("home-Btn").addEventListener("click",(function(t){t.preventDefault();const o=localStorage.getItem("HomePage");o?(e.innerHTML="",localStorage.setItem("currentCategory",o),n(o)):e.innerHTML="<p>Keine Todos gefunden. Füge einige hinzu!</p>"}))}()})();