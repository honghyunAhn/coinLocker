$(document).ready(function(){
	inserter();
});
function inserter(){
	var id = $("#id").val();
	var name = $("#ename").val();
	var phone = $("#ephone").val();
	var email = $("#eemail").val();
	var str = '';
	str += '<h1>[ 개인 정보 수정 ]</h1>';
	str += '<br>';
	str += '<br>';
	str += '<form>';
	str += '<table>';
	str += '<tr>';
	str += '<th>ID</th>';
	str += '<td>'+id+'</td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th rowspan="2">PW</th>';
	str += '<td><input type = "password" id = "password" name = "password" placeholder="3글자이상 10자 이하"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<td><input type = "password" id = "pw2" name = "pw2" placeholder="비밀번호 확인"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>이름</th>';
	str += '<td><input type = "text" id = "name" name = "name" value = "'+name+'" placeholder="이름을 입력해주세요."></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>전화번호</th>';
	str += '<td><input type = "text" id = "phone" name = "phone" value = "'+phone+'" placeholder="숫자만 입력하세요."></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>email</th>';
	str += '<td><input type = "email" id = "email" name = "email" value = "'+email+'" placeholder="e-mail을 입력하세요."></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<td colspan="2" class = "tab1">';
	str += '<input type = "button" id = "bt1" value = "수정">';
	str += '<input type = "button" id = "bt2" value = "홈화면">';
	str += '</td>';
	str += '</tr>';
	str += '</table>';
	str += '</form>';

	$("#div01").html(str);
	$("#bt1").on("click", function(){
		edit();
	});
	$("#bt2").on("click", function(){
		location.href = "gohome";
	});
}
function edit(){
	var id = $("#id").val();
	var password = $("#password").val();
	var pw2 = $("#pw2").val();
	var name = $("#name").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	if(password.length < 3 || password.length > 10){
		alert("비밀번호를 3~10자 입력하세요.");
		return;
	}
	if(password != pw2){
		alert("비밀번호가 일치하지 않습니다.");
		return;
	}
	if(name.length == 0){
		alert("이름을 입력해주세요.");
		return;
	}
	if(phone.length == 0 || isNaN(phone)){
		alert("전화번호를 숫자로 써주세요.");
		return;
	}
	if(email.length == 0){
		alert("email을 입력해주세요.");
		return;
	}
	$.ajax({
		url : "edit",
		type : "POST",
		data : {
			id : id,
			password : password,
			name : name,
			phone : phone,
			email : email
		},
		success : results,
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}

function results(){
	var str = "";
	for(var i = 0; i < 15; i++){
		str += "<br>";
	}
	str += "<h1>회원 정보 수정 완료</h1>";
	$("#div01").html(str);
	setTimeout(function(){
		location.href = "gohome";
	},1000);
}

function gohome(){
	location.href = "gohome";
};