(()=>{"use strict";document.getElementById("add-task-form").addEventListener("submit",(e=>{e.preventDefault(),function(){const e=document.getElementById("task"),t=document.getElementById("todo-list"),n=document.getElementById("add-task-form"),d=document.createElement("li"),o=Date.now();d.id=`listElm-${o}`,d.textContent=e.value,t.appendChild(d),e.value="",n.style.display="none",function(e){const n=document.createElement("button");n.textContent="löschen",e.appendChild(n),n.addEventListener("click",(()=>{t.removeChild(e)}))}(d),(e=>{const t=document.getElementById(e),n=document.createElement("button");n.id="editBtn",n.textContent="Bearbeiten",n.addEventListener("click",(()=>{const e=t.textContent.trim(),n=document.createElement("input");n.type="text",n.value=e,t.appendChild(n);const d=document.createElement("button");function o(){const e=n.value.trim();t.textContent=e,t.removeChild(n),t.removeChild(d)}d.textContent="Speichern",t.appendChild(d),d.addEventListener("click",o),n.addEventListener("keydown",(e=>{"Enter"===e.key&&o()}))})),t.appendChild(n)})(`listElm-${o}`)}()})),function(){const e=document.getElementById("show-input-btn"),t=document.getElementById("input-container"),n=document.getElementById("add-task-form");e.addEventListener("click",(()=>{t.style.display="block",n.style.display="block"}))}()})();