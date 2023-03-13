// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

  function renderLicenseBadge(license) {
    let badgeURL;
    switch (license) {
      case 'MIT':
        badgeURL = 'https://img.shields.io/badge/license-MIT-blue.svg';
        break;
      // add cases for other license types as needed
      default:
        badgeURL = '';
    }
    return badgeURL ? `![License](${badgeURL})` : '';
  }
  
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

  function renderLicenseLink(license) {
    let licenseURL;
    switch (license) {
      case 'MIT':
        licenseURL = 'https://opensource.org/licenses/MIT';
        break;
      // add cases for other license types as needed
      default:
        licenseURL = '';
    }
    return licenseURL ? `- [${license} License](${licenseURL})` : '';
  }
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
