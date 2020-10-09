$(document).ready(function(){
	list();
});

function list(){
	var id = $("#id").val();
	
	$.ajax({
		url : "listup",
		type : "post",
		data : {
			id : id
		},
		success : function(list){
			var str = "<h1>[ 로커 반납 ]</h1>";
			str += "<br>";
			str += "<br>";
			str += "<table>";
			str += "<tr>";
			str += "<th>";
			str += "이름";
			str += "</th>";
			str += "<th>";
			str += "번호";
			str += "</th>";
			str += "<th>";
			str += "반납";
			str += "</th>";
			str += "</tr>";
			$.each(list, function(i, l){
				str += "<tr>";
				str += "<td>";
				str += l.name;
				str += "</td>";
				str += "<td>";
				str += l.num;
				str += "</td>";
				str += "<td>";
				str += "<input type = 'button' id = '"+l.num+"' value = '반납'>"
				str += "</td>";
				str += "</tr>";
			});
			str += "</table>";
			str += "<br>";
			str += "<input type = 'button' id = 'bt2' value ='홈으로'>"
			$("#div01").html(str);
			$("#bt2").on("click",function(){
				location.href = "gohome";
			});
			$.each(list, function(i, l){
				$("#"+l.num).on("click", function(){
					$.ajax({
						url : "returnLocker",
						type : "POST",
						data : {
							num : l.num,
							name : l.name
						},
						success : results,
						error : function(e){
							alert(JSON.stringify(e));
						}
					});
				});
			});
		},
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
	str += "<h1>로커 반납 완료</h1>";
	$("#div01").html(str);
	setTimeout(function(){
		location.href = "gohome";
	},1000);
}
