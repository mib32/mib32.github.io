import React from 'react'

const defaultLocale = 'ru';
const ISwitch = (props) => {
  const [ locale, setLocale ] = React.useState(typeof window !== 'undefined' ? (window.localStorage.getItem('mib32.locale') || defaultLocale) : defaultLocale);

  const handleLocaleChange = (l) => {
    window.localStorage.setItem('mib32.locale', l)
    if (window.onLocaleChange)
      window.onLocaleChange(l) 
    setLocale(l)
  }

  return (
    <div className="iswitch">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none" /><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" /></svg>
      <span
        onClick={() => handleLocaleChange('ru')}
        className={locale == 'ru' ? 'iswitch-sel' : 'iswitch-unsel'}
      >
        Ru
      </span>
      <span
        onClick={() => handleLocaleChange('en')}
        className={locale == 'en' ? 'iswitch-sel' : 'iswitch-unsel'}
      >
        Eng
      </span>
    </div>
  )
}

export default ISwitch