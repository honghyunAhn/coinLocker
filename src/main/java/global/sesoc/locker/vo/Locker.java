package global.sesoc.locker.vo;

import lombok.Data;

@Data
public class Locker {
	private String name;
	private String region;
	private String station;
	private int crow;
	private int cline;
	private String inputdate;
}
