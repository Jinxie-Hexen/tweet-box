var messages = {
	getAllMessages: function() {
		self.clearMessages();
		$.ajax({
		   url: "http://localhost/tweet-box/messages.php",
		   dataType: "json"
		}).done(function(data) {
			for (var m in data) {
				self.displayMessage(data[m].messages);
			}
		});

	},
	displayMessage: function(messageText) {
		if ($(".message").hasClass("current") == false) {
			$(".message").html(messageText)
				         .addClass("current")
					     .show();
		} 
		else {
			var current = $(".current").clone()
				                       .html(messageText);
			$(".current").after(current)
						 .removeClass("current");
		}
	},
	addMessage: function(messageText) {
		$.ajax({
		   url: "http://localhost/tweet-box/add.php",
		   type: "POST",
		   data: {
		       content:messageText
		   }
		}).done(function(data) {
			console.log(data);
			self.getAllMessages();
		}).fail(function(jqXHR,status) {
			console.log("Fail: " + status);
		});

	},
	clearMessages: function(messageText) {
		$(".message").remove();
		$(".content > .row").html('<div class="twelve columns message"></div>');
	}
}
var self = messages;


$(document).ready(function() {

	self.getAllMessages();
	
	$("#message-btn").click(function() {
		var messageText = $("#message-txt").val();
		if (messageText != "") {
			messages.addMessage(messageText);
		}
	});

});