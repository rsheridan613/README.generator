// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `${license}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `1. [License](#license)`;
  } else return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)} 
#### Table of contents:
1. [Description](#description)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Contributing](#contributing)
1. [Tests](#tests)
${renderLicenseLink(data.license)}
1. [Contact Me](#contact-me)


#### Description
${data.description}

#### Intallation
${data.install}

#### Usage
${data.usage}

#### Contributing
${data.contribution}

#### Tests
${data.test} 


${renderLicenseSection(data.license)}
 

#### Contact Me
[GitHub](https://github.com/${data.gitUsername})  
[Email](${data.email})



`;
}

module.exports = generateMarkdown;
