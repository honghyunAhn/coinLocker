package global.sesoc.locker.vo;

import lombok.Data;

@Data
public class Member {
	private String id;
	private String password;
	private String name;
	private String phone;
	private String email;
}
