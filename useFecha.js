

export const useFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    fechaNueva.toLocaleDateString('es-ES', opciones)
  return fechaNueva
}
