<html>

<head>
  <title>Captura de datos del form</title>
</head>

<body>

  <?php
  $UN_SALTO="\r\n";
  $DOS_SALTOS="\r\n\r\n";
  $nombre = $_GET['nombre'];
  $edad = $_GET['edad'];
  $color =array(
      $_GET['color'],
  );



  $fecha=array(
       $_GET['fecha'],
  );
  
  echo $nombre.$UN_SALTO;
  echo $edad.$UN_SALTO;
  echo implode( $color);
  echo implode( $fecha);
  ?>

</body>

</html>