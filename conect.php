<?php
   
        DEFINE ('DB_HOST', 'localhost');
	DEFINE ('DB_USER', 'root');
        DEFINE ('DB_PASSWORD', ''); 
        DEFINE ('DB_NAME', 'lun');

        $con=@mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
        or die('No se pudo conectar a la base de datos. '.mysqli_connect_error());
        mysqli_set_charset($con, 'utf8');
        
?>
