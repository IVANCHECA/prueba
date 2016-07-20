var data = [];
function saveUsr() {
    var nombre = document.getElementById("nombre");
    var cedula = document.getElementById("cedula");
    var celular = document.getElementById("celular");
    var usr = {nombre: nombre.value, cedula: cedula.value, celular: celular.value};
    data.push(usr);

}   

function testObj() {
    let test = document.getElementById("test");
    var obj = {};
    obj.nombre = "dario";
    obj.cedula = 123;
    obj.pastuso = true;
    obj.fechadeNacimiento = new Date();
    obj.carros = [{placa:"wer-123",marca:"VMW"},{placa:"err-128",marca:"nissa"}]
    test.innerHTML = JSON.stringify(obj);
}