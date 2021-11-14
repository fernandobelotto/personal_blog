import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Divider, Heading, SimpleGrid } from "@chakra-ui/layout"
import ProfessionalProjectCard from "../components/professional-project-card"

const ProjectsPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    const projects = [
        { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
        { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
        { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
        { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
    ]

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About" />
            <Heading >Professional Projects</Heading>
            <SimpleGrid mt={5} columns={2} spacing={10}>
                {projects.map((project) => {
                    return (
                        <ProfessionalProjectCard
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            date={project.date}
                        />
                    )
                })}
            </SimpleGrid>
            <Divider />
            <Heading>Github Repos</Heading>
        </Layout>
    )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
