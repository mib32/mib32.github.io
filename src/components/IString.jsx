import React from 'react'

const defaultLocale = 'ru';
const IString = (props) => {
  const locale = window.localStorage.getItem('mib32.locale') || defaultLocale;

  let content;
  
  if (props[locale]) {
    content = props[locale]
  } else {
    content = props[defaultLocale]
  }
  

  return (
    <span>{content}</span>
  )
}

export default IString