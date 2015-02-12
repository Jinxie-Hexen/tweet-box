<?php
	
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$messages = strip_tags($_POST["messages"]);
		
		require("db.php");
		
		mysql_query("START TRANSACTION");
		mysql_query("INSERT INTO tweet_box (messages) VALUES ('$messages')");
		mysql_query("COMMIT");
		
		mysql_close($db);
	}
?>