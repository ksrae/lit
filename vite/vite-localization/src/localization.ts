// @lit/localize 설정
import {configureLocalization} from '@lit/localize';
// 생성된 언어 코드 모듈
import {sourceLocale, targetLocales} from './generated/locale-codes';

export const {getLocale, setLocale} = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`./generated/locales/${locale}.js`),
});

export const setLocaleText = async (val: string) => {
  await setLocale(val).then((a) => console.log('locale set', {a}));
}