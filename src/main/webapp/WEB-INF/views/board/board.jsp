<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>후기 게시판</title>
<script src="../resources/js/jquery-3.4.1.min.js"></script>
<script src="../resources/js/board/board.js"></script>
<link href = "../resources/css/board/board.css" rel = "stylesheet" />
</head>
<body>
	<h1>[ 후기 ]</h1>
	<br>
	<br>
	<div>
		<form>
			<input type = "hidden" id = "id" value = "${id}">
			내용 <input type="text" id="contents" name="contents" style="width: 300px;">
			<c:if test = "${id != null}">
			<input type="button" id="enterb" value="작성하기">
			</c:if>
			<input type="button" id="gohome" value="홈으로">
		</form>
	</div>
	<br>
	<br>
	<div id = "div01"></div>
</body>
</html>