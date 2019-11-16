<?php
    require_once "com.php";

	mysql_select_db("my_db",$con);

    class Food{
        public $id;
        public $name;
        public $price;
    }

	$sql = "select * from food";

	$result = mysql_query($sql);

	while($row = mysql_fetch_array($result))
	 {
            $food = new Food();
            $food->id = $row['id'];
            $food->name = $row['name'];
            $food->price = $row['price'];
            $data[] = $food;
	 }

    $json = json_encode($data);
    echo $json;


?>
