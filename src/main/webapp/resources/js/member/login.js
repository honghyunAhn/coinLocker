$(function(){
	loginer()
});

function loginer(){
	var str = '';
	for(var i = 0; i < 10; i++){
		str += '<br>';
	}
	str += '<h1>[ 로그인 ]</h1>';
	str += '<br>';
	str += '<br>';
	str += '<form>';
	str += '<table>';
	str += '<tr>';
	str += '<th>ID</th>';
	str += '<td><input type = "text" id = "id" name = "id"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>PW</th>';
	str += '<td><input type = "password" id = "password" name = "password"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '</tr>';
	str += '<tr>';
	str += '<td colspan="2" class = "tab1">';
	str += '<input type = "button" id = "bt1" value = "로그인">';
	str += '<input type = "button" id = "bt2" value = "홈화면">';
	str += '</td>';
	str += '</tr>';
	str += '</table>';
	str += '</form>';
	
	$("#div01").html(str);
	$("#bt1").on("click", login);
	$("#bt2").on("click", gohome);
}
function login(){
	var id = $("#id").val();
	var password = $("#password").val();
	if(id.length < 3 || id.length > 10){
		alert("ID를 3~10자 입력하세요.");
		return;
	}
	if(password.length < 3 || password.length > 10){
		alert("비밀번호를 3~10자 입력하세요.");
		return;
	}
	$.ajax({
		url : "login",
		type : "POST",
		data : {
			id : id,
			password : password
		},
		success : function(member){
			if(member == ""){
				alert("로그인 실패!");
				loginer()
			} else{
				results();
			}
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	})
}

function results(){
	var str = "";
	for(var i = 0; i < 15; i++){
		str += "<br>";
	}
	str += "<h1>로그인 하셨습니다.</h1>";
	$("#div01").html(str);
	setTimeout(function(){
		location.href = "gohome";
	},1000);
}

function gohome(){
	location.href = "gohome";
};