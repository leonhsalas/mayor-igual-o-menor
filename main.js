console.log("Hello world adios")

var uno = 50

var dos = 50

var tres = 20

if(uno = dos && dos > tres && uno > tres){
    console.log("uno y dos son iguales pero tres es menor")
}else if(dos = tres && tres > uno &&  dos > uno){
    console.log("dos y tres son iguales pero uno es menor")
}else if(tres = uno && dos > uno && tres > uno){
    console.log("tres y uno son iguales pero dos es menor")
}else if(uno = dos && dos > tres &&  uno > tres){
    console.log("uno y dos son iguales pero tres es menor")
}else if(uno = dos && dos < tres && uno < tres){
    console.log("uno y dos son iguales pero tres es mayor")
}else if(dos = tres && tres < uno &&  dos < uno){
    console.log("dos y tres son iguales pero uno es mayor")
}else if(tres = uno && dos < uno && tres < uno){
    console.log("tres y uno son iguales pero dos es mayor")
}else if(uno = dos && dos < tres &&  uno < tres){
    console.log("uno y dos son iguales pero tres es mayor")
}else if(uno = dos && uno == tres){
    console.log("Todos los numeros son iguales")
}else if(uno > dos && uno > tres && dos > tres){
    console.log("uno es mayor dos es el medio y tres es el menor")
}else if(dos > uno && dos > tres && uno > tres){
    console.log("dos es el mayor uno es medio y tres es menor")
}else if(tres > uno && tres > dos && uno > dos){
    console.log("tres es el mayor uno es medio y dos es menor")
}else if(uno > dos && uno > tres && tres > dos){
    console.log("uno es el mayor tres es medio y dos es menor")
}else if(dos > uno && dos > tres && tres > uno){
    console.log("dos es el mayor tres es medio y uno es menor")
}else if(tres > uno && tres > dos && dos > uno){
    console.log("dos es el mayor uno es medio y tres es menor")
}