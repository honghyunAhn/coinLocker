package global.sesoc.locker.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import global.sesoc.locker.dao.LockerDAO;
import global.sesoc.locker.vo.Locker;
import global.sesoc.locker.vo.LockerNum;

@Controller
@RequestMapping("locker")
public class LockerController {
	
	@Autowired
	private LockerDAO dao;
	
	@RequestMapping(value = "/gohome", method = RequestMethod.GET)
	public String gohome() {
		return "redirect:/";
	}
	
	@RequestMapping(value = "/insert", method = RequestMethod.GET)
	public String insert() {
		return "locker/insert";
	}
	
	@ResponseBody
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public void insert(Locker locker) {
		dao.insertLocker(locker);
		return;
	}
	
	@ResponseBody
	@RequestMapping(value = "/insertlocker", method = RequestMethod.POST)
	public void insertlocker(LockerNum lockerNum) {
		dao.insertlocker(lockerNum);
		return;
	}
	
	@RequestMapping(value = "/lockercheck", method = RequestMethod.GET)
	public String lockercheck() {
		return "locker/lockercheck";
	}
	
	@ResponseBody
	@RequestMapping(value = "/lockercheck", method = RequestMethod.POST)
	public Locker lockercheck(String name) {
		Locker locker = dao.getLocker(name);
		return locker;
	}
	
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String edit() {
		return "locker/edit";
	}
	
	@ResponseBody
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public ArrayList<Locker> list() {
		ArrayList<Locker> list = dao.listLocker();
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value = "/dellock", method = RequestMethod.POST)
	public void dellock(String name) {
		dao.dellock(name);
		return;
	}
	
	@ResponseBody
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void update(Locker locker) {
		dao.delnum(locker.getName());
		dao.update(locker);
		return;
	}
	
	@RequestMapping(value = "/uselc", method = RequestMethod.GET)
	public String uselc() {
		return "locker/uselc";
	}
	
	@ResponseBody
	@RequestMapping(value = "/searchR", method = RequestMethod.POST)
	public ArrayList<Locker> searchR() {
		ArrayList<Locker> listR = dao.searchR();
		return listR;
	}
	
	@ResponseBody
	@RequestMapping(value = "/sarchS", method = RequestMethod.POST)
	public ArrayList<Locker> sarchS(String region) {
		ArrayList<Locker> listS = dao.serchStation(region);
		return listS;
	}
	
	@ResponseBody
	@RequestMapping(value = "/stationLocker", method = RequestMethod.POST)
	public ArrayList<Locker> stationLocker(Locker locker) {
		ArrayList<Locker> list = dao.stationL(locker);
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value = "/getnum", method = RequestMethod.POST)
	public ArrayList<LockerNum> getnum(String name) {
		ArrayList<LockerNum> listN = dao.getnum(name);
		return listN;
	}
	
	@ResponseBody
	@RequestMapping(value = "/lsetid", method = RequestMethod.POST)
	public void lsetid(LockerNum lockernum) {
		dao.lsetid(lockernum);
		return;
	}
	
	@ResponseBody
	@RequestMapping(value = "/checklocker", method = RequestMethod.POST)
	public LockerNum checklocker(LockerNum lockernum) {
		LockerNum locker = dao.checklocker(lockernum);
		return locker;
	}
	
	@RequestMapping(value = "/returner", method = RequestMethod.GET)
	public String returner() {
		return "locker/returner";
	}
	
	@ResponseBody
	@RequestMapping(value = "/listup", method = RequestMethod.POST)
	public ArrayList<LockerNum> listup(String id) {
		ArrayList<LockerNum> list = dao.listup(id);
		return list;
	}
	
	@ResponseBody
	@RequestMapping(value = "/returnLocker", method = RequestMethod.POST)
	public void returnLocker(LockerNum lockernum) {
		System.out.println();
		dao.returnLocker(lockernum);
		return;
	}
}
