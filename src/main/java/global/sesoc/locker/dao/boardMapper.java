package global.sesoc.locker.dao;

import java.util.ArrayList;

import global.sesoc.locker.vo.Board;

public interface boardMapper {

	public ArrayList<Board> listBoard();

	public void insertBoard(Board board);

	public void deleteBoard(int boardnum);

}
