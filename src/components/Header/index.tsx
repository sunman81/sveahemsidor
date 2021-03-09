import { Link } from "gatsby"
import Image from "../image"
import React, { useContext } from "react"
import { MenuContext } from "../../contexts/MenuContext"
import { MenuButton } from "../MenuButton"
import "./style.scss"

interface Props {
  siteTitle?: string
}

export const Header: React.FC<Props> = ({ siteTitle = "sveahemsidor." }) => {
  const [state] = useContext(MenuContext)
  const menuOpened = state.menuOpened

  return (
    <>
      <header
        className="header_mobile"
        style={{ background: `${menuOpened ? "#1C5BFF" : "white"}` }}
      >
        <MenuButton />
        <Link
          to="/"
          style={{
            display: "flex",
            color: `${menuOpened ? "#FFA800" : "black"}`,
            fontFamily: `Josefin Sans`,
            textDecoration: `none`,
            fontWeight: 500,
            fontSize: 18,
          }}
        >
          <Image
            style={{ minWidth: 150, minHeight: 20, marginLeft: 30 }}
            src="svealogotype.png"
            alt="sveahemsidor."
          />
        </Link>
      </header>
      <header className="header_desktop" style={{ background: "white" }}>
        <div>
          <Link
            to="/"
            style={{
              display: "flex",
              color: "black",
              fontFamily: `Josefin Sans`,
              textDecoration: `none`,
              fontWeight: 500,
              fontSize: 18,
            }}
          >
            <Image
              style={{ minWidth: 200, minHeight: 20 }}
              src="svealogotype.png"
              alt="sveahemsidor."
            />
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <p>
            <Link
              className="header__link_desktop"
              style={{ fontSize: 18, color: "black", cursor: "pointer" }}
              to="#about"
            >
              Skapa hemsida
            </Link>
          </p>
          <p>
            <Link
              className="header__link_desktop"
              style={{
                fontSize: 18,
                color: "black",
                cursor: "pointer",
                marginLeft: 20,
                marginRight: 20,
              }}
              to="#webhosting"
            >
              Webbhotell
            </Link>
          </p>
          <p>
            <Link
              className="header__link_desktop"
              style={{
                fontSize: 18,
                color: "black",
                cursor: "pointer",
                marginRight: 20,
              }}
              to="#wordpress"
            >
              Wordpress
            </Link>
          </p>
          <p>
            <Link
              className="header__link_desktop"
              style={{
                fontSize: 18,
                color: "black",
                cursor: "pointer",
                marginRight: 20,
              }}
              to="/hemsidapro"
            >
              Hemsida Pro
            </Link>
          </p>
          <p>
            <Link
              className="header__link_desktop"
              style={{ fontSize: 18, color: "black", cursor: "pointer" }}
              to="#faq"
            >
              FAQ
            </Link>
          </p>
          <p>
            <Link
              className="header__link_desktop"
              style={{
                fontSize: 18,
                color: "black",
                cursor: "pointer",
                marginLeft: 20,
              }}
              to="/support"
            >
              Support
            </Link>
          </p>
        </div>
      </header>
    </>
  )
}
