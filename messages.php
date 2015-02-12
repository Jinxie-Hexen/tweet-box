<?php
	
	require("db.php");
	
	//echo "Messages PHP";
	
	$result = mysql_query("SELECT * FROM messages ");
	
	if (!$result) {
		die("Noooo the query doesn't work". mysql_error());	
	}
	
	$messages = array();
	
	while ($row = mysql_fetch_assoc($result)) {	
		$messages[] = $row;
	}
	
	echo json_encode($messages);
	
	mysql_close($db);

?>