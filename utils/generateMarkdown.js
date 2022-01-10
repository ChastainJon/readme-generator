// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) '
    case 'GNU General Public Release v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'Apache License v2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'BSD License 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case '':
      return ''
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT License':
      return '[Click for more information on the MIT License](https://opensource.org/licenses/MIT)'
    case 'GNU General Public Release v3.0':
      return '[Click for more information on the GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)'
    case 'Apache License v2.0':
      return '[Click for more information on the Apache License v2.0](https://www.apache.org/licenses/LICENSE-2.0)'
    case 'BSD License 3-Clause':
      return '[Click for more information on the 3-Clause BSD License](https://opensource.org/licenses/BSD-3-Clause)'
    case '':
      return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return`
  ## License
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}

  `
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}
  
  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.test}

  ## Questions
  
  If you have any questions please reach out to [${data.username}](https://www.github.com/${data.username}) or e-mail ${data.email}
  `;
}

module.exports = generateMarkdown;
