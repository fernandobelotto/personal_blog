import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Octokit } from 'octokit'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Divider, Heading, SimpleGrid, Box, Text } from "@chakra-ui/layout"

import ProfessionalProjectCard from "../components/professional-project-card"
import RepoCard from "../components/repo-card"

const ProjectsPage = ({ data, location }) => {
  const siteTitle = 'teste'
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getRepos()
  }, [])

  async function getRepos() {
    const octokit = new Octokit();
    let { data } = await octokit.request('GET /users/fernandobelotto/repos')
    data = data.filter((item) => item.name !== 'fernandobelotto' && item.fork === false)
    setRepos(data)
  }


  const projects = [
    { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
    { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
    { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
    { title: "ModalMais Vue Frontend", description: 'Lorem', link: 'https://modalmais.com.br', date: "13 de junho" },
  ]

  return (
    <Layout location={location} title={siteTitle}>
      <Box p='6'>
        <Seo title="About" />
        <Heading >Professional Projects</Heading>
        <Text fontSize='xl'>Here are the projects and companies that i have the joy to work.</Text>

        <SimpleGrid minChildWidth="280px" mt={5} columns={2} spacing={10}>
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
        <Heading>Open Source Code</Heading>
        <Text fontSize='xl'>Sharing code is key to a better world. Here i share my little projects, boilerplates, proof's of concepts<br /> Feel free to clone and test yourself!</Text>

        <SimpleGrid minChildWidth="280px" mt={5} columns={4} spacing={10}>
          {repos.map((repo, index) => {
            return (
              <>
                <RepoCard
                  number={index + 1}
                  data={repo}
                />
              </>
            )
          })}
        </SimpleGrid>
      </Box>


    </Layout>
  )
}

export default ProjectsPage
