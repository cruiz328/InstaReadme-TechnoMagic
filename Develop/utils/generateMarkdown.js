// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === '') {
    return '';
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === '') {
    return '';
  }
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === '') {
    return '';
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  let title = "# Title of the Project";
  let inputTitle = `${data.name}`;
 

   let description = "# Description";
  let inputDescription = `${data.name}`;

  let installation = "# Installation Instructions";
  let inputInstallation = `${data.name}`;

  let usage = "# Usage Information";
  let inputUsage = `${data.name}`;

  let guidelines = "# Contribution Guidelines";
  let contribution = `${data.name}`;
  
  let tests = "# Test Instructions";
  let inputTest = `${data.name}`;

  let gitHubUsername = "# GitHub Username";
  let inputGitHubUsername = `${data.name}`;

  let email = "# Enter Email";
  let inputEmail = `${data.name}`;

   let markdown = `${title} \n ${inputTitle} \n ${description} \n ${inputDescription} \n ${installation} \n ${inputinstallation} \n ${usage} \n ${inputUsage} \n ${guidelines} \n ${inputGuidelines} \n ${tests} \n ${inputTests} \n ${gitHubUsername} \n ${inputGitHubUsername} \n ${email} \n ${inputEmail}`;



   return markdown;
} 

module.exports = generateMarkdown;
