<?php
    include 'conect.php';

    $cmd = $_GET['cmd'];

    switch ($cmd){
    case 'region':
        $consulta   = "SELECT * FROM region";
         $resultado  = mysqli_query($con, $consulta);

         $i=0;
         $datos = array();
         while ($region = mysqli_fetch_array($resultado)){
             $datos[$i] = $region;
             $i++;   
         }
         $json = json_encode($datos);
         echo $json;
     break;

     case 'rutvalidar':

        $rut = $_GET['rut'];

        $consulta   = "SELECT `rut` FROM `participante` WHERE rut = '$rut'";
        $resultado  = mysqli_query($con, $consulta);

        if($resultado->num_rows > 0)
		{
			$fila = mysqli_fetch_assoc($resultado);
			if($fila['rut'] == $rut){						
                echo 1;  
            }
								
		}else{
            echo 2;
        }
		

     break;

     case 'insertar':
        $nombre     = $_GET['nombre'];
        $apellido   = $_GET['apellido'];
        $email      = $_GET['email'];
        $rut        = $_GET['rut'];
        $telefono   = $_GET['telefono'];
        $region     = $_GET['region'];

        

        $consulta   = "SELECT `rut` FROM `participante` WHERE rut = '$rut'";
        $resultado  = mysqli_query($con, $consulta);

        if($resultado->num_rows > 0)
		{
			$fila = mysqli_fetch_assoc($resultado);
			if($fila['rut'] == $rut){						
                echo 1;  
            }
								
		}else{

            $consulta2 = "INSERT INTO `participante`(`nombre`, `apellido`, `email`, `rut`, `telefono`, `region`) VALUES ('$nombre','$apellido','$email','$rut','$telefono','$region')";
            $resultado2  = mysqli_query($con, $consulta2);
            echo 2;
        }
		
     break;


     default :
     echo "comando no valido";
    }

