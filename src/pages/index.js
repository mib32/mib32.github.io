import { Link } from "gatsby"
import * as React from "react"
import IString from "../components/IString"
import Layout from "../components/Layout"

// data
const links = [
  {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Tutorials",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Guides",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "API Reference",
    url: "https://www.gatsbyjs.com/docs/api-reference/",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
  },
  {
    text: "Cheat Sheet",
    url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <p>
          <Link to="/inet">
            <IString
              ru="Интернет проекты"
              en="Internet projects"
            />
          </Link>
        </p>
        <p>
          <Link to="/cont">
            <IString
              ru="Контакты"
              en="Contact"
            />
          </Link>
        </p>
      </Layout> 
    </main>
  )
}

export default IndexPage
