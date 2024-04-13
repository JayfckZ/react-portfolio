/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Title from '../../components/Title'
import Text from '../../components/Text'
import { GitHubImages } from './styles'

function About() {
  return (
    <section>
      <Title fontSize={16}>Sobre mim</Title>
      <Text principal>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam omnis
        eius molestias ipsam facere incidunt doloremque rerum saepe dolores
        nobis dignissimos iusto quo mollitia aspernatur asperiores, tenetur
        itaque fugiat.
      </Text>

      <GitHubImages>
        <img src="https://github-readme-stats.vercel.app/api?username=JayfckZ&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JayfckZ&layout=compact&langs_count=7&theme=dracula" />
      </GitHubImages>
    </section>
  )
}

export default About
