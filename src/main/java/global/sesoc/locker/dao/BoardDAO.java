package global.sesoc.locker.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import global.sesoc.locker.vo.Board;

@Repository
public class BoardDAO {
	
	@Autowired
	private SqlSession session;

	public ArrayList<Board> listBoard() {
		boardMapper mapper = session.getMapper(boardMapper.class);
		ArrayList<Board>list = null;
		try {
			list = mapper.listBoard();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public void insertBoard(Board board) {
		boardMapper mapper = session.getMapper(boardMapper.class);
		try {
			mapper.insertBoard(board);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return;
	}

	public void deleteBoard(int boardnum) {
		boardMapper mapper = session.getMapper(boardMapper.class);
		try {
			mapper.deleteBoard(boardnum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return;
	}
}
