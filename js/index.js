function mySend(content){
	var my_send = '<div class="message me">';
		my_send += '	<img class="avatar" src="images/user.jpg" />';
		my_send += '    <div class="content">';
		my_send += '        <div class="bubble bubble_primary right">';
		my_send += '            <div class="bubble_cont">';
		my_send += '                <div class="plain">';
		my_send += '                    <pre>'+content+'</pre>';
		my_send += '                </div>';
		my_send += '            </div>';
		my_send += '        </div>';
		my_send += '    </div>';
		my_send += '</div>';
	$('#messageList').append(my_send);
}
function reContent(content){
	var re_send = '<div class="message">';
		re_send += '	<img class="avatar" src="images/admin.jpg" />';
		re_send += '	<div class="content">';
		// re_send += '		<div class="nickname">四达时代</div>';
		re_send += '		<div class="bubble bubble_default left">';
		re_send += '			<div class="bubble_cont">';
		re_send += '				<div class="plain">';
		re_send += '					<pre>'+content+'</pre>';
		re_send += '				</div>';
		re_send += '			</div>';
		re_send += '		</div>';
		re_send += '	</div>';
		re_send += '</div>';
	$('#messageList').append(re_send);
}
function parseJSON(response) {
  return response.text();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}
$('#editArea').click(function(){
	$('#tip').show();
});
$('#btn_send').click(function(){
	if($('#editArea').val()){
		var send = $('#editArea').val();
		msgSend(send);
	}
});
$('.tip li').click(function(){
	msgSend($(this).html());
});
function msgSend(send){
	mySend(send);
	$("#messageList").scrollTop($("#messageList")[0].scrollHeight);
	$('#editArea').val('');
	$('#tip').hide();
	var options = {
		"mode": "cors",
		"Content-Type": "text/plain"
	};
	fetch('http://snomile.3322.org:8000/'+encodeURI(send), options)
	.then(checkStatus)
	.then(parseJSON)
	.then(function(data){
		reContent(data);
		$("#messageList").scrollTop($("#messageList")[0].scrollHeight);
	});
}
