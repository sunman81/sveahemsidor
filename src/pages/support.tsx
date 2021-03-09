import React, { useContext } from "react";
import { Layout, DecorativeEllipses, MobileMenu } from "../components/";
import { MenuContext } from '../contexts/MenuContext';
import Image from '../components/image';
import SEO from '../components/seo';
import "./Home/style.scss";



const SupportPage  =() =>{
    const [state] = useContext(MenuContext);
    return(
        <Layout>
            <SEO title="sveahemsidor" />
      <MobileMenu state={state} />
      <section id="hemsida">
        <div className="faq__text-container">
          <p className="faq__heading">Ni når oss enklast via vår E-mejlsupport. Den har öppet dygnet runt med garanterad svarstid inom 24h. Kontakta oss på support@sveahemsidor.se  </p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">För personlig service via telefon kontakta i första hand er Account Manager. Det går även bra att ringa oss på vår allmänsupport: Telefon: 031-78 59 450 vardagar 13.00 – 17.00</p>
        </div>
      </section>
        </Layout>
    )
}


export default SupportPage;