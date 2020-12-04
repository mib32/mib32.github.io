import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import IString from "../components/IString"
import Layout from "../components/Layout"

// markup
const ContPage = () => {
  return (
    <main>
      <Layout>
        <div>
          <Link to="/"><IString ru="Назад" en="Back" /></Link>
        </div>
        <div>
          <p><a href="mailto:mibus32@gmail.com">mibus32@gmail.com</a></p>
          <p><a href="https://t.me/mib32"><IString en="Telegram" ru="Телеграм" /> @mib32</a></p>
        </div>
      </Layout> 
    </main>
  )
}

export default ContPage
