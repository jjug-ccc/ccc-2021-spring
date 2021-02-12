import React from 'react';

import CocEn from '../CocEn';
import CocJa from '../CocJa';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Coc: React.FC = () => {
  const { i18n } = useTranslation();
  return i18n.language === 'en' ? <CocEn/> : <CocJa/>
};

export default Coc;
