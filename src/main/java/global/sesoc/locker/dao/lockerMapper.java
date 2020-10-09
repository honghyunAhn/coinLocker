package global.sesoc.locker.dao;

import java.util.ArrayList;

import global.sesoc.locker.vo.Locker;
import global.sesoc.locker.vo.LockerNum;

public interface lockerMapper {

	public void insertLocker(Locker locker);

	public Locker getLocker(String name);

	public ArrayList<Locker> listLocker();

	public void dellock(String name);

	public void update(Locker locker);

	public void insertlocker(LockerNum lockerNum);

	public void delnum(String name);

	public ArrayList<Locker> searchR();

	public ArrayList<Locker> serchStation(String region);

	public ArrayList<Locker> stationL(Locker locker);

	public ArrayList<LockerNum> getnum(String name);

	public void lsetid(LockerNum lockernum);

	public LockerNum checklocker(LockerNum lockernum);

	public ArrayList<LockerNum> listup(String id);

	public void returnLocker(LockerNum lockernum);
}
