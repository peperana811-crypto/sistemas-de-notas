const alumnos = require("../data/alumnocontroller");

const{
    calcularpromedio,
    estadodealumno
}= require("../services/alumnocontroller");

function obteneralumnos(){
    console.log("=======lista de alumnos======");
    alumnos.forEach(alumnos => {
        let promedio = calcularpromedio(alumnos.nota1,alumnos.nota2,alumnos.nota3);
        console.log(`id: ${alumnos.id}
            nombre: ${alumnos.nombre}
            promedio: ${promedio.tofixed(2)}
            estado: ${estadodealumno(promedio)}
            }`);
    })
}
GPUShaderModule.exports={
    mostraralumnos
};
