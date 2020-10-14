import React from 'react';
import { useStore, getCurrentLocale } from 'store';
import './ButtonLocale.scss';

const ButtonLocale = props => {

  const { state, dispatch } = useStore();
  const { LOCALE } = getCurrentLocale()

  const handleClick = (e) => {
    const localeSelected = e.currentTarget.id;
    if(localeSelected === LOCALE) return;
    // e.preventDefault();
    dispatch({ type: "locale", payload: { locale: localeSelected } });
  }

  return (
    <React.Fragment>
        <div className={`select-locale ${LOCALE}`} data-tip={'Change language'} >
          <button id="en"  className={LOCALE === 'en' && 'active'} onClick={(e) => handleClick(e)}>EN</button>
          <span>|</span>
          <button id="es" className={LOCALE === 'es' && 'active'} onClick={(e) => handleClick(e)}>ES</button>
        </div>
    </React.Fragment>
  );
}

export default ButtonLocale;

