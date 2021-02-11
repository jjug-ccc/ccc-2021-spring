import React from 'react';

const About: React.FC = () => (
  <div className="content">
    <p>日本Javaユーザーグループ（Japan Java User Group/JJUG）は9000人以上の Javaエンジニアが参加する日本最大のJavaコミュニティです。以下のような活動を行っています。</p>
    <dl>
      <dt>ナイトセミナー</dt>
      <dd>毎月1回夜に開催する勉強会</dd>
      <dt>JJUG CCC</dt>
      <dd>年2回（春と秋）に開催する1日カンファレンス</dd>
      <dt>地方講師派遣</dt>
      <dd>地方Javaコミュニティへの講師派遣</dd>
      <dt>国際会議参加</dt>
      <dd>世界中のJUGとの交流</dd>
    </dl>

    <p>詳しくはJJUGの<a href="http://www.java-users.jp/" target="blank" rel="noopener">オフィシャルサイト</a>や<a
      href="https://jjug.doorkeeper.jp/" target="blank" rel="noopener">コミュニティページ（DoorKeeper）</a>を確認してください。</p>
  </div>
);

export default About;
