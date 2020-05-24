function generateMarkdown(data) {
 //pulling all the data from index.js and creating the markdown.
 //markdown template vv 
  return `

# Title 
${data.name}
![Badge](https://img.shields.io/badge/LICENSE-${data.license}-<GREEN>)

## Description
${data.description}

##Table of Contents
[Link](#link)
[Repo Info](#info)
[License](#license)
[Dependencies](#dependencies)
[Contact](#contact)


##Link
[URL](${data.url})

##Info
${data.info}
The command ${data.test} should be used to run tests.
In order to contribute to the repo ${data.contributing}

##License
License: ${data.license}

##Dependencies
Dependencies: ${data.dependencies}

##Contact
${data.username}
${data.email}
`;
}

module.exports = generateMarkdown;
