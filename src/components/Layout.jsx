import React from 'react'
import ISwitch from './ISwitch';
import "./layout.css"

const Layout = (props) => {
  const [updateCounter, setUpdateCounter] = React.useState(0);
  
  React.useEffect(() => {
    window.onLocaleChange = () => {
      setUpdateCounter((updateCounter) => updateCounter + 1)
    }
  }, []);

  return(<div className="main" key={updateCounter}>
    <div className="layout-panel">
      <ISwitch />
    </div>
    {props.children}
  </div>);
}

export default Layout;