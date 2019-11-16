<?php
	$con = mysql_connect("localhost:3306","root","") or die ("error");
	mysql_select_db("my_db",$con) or die ("error");
	mysql_query("set names 'utf8'");

// <?php
//	mysql_select_db("my_db",$con);
//
//	$sql = "select * from my_info";
//
//	$result = mysql_query($sql);
//
//	echo "<table class = 'table'>
//		<tr><th>id</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
//	" ;
//
//	while($row = mysql_fetch_array($result))
//	 {
//	 echo "<tr>";
//	 echo "<td>" . $row['id'] . "</td>";
//	 echo "<td>" . $row['info_1'] . "</td>";
//	 echo "<td>" . $row['info_2'] . "</td>";
//	 echo "<td>" . $row['info_3'] . "</td>";
//	 echo "<td>" . $row['info_4'] . "</td>";
//	 echo "<td>" . $row['info_5'] . "</td>";
//	 echo "</tr>";
//	 }
//
//	echo "</table>";
// ?>