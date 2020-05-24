function generateMarkdown(data) {
  return `
# Title 
${data.name}
![Badge](https://img.shields.io/badge/LICENSE-${data.license}-<green>)

## Description
${data.description}

##Table of Contents
[Link](#url)
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
