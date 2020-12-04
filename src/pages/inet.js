import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"
import IString from "../components/IString"
import Layout from "../components/Layout"

// markup
const InetPage = () => {
  return (
    <main>
      <Layout>
        <div>
          <Link to="/"><IString ru="Назад" en="Back" /></Link>
        </div>
        <div className="inet-block">
          <p className="pp">
            <h3><IString ru="Стрелочка" en="Strelochka" /></h3>
            <div><OutboundLink href="https://www.strelchka.ru">https://www.strelchka.ru</OutboundLink></div>
          </p>
          <p className="pp"><IString ru="Календарь цен на ЖД билеты" en="Price calendar for Russian Railway tickets" /></p>
        </div>
        <div className="inet-block">
          <p className="pp">
            <h3><IString ru="Хранилище" en="Xran" /></h3>
            <div><OutboundLink href="https://www.xran.ru">https://www.xran.ru</OutboundLink></div>
          </p>
          <p className="pp">
            <IString
              ru="Сервис, превращающий Телеграм в самое лучшее облачное хранилище"
              en="Make your Telegram into awesome cloud storage"
            />
            </p>
        </div>
        <div className="inet-block">
          <p className="pp">
            <h3><IString ru="Таас" en="Taas"/></h3>
            <div><OutboundLink href="https://www.t-a-a-s.ru">https://www.t-a-a-s.ru</OutboundLink></div>
          </p>
          <p className="pp">
            <IString
              ru="Хотите использовать TDLib но ничего не устанавливать? Таас предоставляет TDLib как облачную услугу. TDLib - это целый headless Телеграм клиент управляемый по API - можно получать историю канала, отправлять сообщения и многое другое, смотри подробнее на сайте."
              en="Taas offers TDLib as cloud service. TDlib - is a complete headless Telegram client controlled by API - you can get channel history, send messages and many other things, go to Taas site to find out more."
            />
          </p>
        </div>
      </Layout> 
    </main>
  )
}

export default InetPage
