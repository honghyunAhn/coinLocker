package global.sesoc.locker.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import global.sesoc.locker.vo.Locker;
import global.sesoc.locker.vo.LockerNum;

@Repository
public class LockerDAO {
	
	@Autowired
	private SqlSession session;

	public void insertLocker(Locker locker) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		try {
			mapper.insertLocker(locker);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Locker getLocker(String name) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		Locker locker= null;
		try {
			locker = mapper.getLocker(name);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return locker;
	}

	public ArrayList<Locker> listLocker() {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		ArrayList<Locker> list= null;
		try {
			list = mapper.listLocker();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public void dellock(String name) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		try {
			mapper.dellock(name);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void delnum(String name) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		try {
			mapper.delnum(name);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void update(Locker locker) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		try {
			mapper.update(locker);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void insertlocker(LockerNum lockerNum) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		try {
			mapper.insertlocker(lockerNum);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public ArrayList<Locker> searchR() {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		ArrayList<Locker> listR= null;
		try {
			listR = mapper.searchR();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listR;
	}

	public ArrayList<Locker> serchStation(String region) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		ArrayList<Locker> listS= null;
		try {
			listS = mapper.serchStation(region);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listS;
	}

	public ArrayList<Locker> stationL(Locker locker) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		ArrayList<Locker> list= null;
		try {
			list = mapper.stationL(locker);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public ArrayList<LockerNum> getnum(String name) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		ArrayList<LockerNum> listN = null;
		try {
			listN = mapper.getnum(name);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listN;
	}

	public void lsetid(String id, String name, int num) {
		
	}

	public void lsetid(LockerNum lockernum) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		try {
			mapper.lsetid(lockernum);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public LockerNum checklocker(LockerNum lockernum) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		LockerNum locker = null;
		try {
			locker = mapper.checklocker(lockernum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return locker;
	}

	public ArrayList<LockerNum> listup(String id) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		ArrayList<LockerNum> list = null;
		try {
			list = mapper.listup(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public void returnLocker(LockerNum lockernum) {
		lockerMapper mapper = session.getMapper(lockerMapper.class);
		try {
			mapper.returnLocker(lockernum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return;
	}

	
}
