import { rename } from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();

renombrarArchivo(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function renombrarArchivo(archivoEntrada, archivoSalida) {
    rename(archivoEntrada, archivoSalida, (err) => {
        if (err) {
            console.error('Error al renombrar el archivo:', err);
            return;
        }
        console.log(`Archivo renombrado exitosamente como ${archivoSalida}`);
    });
}

