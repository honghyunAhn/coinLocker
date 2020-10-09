$(document).ready(function(){
	join();
});

function join(){
	var str = '';
	str += '<h1>[ 회원가입 ]</h1>';
	str += '<br>';
	str += '<br>';
	str += '<form>';
	str += '<table>';
	str += '<tr>';
	str += '<th>ID</th>';
	str += '<td><input type = "text" id = "id" name = "id" placeholder="ID 확인 " readonly="readonly">';
	str += '<input type = "button" id = "bt3" value = "ID 확인"></td>';
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
	str += '<td><input type = "text" id = "name" name = "name" placeholder="이름을 입력하세요"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>전화번호</th>';
	str += '<td><input type = "text" id = "phone" name = "phone" placeholder="숫자만 입력하세요"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>email</th>';
	str += '<td><input type = "email" id = "email" name = "email" placeholder="e-mail을 입력하세요"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<td colspan="2" class = "tab1">';
	str += '<input type = "button" id = "bt1" value = "가입">';
	str += '<input type = "button" id = "bt2" value = "홈화면">';
	str += '</td>';
	str += '</tr>';
	str += '</table>';
	str += '</form>';

	$("#div01").html(str);
	$("#bt3").on("click", function(){
		window.open("idcheck", "idgo", "top=200,left=400,width=500,height=300,location=no");
	});
	$("#bt1").on("click", function(){
		joincheck();
	});
	$("#bt2").on("click", function(){
		location.href = "gohome";
	});
}

function joincheck(){
	var id = $("#id").val();
	var password = $("#password").val();
	var pw2 = $("#pw2").val();
	var name = $("#name").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	if(id.length < 3 || id.length > 10){
		alert("ID를 3~10자 입력하세요.");
		return;
	}
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
	if(email == 0){
		alert("emial을 입력해 주세요.");
		return;
	}
	$.ajax({
		url : "join",
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
	str += "<h1>회원가입 완료</h1>";
	$("#div01").html(str);
	setTimeout(function(){
		location.href = "gohome";
	},1000);
}