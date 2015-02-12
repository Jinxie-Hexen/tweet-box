<?php
	
	$db = mysql_connect("localhost", "johndoe", "password");
	
	if (!$db) {
		die("Can not connect to database".mysql_error());	
	}
	else {
		mysql_select_db("tweet_box", $db);	
	}

?>