// ? :

const pontuacsoUsuario = 1000;
const nivelUsuario = pontuacsoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';
console.log(nivelUsuario);
// ? == if 
// : == else

const corUsuario = null
const corPadrao = corUsuario || 'preta'
console.log(corPadrao);

/*if (pontuacsoUsuario >= 1000){
    console.log('Usuario Vip');
} else{
    console.log('Usuario normal');
}*/