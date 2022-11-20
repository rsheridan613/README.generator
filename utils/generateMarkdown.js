// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "None") {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  } else return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `## License
[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `## License
[Apache](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "None") {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)} 
  # ${data.title}

  ## Table of contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.test} 

  ${renderLicenseSection(data.license)}
 
  ## Questions
  Any questions can be directed to my [GitHub](https://github.com/${
    data.gitUsername
  }) or 
  [Email](${data.email})
  `;
}

module.exports = generateMarkdown;
