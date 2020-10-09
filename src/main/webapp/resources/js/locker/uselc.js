$(document).ready(function(){
	searchR();
});

function searchR(){
	$.ajax({
		url : "searchR",
		type : "POST",
		success : function(listR){
			searchRlist(listR);
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}

function searchRlist(listR){
	var str = "<h1>[ 지역 선택 ]</h1>";
	str += "<br>";
	str += "<br>";
	$.each(listR, function(i, l){
		str += "<input type = 'button' class = 'buts' id = '"+l.region+"' value = '"+l.region+"'><br>";
	});
	str += "<br>";
	str += "<br>";
	str += "<input type = 'button' id = 'bt1' value = '홈으로'><br>";
	$("#div01").html(str);
	$.each(listR, function(i, l){
		$("#"+l.region).on("click", function(){
			sarchS(l.region);
		});
	});
	$("#bt1").on("click", gohome);
};

function sarchS(region){
	$.ajax({
		url : "sarchS",
		type : "POST",
		data : {
			region : region
		},
		success : function(listR){
			stationlist(listR, region);
		},
		error : function(){
			alert("실패");
		}
	});
}

function stationlist(listR, region){
	var str = "<h1>[ 역 선택 ]</h1>";
	str += "<br>";
	str += "<br>";
	$.each(listR, function(i, l){
		str += "<input type = 'button' id = '"+l.station+"' class = 'buts' value = '"+l.station+"'><br>";
	});
	str += "<br>";
	str += "<br>";
	str += "<input type = 'button' id = 'bt2' value = '처음으로'>";
	str += "<input type = 'button' id = 'bt1' value = '홈으로'><br>";
	$("#div01").html(str);
	$.each(listR, function(i, l){
		$("#"+l.station).on("click", function(){
			stationLocker(l.station, region);
		});
	});
	$("#bt1").on("click", gohome);
	$("#bt2").on("click", searchR);
}

function stationLocker(station, region){
	$.ajax({
		url : "stationLocker",
		type : "POST",
		data : {
			region : region,
			station : station
		},
		success : function(list){
			namelocker(list, station, region);
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}

function namelocker(list, station, region){
	var str = "<h1>[ 로커 이름 선택 ]</h1>";
	str += "<br>";
	str += "<br>";
	$.each(list, function(i, l){
		str += "<input type = 'button' id = '"+l.name+"' class = 'buts' value = '"+l.name+"'><br>";
	});
	str += "<br>";
	str += "<br>";
	str += "<input type = 'button' id = 'bt2' value = '처음으로'>";
	str += "<input type = 'button' id = 'bt1' value = '홈으로'><br>";
	$("#div01").html(str);
	$.each(list, function(i, l){
		$("#"+l.name).on("click", function(){
			outlocker(l.name);
		});
	});
	$("#bt1").on("click", gohome);
	$("#bt2").on("click", searchR);
}

function outlocker(name){
	$.ajax({
		url : "lockercheck",
		type : "POST",
		data : {
			name : name
		},
		success : function(lock){
			locker(lock);
		},
		error : function(e){
			alert(JSON.stringify(e));
		}
	});
}

function locker(lock){
	var name = lock.name;
	var cnt = 1;
	var str = "<h1>[ 번호 선택 ]</h1>";
	str += "<br>";
	str += "<br>";
	for(var i = 0; i < lock.crow; i ++){
		for(var j = 0; j < lock.cline; j ++){
			str += "<input type = 'button' id = 'locker"+cnt+"' class = 'butt' disabled='' value = '"+cnt+"'>";
			$.ajax({
				url : "checklocker",
				type : "post",
				data : {
					name : name,
					num : cnt
				},
				success : function(locker){
					if(locker.id == 0){
						$("#locker"+locker.num).attr("disabled", false);
					}else{
						$("#locker"+locker.num).removeClass("butt");
						$("#locker"+locker.num).addClass("butd");
						$("#locker"+locker.num).attr("value", "사용");
						$("#locker"+locker.num).attr('disabled', true);
					}
				},
				error : function(e){
					alert(JSON.stringify(e));
				}
			});
			cnt++;
		}
		//색변환 ajax 만들기 락넘과 락이름으로 아이디가 널이 아니면 빨강
		str += "<br>";
		str += "<br>";
	}
	str += "<input type = 'button' id = 'bt2' value = '처음으로'>";
	str += "<input type = 'button' id = 'bt1' value = '홈으로'><br>";
	$("#div01").html(str);
	$("#bt1").on("click", gohome);
	$("#bt2").on("click", searchR);
	
	getnum(lock.name);
}

function getnum(name){
	var id = $("#id").val();
	$.ajax({
		url : "getnum",
		type : "post",
		data : {
			name : name
		},
		success : function(listN){
			$.each(listN, function(i, l){
				$("#locker"+l.num).on("click", function(){
					if(confirm("사용하시겠습니까?")){
						$.ajax({
							url : "lsetid",
							type : "post",
							data : {
								id : id,
								name : name,
								num : l.num
							},
							success : thank,
							error : function(e){
								alert(JSON.stringify(e));
							}
						});
					}
				});
			});
		},
		error : function(){
			alert(JSON.stringify(e));
		}
	});
}

function thank(){
	var str = "";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<br>";
	str += "<h1>이용해주셔서 감사합니다.</h1>";
	$("#div01").html(str);
	setTimeout(function(){
		location.href = "gohome";
	},1000);
}

function gohome(){
	location.href = "gohome";
};
