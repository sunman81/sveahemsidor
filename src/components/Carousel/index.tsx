import React from "react";
import { Carousel } from 'antd';
import { CarouselCard } from '../CarouselCard';
import { rem } from "../../utils"
import '../CarouselCard/style.scss';

export const CarouselComponent = () => {
    return(
        <Carousel autoplay autoplaySpeed={7000} effect={"fade"}>
            <CarouselCard imageSrc="First-carousel-bg.png" imageAlt="sveahemsidor" buttonText="Skapa Hemsida" imageLoading="eager"
                    text={<p className="carousel-card__text" style={{lineHeight: "20px"}}>
                        <span style={{fontFamily: "Raleway", fontSize: `${rem(20)}`, fontWeight: 700, color: "#1C5BFF" }}>Välkommen hem!</span> <br />
                        <span style={{fontFamily: "Raleway", fontSize: `${rem(16)}` }}>Sveahemsidor tillhandahåller Sveriges mest kostnadseffektiva webblösningar för småföretagare och E-handlare. Flytta er hemsida till oss direkt så sköter vi hela bytet åt er och bjuder på månadskostnaden under uppsägningstiden!</span>
                    </p>} />
            <CarouselCard imageSrc="Second-carousel-bg.png" imageAlt="webbhotell" buttonText="Läs Mer Webbhotell" 
                    text={<p className="carousel-card__text">
                        <span style={{fontFamily: "Raleway", fontSize: `${rem(20)}`, fontWeight: 700, color: "#1C5BFF" }}>Webbhotell</span> <br />
                        <span style={{fontFamily: "Raleway", fontSize: `${rem(16)}`}}>Komplett hosting leverantör med 20 år i branschen och en bred tjänsteportfölj. Klassisk delad webbhotell, VPS hosting och dedikerade servrar samt våra WordPress optimerade webbhotell Alla tillgängliga på begäran.</span>
                    </p>} />
            <CarouselCard imageSrc="Third-carousel-bg.png" imageAlt="konsulttjänster web" buttonText="Läs Mer" 
                    text={<p className="carousel-card__text">
                        <span style={{fontFamily: "Raleway", fontSize: `${rem(20)}`, fontWeight: 700, color: "#1C5BFF" }}>Konsulttjänster webb</span> <br />
                        <span style={{fontFamily: "Raleway", fontSize: `${rem(16)}`}}>Med specialistkompetens inom webboptimering hjälper vi företag med analys och optimering av webbplatser ända ner på servernivå.</span>
                    </p>} />
        </Carousel>
    )
}