# ロッカー予約

- ロッカーを管理して予約するウェブサイト
- 個人プロジェクト : ロッカー予約管理ウェブサイトを管理者に提供するという考えで作りました。


# Tech/framework used
- Languages          : Java SE 8
- Frameworks & Tools : Spring 4.5
- Web Servers        : Apache Tomcat v9.0
- Database           : Oracle SQL Developer 19.4
- Web Developement   : HTML、JavaScript、CSS、Ajax
- Operating Systems  : Windows 10
- Development period : 2020.2.26~2020.3.8


# Screenshots

- 管理者アカウントにロッカーを入力します。

![1](https://user-images.githubusercontent.com/54131117/95628511-23c0d680-0ab9-11eb-98af-109b93bb430c.png)

 : COIN_LOCKERSデータベースに入力されたすべてのデータを保存します。また、列と行を掛け合わせた数だけのロッカーを作って、COIN_NUMデータベースに保存します。
 
***
- 管理者アカウントにロッカーを修正します。 

![2](https://user-images.githubusercontent.com/54131117/95628862-d5600780-0ab9-11eb-90f8-1d3eb0bed57d.png)

***
- ユーザーが会員登録後にロッカーを予約します。
- 登録されている地域名、駅名、ロッカー名だけの項目が追加されます。

![3](https://user-images.githubusercontent.com/54131117/95628864-d6913480-0ab9-11eb-8af6-f6ec7bb77853.png)

***
- 使用するとロッカーの色が変わり“使用”と変わります。また、クリックが不可能になります。

![4](https://user-images.githubusercontent.com/54131117/95628866-d729cb00-0ab9-11eb-8cd7-0ee930c3b212.png)

***
- 登録されているロッカーを読み込むコード

![5](https://user-images.githubusercontent.com/54131117/95628867-d729cb00-0ab9-11eb-9cc9-e71cc81932a7.png)

***
- COIN_NUMのidに保存されているIDとログインIDが一致するとロッカーを読み込みます。
- 返却を押すと、保存されているIDをデフォルト値に変えます。

![6](https://user-images.githubusercontent.com/54131117/95628868-d7c26180-0ab9-11eb-9bc2-427733fa8ccf.png)




