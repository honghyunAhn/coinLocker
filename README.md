# 로커예약
- 사물함을 관리하고 예약하는 웹사이트
- 사물함 예약 관리 웹사이트를 관리자와 사용자가 사용한다고 생각하고 만들었습니다.
<br>

# Tech/framework used

- Languages          : Java SE 8
- Frameworks & Tools : Spring 4.5
- Web Servers        : Apache Tomcat v9.0
- Database           : Oracle SQL Developer 19.4
- Web Developement   : HTML、JavaScript、CSS、Ajax
- Operating Systems  : Windows 10
- Development period : 2020.2.26~2020.3.8
<br>

# Motivation
팀 프로젝트의 주제가 사물함을 예약하는 웹사이트를 만드는 것이었고 팀프로젝트를 하다보니 사물함을 관리하는 기능이 있으면 편하겠다고 생각해서 만들었습니다.
<br>
<br>

# Screenshots & Explanation

- 관리자 계정에 사물함의 상세사항을 입력합니다.

![1](https://user-images.githubusercontent.com/54131117/95628511-23c0d680-0ab9-11eb-98af-109b93bb430c.png)

 : COIN_LOCKERS 데이터베이스에 입력된 모든 데이터를 저장합니다.또한 열과 행을 곱한 개수만큼 사물함을 만들어서 COIN_NUM 데이터베이스에 저장을 합니다.
 
- 관리자 계정으로 사물함을 수정합니다.

![2](https://user-images.githubusercontent.com/54131117/95628862-d5600780-0ab9-11eb-90f8-1d3eb0bed57d.png)

- 사용자가 회원가입 후 물품보관함을 예약합니다.
- 등록된 지역명, 역명, 사물함명만의 항목이 추가됩니다.

![3](https://user-images.githubusercontent.com/54131117/95628864-d6913480-0ab9-11eb-8af6-f6ec7bb77853.png)

- 사용시 사물함의 색상이 변경되며 "사용"이 바뀝니다.또한 클릭이 불가능해집니다.

![4](https://user-images.githubusercontent.com/54131117/95628866-d729cb00-0ab9-11eb-8cd7-0ee930c3b212.png)

- 등록된 사물함을 불러오는 코드

![5](https://user-images.githubusercontent.com/54131117/95628867-d729cb00-0ab9-11eb-9cc9-e71cc81932a7.png)

- COIN_NUM에 id에 저장되어 있는 ID와 로그인 ID가 일치하면 로커를 불러옵니다.
- 반환 누르면 저장된 ID를 기본값으로 바꿉니다.

![6](https://user-images.githubusercontent.com/54131117/95628868-d7c26180-0ab9-11eb-9bc2-427733fa8ccf.png)




