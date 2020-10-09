<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<title>Locker Home</title>
	<link href = "resources/css/home.css" rel = "stylesheet" />
</head>
<body>
<h1>[ Locker ]</h1>
<br><br>
<table>
<c:if test = "${id == null}">
	<tr>
		<td><a href="member/join">회원가입</a></td>
	</tr>
	<tr>
		<td><a href="member/login">로그인</a></td>
	</tr>
	<tr>
		<td><a href="board/board">후기</a></td>
	</tr>
</c:if>

<c:if test = "${id != null && id != 'aaa'}">
	<tr>
		<td>${id}(${name})님이 로그인 하셨습니다.</td>
	</tr>
	<tr></tr>
	<tr>
		<td><a href="locker/uselc">사용</a></td>
	</tr>
	<tr>
		<td><a href="locker/returner">반납</a></td>
	</tr>
	<tr>
		<td><a href="member/edit">개인정보 수정</a></td>
	</tr>
	<tr>
		<td><a href="board/board">후기</a></td>
	</tr>
	<tr>
		<td><a href="member/logout">로그아웃</a></td>
	</tr>
</c:if>

<c:if test = "${id != null && id == 'aaa'}">

	<tr>
		<td>${name}님이 로그인 하셨습니다.</td>
	</tr>
	<tr></tr>
	<tr>
		<td><a href="locker/insert">입력</a></td>
	</tr>
	<tr>
		<td><a href="locker/edit">편집</a></td>
	</tr>
	<tr>
		<td><a href="board/board">후기</a></td>
	</tr>
	<tr>
		<td><a href="member/logout">로그아웃</a></td>
	</tr>
</c:if>
</table>
</body>
</html>
