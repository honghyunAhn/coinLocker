$(document).ready(function(){
	inserter();
});
function inserter(){
	var str = '';
	str += '<h1>[ 로커 입력 ]</h1>';
	str += '<br><br>';
	str += '<form>';
	str += '<table>';
	str += '<tr>';
	str += '<th>이름</th>';
	str += '<td><input type = "text" id = "name" placeholder="락커 이름 입력" readonly="readonly">';
	str += '<input type = "button" id = "bt3" value = "중복 확인">';
	str += '</td>';
	str += '<tr>';
	str += '<th>지역</th>';
	str += '<td><input type = "text" id = "region" placeholder="지역 이름 입력"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>역</th>';
	str += '<td><input type = "text" id = "station" placeholder="역 이름 입력"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>락커 열</th>';
	str += '<td><input type = "text" id = "crow" placeholder="락커 열 갯수"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<th>락커 행</th>';
	str += '<td><input type = "text" id = "cline" placeholder="락커 행 갯수"></td>';
	str += '</tr>';
	str += '<tr>';
	str += '<td colspan="2" class = "tab1">';
	str += '<input type = "button" id = "bt1" value = "입력">';
	str += '<input type = "button" id = "bt2" value = "홈화면">';
	str += '</td>';
	str += '</tr>';
	str += '</table>';
	str += '</form>';			
	$("#div01").html(str);
	$("#bt1").on("click", insert);
	$("#bt2").on("click", gohome);
	$("#bt3").on("click", lockercheck);
}
function insert(){
	var name = $("#name").val();
	var region = $("#region").val();
	var station = $("#station").val();
	var crow = $("#crow").val();
	var cline = $("#cline").val();
	if(name.length == 0){
		alert("id를 입력해주세요.");
		return;
	}
	if(region.length == 0){
		alert("지역 이름을 입력해주세요.");
		return;
	}
	if(station.length == 0){
		alert("역을 이름을 입력해주세요.");
		return;
	}
	if(crow.length > 1 || crow.length == 0 || isNaN(crow)){
		alert("열을 숫자로 1자리 입력하세요.");
		return;
	}
	if(cline.length > 1 || cline.length == 0 || isNaN(cline)){
		alert("행을 숫자로 1자리 입력하세요.");
		return;
	}
	$.ajax({
		url : "insert",
		type : "post",
		data : {
			name : name,
			region : region,
			station : station,
			crow : crow,
			cline : cline
		},
		success : function(){
			insertlocker();
			if(confirm("계속 입력하시겠습니까?")){
				$("#name").val('');
				$("#name").focus();
				$("#region").val('');
				$("#station").val('');
				$("#crow").val('');
				$("#cline").val('');
			}else{
				location.href = "gohome";
			}
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
};

function insertlocker(){
	var name = $("#name").val();
	var crow = $("#crow").val();
	var cline = $("#cline").val();
	var num = crow * cline;
	for(var i = 1 ; i < num+1 ; i++){
		$.ajax({
			url : "insertlocker",
			type : "post",
			data : {
				name : name,
				num : i
			},
			error : function(e){
				alert(JSON.stringify(e));
			}
		});
	}
	
}

function results(){
	var str = "";
	for(var i = 0; i < 15; i++){
		str += "<br>";
	}
	str += "<h1>로커 입력 완료</h1>";
	$("#div01").html(str);
	setTimeout(function(){
		location.href = "gohome";
	},1000);
}

function gohome(){
	location.href = "gohome";
};

function lockercheck(){
	window.open("lockercheck", "lockergo", "top=200,left=400,width=500,height=300,location=no");
};
