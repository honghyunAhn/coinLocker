package global.sesoc.locker.dao;

import global.sesoc.locker.vo.Member;

public interface memberMapper {

	public int insertMember(Member member);

	public Member getMember(String id);

	public int editMember(Member member);

}
