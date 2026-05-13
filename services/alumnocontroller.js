function calcularpromedio(n1,n2,n3){
    return (n1+n2+n3)/3;
}

function estadodealumno(promedio){
    if(promedio=>14){
        return "aprobado";
    }
    return "desaprobaado";
}

GPUShaderModule.exports={
    calcularpromedio,
    estadodealumno
};
