$(document).ready(function(){
	lockerchecker();
});

function lockerchecker(){
	var str = '';
	str += '<h1>[ 로커 이름 확인 ]</h1>';
	str += '<form>';
	str += '<table>';
	str += '<tr>';
	str += '<th>이름</th>';
	str += '<td><input type = "text" id = "name" name = "name" placeholder="3글자이상 10자 이하"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<td colspan="2" class = "tab1">';
	str += '<input type = "button" id = "bt1" value = "이름확인">';
	str += '</td>';
	str += '</tr>';
	str += '</table>';
	str += '</form>';
	
	$("#div01").html(str);
	$("#bt1").on("click", function(){
		lockercheck();
	});
};

function lockercheck(){
	var name = $("#name").val();
	if(name.length < 3 || name.length > 10){
		alert("이름을 잘 못 입력했습니다.");
		return;
	}
	$.ajax({
		url : "lockercheck",
		type : "POST",
		data : {name : name},
		success : function(locker){
			console.log(locker);
			if(name == locker.name){
				$("#div01").html("<br><br><br><h1>" + name + "사용 중입니다.</h1>");
				$("#id").val('');
				$("#id").focus();
				setTimeout(function(){
					lockerchecker();
				},500);
			}else{
				var str = "<div id='divb'><input type='button' id = 'bt2' value='ID사용'></div>"
				$("#div01").html("<br><br><h1>"+ name + "사용할 수 있습니다. </h1><br>" + str);
				$("#bt2").on("click", function() {
					$("#name",opener.document).val(name);
					window.self.close();
				});
			}
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
};
