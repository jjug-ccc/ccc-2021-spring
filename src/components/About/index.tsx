import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();

  return <div className="content">
    <p>{t("about.text1")}</p>
    <dl>
      <dt>{t("about.title.nightSeminar")}</dt>
      <dd>{t("about.data.nightSeminar")}</dd>
      <dt>{t("about.title.jjugccc")}</dt>
      <dd>{t("about.data.jjugccc")}</dd>
      <dt>{t("about.title.instructorDispatch")}</dt>
      <dd>{t("about.data.instructorDispatch")}</dd>
      <dt>{t("about.title.internationalConferences")}</dt>
      <dd>{t("about.data.internationalConferences")}</dd>
    </dl>

    <p>{t("about.text2.detail1")}<a href="http://www.java-users.jp/" target="blank" rel="noopener">{t("about.text2.detail2")}</a>{t("about.text2.detail3")}<a href="https://jjug.doorkeeper.jp/" target="blank" rel="noopener">{t("about.text2.detail4")}</a>{t("about.text2.detail5")}</p>
  </div>
};

export default About;
