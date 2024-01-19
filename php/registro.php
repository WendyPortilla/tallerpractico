<?php
include'conexion.php';
$cedula=$_POST['cedula'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$direccion=$_POST['direccion'];
$email=$_POST['email'];
$pelicula=$_POST['pelicula'];
$f_reserva=$_POST['f_reserva'];
$cliente=$_POST['cliente'];
$pago=$_POST['pago'];


$consulta="INSERT INTO usuario(nombre,apellido,email)
values('$cedula',$nombre','$apellido','$direccion','$email','$pelicula','$f_reserva','$cliente','$pago')";
$resultado=mysqli_query($conexion,$consulta);

if($resultado){
    echo "Registro exitoso";
}else{
    echo "No se pudo registrar";
}
?>