$(document).ready(function(){
	idcheck();
});

function idcheck(){
	var str = '';
	str += '<h1>[ ID 확인 ]</h1>';
	str += '<form>';
	str += '<table>';
	str += '<tr>';
	str += '<th>ID</th>';
	str += '<td><input type = "text" id = "id" name = "id" placeholder="3글자이상 10자 이하"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<td colspan="2" class = "tab1">';
	str += '<input type = "button" id = "bt1" value = "ID확인">';
	str += '</td>';
	str += '</tr>';
	str += '</table>';
	str += '</form>';
	
	$("#div01").html(str);
	$("#bt1").on("click", function(){
		checkaj();
	});
};

function checkaj(){
	var id = $("#id").val();
	if(id.length < 3 || id.length > 10){
		alert("ID를 잘 못 입력했습니다.");
		return;
	}
	$.ajax({
		url : "idcheck",
		type : "POST",
		data : {id : id},
		success : function(member){
			if(id == member.id){
				$("#div01").html("<br><br><br><h1>" + id + "사용 중입니다.</h1>");
				$("#id").val('');
				$("#id").focus();
				setTimeout(function(){
					idcheck();
				},500);
			}else{
				var str = "<div id='divb'><input type='button' id = 'bt2' value='ID사용'></div>"
				$("#div01").html("<br><br><h1>"+ id + "사용할 수 있습니다. </h1><br>" + str);
				$("#bt2").on("click", function() {
					$("#id",opener.document).val(id);
					window.self.close();
				});
			}
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}