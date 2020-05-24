function generateMarkdown(data) {
  return `
## Title 
# ${data.name}

## Description
# ${data.description}

## Table of Contents



## Link
# ${data.url}

##License
# ${data.license}

##Dependencies
# ${data.dependencies}

##Repo Info
# ${data.info}
# The command ${data.test} should be used to run tests.
# In order to contribute to the repo ${data.contributing}


## Contact
# ${data.username}
# ${data.email}
`;
}

module.exports = generateMarkdown;
