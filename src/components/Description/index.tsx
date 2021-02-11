import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Description : React.FC = () => {
  const { t, i18n } = useTranslation();

  return <div className="content">
    <p>{t("description.text")}</p>

    <dl>
      <dt>{t("description.title.organizer")}</dt>
      <dd>{t("description.data.organizer")}</dd>
      <dt>{t("description.title.date")}</dt>
      <dd>{t("description.data.date")}</dd>
      <dt>{t("description.title.participationFee")}</dt>
      <dd>{t("description.data.participationFee")}</dd>
      <dt>{t("description.title.register")}</dt>
      <dd><a href="https://jjug.doorkeeper.jp/events/112842" target="blank" rel="noopener">https://jjug.doorkeeper.jp/events/112842</a></dd>
      <dt>{t("description.title.schedule")}</dt>
      <dd><a href="https://confengine.com/jjug-ccc-2020-fall/schedule/rich" target="blank" rel="noopener">https://confengine.com/jjug-ccc-2020-fall/schedule/rich</a></dd>
      <dt>{t("description.title.hashtag")}</dt>
      <dd><a href="https://twitter.com/search?q=%23jjug_ccc" target="blank" rel="noopener">#jjug_ccc</a>（{t("description.data.hashtag")}）</dd>
    </dl>
  </div>
};

export default Description;
