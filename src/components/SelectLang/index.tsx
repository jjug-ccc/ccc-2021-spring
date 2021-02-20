import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const SelectLang : React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => (i18n.changeLanguage(lng === 'ja' ? 'ja' : 'en'));

  return (
    <div className="select">
      <select value={i18n.language} onChange={(e) => { changeLanguage(e.target.value)}}>
        <option value="ja">Japanese</option>
        <option value="en">English</option>
      </select>
    </div>
  )
};

export default SelectLang;
