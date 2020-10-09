package global.sesoc.locker.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import global.sesoc.locker.dao.BoardDAO;
import global.sesoc.locker.vo.Board;

@Controller
@RequestMapping("board")
public class BoardController {
	
	@Autowired
	private BoardDAO dao;
	
	@RequestMapping(value = "/gohome", method = RequestMethod.GET)
	public String gohome() {
		return "redirect:/";
	}
	
	@RequestMapping(value = "/board", method = RequestMethod.GET)
	public String board() {
		return "board/board";
	}
	
	@ResponseBody
	@RequestMapping(value = "/enterb", method = RequestMethod.POST)
	public void enterb(Board board, HttpSession session) {
		String id = (String) session.getAttribute("id");
		board.setId(id);
		dao.insertBoard(board);
		return;
	}
	
	@ResponseBody
	@RequestMapping(value = "/boardlist", method = RequestMethod.GET)
	public ArrayList<Board> boardlist() {
		ArrayList<Board>list = dao.listBoard();
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value = "/boardel", method = RequestMethod.POST)
	public void boardel(int boardnum) {
		dao.deleteBoard(boardnum);
		return;
	}
}
