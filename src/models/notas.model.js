const calificaciones=[

]

const postCalificaciones = async (nuevaCal) => {
    if(typeof nuevaCal.apellido!== 'string'||typeof nuevaCal.nombre!== 'string'||nuevaCal.nota < 0 || nuevaCal.nota >10){
        throw new Error("“Los datos ingresados no son válidos")

    }else{
        nuevaCal.id = calificaciones.length + 1;

    await calificaciones.push(nuevaCal) 
    return nuevaCal
    }

}
const getCalificaciones = async () => {
    return calificaciones
  }

  const getCalificacionesAgrupadas = async () => {
    
    const calificacionesAgrupadas = [];
  
    calificaciones.forEach((calificacion) => {
      let alumno = calificacionesAgrupadas.find(
        (a) => a.nombre === calificacion.nombre && a.apellido === calificacion.apellido
      );
  
     
      if (!alumno) {
        calificacionesAgrupadas.push({
          nombre: calificacion.nombre,
          apellido: calificacion.apellido,
          notas: [calificacion.nota],
        });
      } else {
        
        alumno.notas.push(calificacion.nota);
      }
    });
  
    return calificacionesAgrupadas;
  }





export default {
    postCalificaciones,
    getCalificaciones,
    getCalificacionesAgrupadas
    

}