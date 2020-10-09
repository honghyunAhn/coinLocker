<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>개인 정보 수정</title>
<script src="../resources/js/jquery-3.4.1.min.js"></script>
<script src="../resources/js/member/edit.js"></script>
<link href = "../resources/css/defalut.css" rel = "stylesheet" />
</head>
<body>
	<input type = "hidden" id = "id" name = "id" value = "${id}">
	<input type = "hidden" id = "ename" name = "ename" value = "${member.name}">
	<input type = "hidden" id = "ephone" name = "ephone" value = "${member.phone}">
	<input type = "hidden" id = "eemail" name = "eemail" value = "${member.email}">
	<div id = "div01"></div>
</body>
</html>