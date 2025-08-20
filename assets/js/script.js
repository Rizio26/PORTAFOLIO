// Script mínimo para la versión estática del portafolio
// Actualmente la página usa contenido estático y una imagen fija en assets/img/avatar.svg
// Este archivo se deja preparado por si deseas añadir interactividad adicional.

document.addEventListener('DOMContentLoaded', ()=>{
  // Ejemplo: permitir imprimir desde el botón si existe
  const btnPrint = document.getElementById('btnPrint');
  if(btnPrint){
    btnPrint.addEventListener('click', ()=> window.print());
  }

  const btnExport = document.getElementById('btnExport');
  if(btnExport){
    btnExport.addEventListener('click', ()=>{
      const txt = `Tu Nombre\nDesarrollador/a Full Stack\nCiudad, País | tucorreo@ejemplo.com | +34 600 000 000\n\nResumen:\nSoy desarrollador/a con conocimientos en herramientas y tecnologías listadas.\n\nHerramientas/Tech:\nVisual Studio Code, HTML5, CSS3, JavaScript, .NET, Node.js`;
      const blob = new Blob([txt], {type:'text/plain;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'cv.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    });
  }
});
