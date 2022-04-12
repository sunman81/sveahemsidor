import React, { useContext, useState, useEffect } from "react"
import SEO from "../components/seo"
import { MenuContext } from "../contexts/MenuContext"
import Image from "../components/image"
import "./Home/style.scss"
import { Layout, DecorativeEllipses, MobileMenu } from "../components/"
import { arrayOfProjects, categories } from "../../constants"

const Projekt = () => {
  const [state] = useContext(MenuContext)
  const [filters, setFilters] = useState([])
  const [array, setArray] = useState(arrayOfProjects)
  useEffect(() => {
    setArray(
      arrayOfProjects.filter(template =>
        filters.some(filter => filter === template.category)
      )
    )
  }, [filters])
  const toggleCategorySelection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    category: string
  ) => {
    const target = e.target as HTMLElement
    const categoryIndex = filters.findIndex(
      selectedCategory => selectedCategory === category
    )
    if (categoryIndex === -1) {
      target.style.background = "#fecc00"
      filters.push(category)
    } else {
      target.style.background = "#2196f3"
      filters.splice(categoryIndex, 1)
    }
    setFilters([...filters])
  }
  return (
    <Layout>
      <SEO title="sveahemsidor" />
      <MobileMenu state={state} />
      <div>
        <p
          style={{
            fontSize: 70,
            fontWeight: "bold",
            lineHeight: "115.7%",
            marginLeft: 20,
            marginBottom: 46,
            marginTop: 60,
          }}
        >
          Våra projekt
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingBottom: "10px",
        }}
      >
        {categories.map(category => (
          <button
            className="button blue"
            onClick={e => toggleCategorySelection(e, category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="our-projects-container">
        {(filters.length ? array : arrayOfProjects).map(project => (
          <div className="our-projects-item">
            <Image
              className="our-projects-image"
              src={project.image}
              alt="image"
            />
            <p className="image-name">{project.name}</p>
            <a className="button-demo" target="_blank" href={project.link}>
              Watch Demo
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projekt
