package global.sesoc.locker.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import global.sesoc.locker.HomeController;
import global.sesoc.locker.dao.MemberDAO;
import global.sesoc.locker.vo.Member;

@Controller
@RequestMapping("member")
public class MemberController {
	
	@Autowired
	private MemberDAO dao;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/gohome", method = RequestMethod.GET)
	public String gohome() {
		return "redirect:/";
	}
	
	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public String join() {
		return "member/join";
	}
	
	@ResponseBody
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public void join(Member member) {
		int res = dao.insertMember(member);
	}
	
	@RequestMapping(value = "/idcheck", method = RequestMethod.GET)
	public String idcheck() {
		return "member/idcheck";
	}
	
	@ResponseBody
	@RequestMapping(value = "/idcheck", method = RequestMethod.POST)
	public Member idcheck(String id) {
		Member member = dao.getMember(id);
		return member;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "member/login";
	}
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public Member login(String id, String password, HttpSession session) {
		Member member = dao.getMember(id);
		if(member != null && password.equals(member.getPassword())) {
			session.setAttribute("id", member.getId());
			session.setAttribute("name", member.getName());
			return member;
		}else {
			return null;
		}
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpSession session) {
		session.removeAttribute("id");
		session.removeAttribute("name");
		return "redirect:/";
	}
	
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String edit(HttpSession session, Model model) {
		String id = (String)session.getAttribute("id");
		Member member = dao.getMember(id);
		model.addAttribute("member", member);
		return "member/edit";
	}
	
	@ResponseBody
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
	public void edit(Member member) {
		int res = dao.editMember(member);
	}
}
