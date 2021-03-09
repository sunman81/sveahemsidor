import React, { useContext } from "react";
import { Layout, DecorativeEllipses, MobileMenu } from "../components/";
import { MenuContext } from '../contexts/MenuContext';
import Image from '../components/image';
import SEO from '../components/seo';
import "./Home/style.scss";


const HemsidaPage = () => {
    const [state] = useContext(MenuContext);
    return(
        <Layout>
      <SEO title="sveahemsidor" />
      <MobileMenu state={state} />
      <section id="hemsida">
      <div className="hemsida__image-back" />
        <div className="faq__text-container">
          <p className="faq__heading">Modern hemsida för dig med höga krav </p>
          <p className="faq__text">Vill du ha en riktigt fin och avancerad hemsida med många funktioner och enkel användarvänlighet där ert företag når ut till många potentiella kunder? Våra experter på digital marknadsföring skapar din nya hemsida tillsammans med dig helt enligt dina önskemål perfekt anpassad för att nå just er kundgrupp.</p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">Vi gör arbetet åt dig</p>
          <p className="faq__text">Har ditt företag inte den hemsida som den förtjänar? Känns den omodern eller långsam. Saknar den mobilanpassning och ger inte den försäljning som ni önskar? Det fixar vi! När hemsidan är skapad visar vi dig hur du själv uppdaterar bilder och texter. Du får också löpande statistik över vilka som besöker dig, vad de gör och var de kommer ifrån. Du får tillgång till fullständig data som i sin tur ger ditt företag störst möjlighet att såväl bibehålla som utöka din kundportfölj.  Behöver du extra hjälp så finns vi där för dig och ert företag får en lokal kontaktperson som hjälper dig via telefon och mejl.</p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">Detta får du med en ny hemsida</p>
          <p className="faq__text">Vårt mål är att er WordPress site ska bli blixtsnabb, det ska kännas som om sidan laddas lokalt. Då varje site är unik och har sina specialla behov kan det komma att krävas individuella inställningar, något vi hjälper till med förlöpande. Vi arbetar på alla plan, från ttsb, ssl, sql frågor till cdn optimering.</p>
        </div>
        <div className="faq__text-container">
          <p style={{fontSize: 20, fontWeight: "bold", lineHeight: "115.7%", marginLeft: 20, marginBottom: 46}}>Detta får du med en ny hemsida</p>
          <p className="faq__heading">Kom igång direkt</p>
          <p className="faq__text">Du väljer bland någon av våra 100 hemsidemallar, alla optimerade för att framhäva ert företags budskap och ge er en egen identitet online. Sen ordnar vi med precis allting. Vi använder era bilder för att göra hemsidan personlig, eller hjälper dig hitta material i våra bildbanker. 10 undersidor igång.</p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">Fördelar för ert företag</p>
          <p className="faq__text"> -Ni kan närsomhelst uppdatera information och bilder på sidan i vårt enkla verktyg <br/> -Ni får en snabb och säljande hemsida, anpassad både för mobil, surfplatta och dator<br/>-Ni ser statistik på hur många som besöker dig, vad de gör och var de kommer ifrån<br/>-Ni kan enkelt öka kundens engagemang genom att lägga till nyhetsbrev samt funktioner för    bokningar och webbshop</p>
          <p className="faq__text">Kontakta oss på pro@sveahemsidor.se för mer information. </p>
        </div>  
      </section>
      
      </Layout>
    )
}

export default HemsidaPage;