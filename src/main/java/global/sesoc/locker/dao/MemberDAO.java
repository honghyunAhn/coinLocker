package global.sesoc.locker.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import global.sesoc.locker.vo.Member;

@Repository
public class MemberDAO {

	@Autowired
	private SqlSession session;

	public int insertMember(Member member) {
		memberMapper mapper = session.getMapper(memberMapper.class);
		int res = 0;
		try {
			res = mapper.insertMember(member);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}

	public Member getMember(String id) {
		memberMapper mapper = session.getMapper(memberMapper.class);
		Member member = mapper.getMember(id);
		return member;
	}

	public int editMember(Member member) {
		memberMapper mapper = session.getMapper(memberMapper.class);
		int res = 0;
		try {
			res = mapper.editMember(member);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}
}
