'use client'
import React, { useEffect, useState } from 'react'

interface Project {
  name: string
  html_url: string
  description: string
}

const GithubProjects: React.FC<{ username: string }> = ({ username }) => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then(setProjects)
  }, [username])

  return (
    <div>
      {projects.map((project) => (
        <div key={project.name}>
          <h2>
            <a href={project.html_url}>{project.name}</a>
          </h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default GithubProjects
