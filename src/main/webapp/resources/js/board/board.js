$(document).ready(function(){
	$("#gohome").on("click", gohome);
	$("#enterb").on("click", enterb);
	board();
});
function board(){
	$.ajax({
		url : "boardlist",
		type : "get",
		success : list,
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}

function enterb(){
	var contents = $("#contents").val();
	if(contents.length == 0){
		alert("내용을 입력해주세요");
		return;
	}
	$.ajax({
		url : "enterb",
		type : "POST",
		data : {
			contents : contents
		},
		success : function(){
			alert("후기 입력 완료");
			$("#contents").val("");
			board();
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}

function list(list){
	var id = $("#id").val();
	str = "<table>"
	str += "<tr>";
	str += "<th>번호</th>";
	str += "<th>ID</th>";
	str += "<th>내용</th>";
	str += "<th>등록 날짜</th>";
	str += "<th></th>";
	str += "</tr>";
	$.each(list, function(i, l){
		str += "<tr>";
		str += "<td>"+l.boardnum+"</td>";
		str += "<td>"+l.id+"</td>";
		str += "<td>"+l.contents+"</td>";
		str += "<td>"+l.inputdate+"</td>";
		str += "<td>";
		if(id == l.id || id == "aaa"){
			str += "<input type = 'button' value = '삭제' id = 'del"+l.boardnum+"'>"
		};
		str += "</td>";
		str += "</tr>";
	});
	str += "</table>"
	$("#div01").html(str);
	$.each(list, function(i, l){
		var num = l.boardnum;
		$("#del"+num).on("click", function(){
			delb(num);
		});
	});
}

function delb(num){
	if(confirm("삭제하시겠습니까?")){
		$.ajax({
			url : "boardel",
			type : "post",
			data : {
				boardnum : num
			},
			success : board,
			error : function(e){
				alert(JSON.stringify(e));
			}
		});
	}
}

function gohome(){
	location.href = "gohome";
}