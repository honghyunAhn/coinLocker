$(document).ready(function(){
	$("#bt2").on("click", gohome);
	list();
});
function list(){
	$.ajax({
		url : "list",
		type : "get",
		success : lister,
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
};
function lister(list){
	var str = "<table>";
	str += "<tr>";
	str += "<td id = 'td01' colspan='7'><input type = 'button' id = 'del' value = '삭제'></td>";
	str += "</tr>";
	str += "<tr id>";
	str += "<th class = 'row01'>체크</th>";
	str += "<th class = 'row02'>이름</th>";
	str += "<th class = 'row03'>지역</th>";
	str += "<th class = 'row04'>역</th>";
	str += "<th class = 'row05'>열</th>";
	str += "<th class = 'row06'>행</th>";
	str += "<th class = 'row07'></th>";
	str += "</tr>";
	$.each(list, function(i, l){
		str += "<tr>"
		str += "<td><input type = 'checkbox' class ='checkRow' ckname ='"+l.name+"'></td>";
		str += "<td>" + l.name + "</td>";
		str += "<td>" + l.region + "</td>";
		str += "<td>" + l.station + "</td>";
		str += "<td>" + l.crow + "</td>";
		str += "<td>" + l.cline + "</td>";
		str += "<td><input type = 'button' id = '"+l.name+"' value = '수정'></td>";
		str += "</tr>";
		str += "<tr id='dd" + l.name + "' style='display:none;'>";
		str += "<td class='td02' colspan='7'><div id='d"+l.name+"'></div></td>";
		str += "</tr>";
	});
	$("#div01").html(str);
	$("#del").on("click", deling);
	$.each(list, function(i, l){
		var line = l;
		$("#"+l.name).on("click", function(){
			editing(line);
		});
	});
};

function deling(){
	if(confirm("삭제하시겠습니까?")){
        $(".checkRow:checked").each(function(){
	        var name =$(this).attr('ckname');
	        $.ajax({
	        	url : "dellock",
	        	type : "POST",
	        	data : {
	        		name : name
	        	},
	        	success : function(){
	        		list();
		        },
				error : function(e){
					alert(JSON.stringify(e));
				}
	        });
        });
    }else{
        return false;
    }
};

function editing(line){
	$('#dd' + line.name).show();
	var str = "<form>"
	str += "<table>"
	str += "<tr>"
	str += "<td class = 'row01'><input type = 'button' id = 'canb' value = '취소'</td>"
	str += "<td class = 'row02'>"+line.name+"</td>";
	str += "<input type = 'hidden' id = 'name' value = '"+line.name+"'>";
	str += "<td class = 'row03'><input type = 'text' size = '3' id = 'region' value = '"+line.region+"'</td>";
	str += "<td class = 'row04'><input type = 'text' size = '3' id = 'station' value = '"+line.station+"'</td>";
	str += "<td class = 'row05'><input type = 'text' size = '1' id = 'crow' value = '"+line.crow+"'</td>";
	str += "<td class = 'row06'><input type = 'text' size = '1' id = 'cline' value = '"+line.cline+"'</td>";
	str += "<td class = 'row07'><input type = 'button' id = 'inb' value = '확인'</td>"
	str += "</tr>";
	str += "<table>";
	str += "</form>"
	$("#d"+line.name).html(str);
	$("#canb").on("click", function(){
		$('#dd' + line.name).hide();
		$("#d"+line.name).html("");
	});
	$("#inb").on("click",updatel);
}
function updatel(){
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
	if(crow.length == 0 || isNaN(crow)){
		alert("열을 숫자로 입력하세요.");
		return;
	}
	if(cline.length == 0 || isNaN(cline)){
		alert("행을 숫자로 입력하세요.");
		return;
	}
	$.ajax({
		url : "update",
		type : "POST",
		data : {
			name : name,
			region : region,
			station : station,
			crow : crow,
			cline : cline
		},
		success : function(){
			insertlocker(name, crow, cline);
			alert("수정이 완료 되었습니다");
			list();
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}

function insertlocker(name, crow, cline){
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

function gohome(){
	location.href = "gohome";
};
