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

  console.log(data);
  let title = "# Title of the Project";
  let inputTitle = `${data.name}`;
 
   let description = "# Description";
  let inputDescription = `${data.name}`;

  let installation = "# Installation Instructions";
  let inputInstallation = `${data.description}`;

  let usage = "# Usage Information";
  let inputUsage = `${data.usage}`;

  let guidelines = "# Contribution Guidelines";
  let inputGuidelines = `${data.guidelines}`;
  
  let test = "# Test Instructions";
  let inputTest = `${data.test}`;

  let gitHubUsername = "# GitHub Username";
  let inputGitHubUsername = `${data.github}`;

  let email = "# Enter Email";
  let inputEmail = `${data.email}`;

   let markdown = `${title} \n ${inputTitle} \n ${description} \n ${inputDescription} \n ${installation} \n ${inputInstallation} \n ${usage} \n ${inputUsage} \n ${guidelines} \n ${inputGuidelines} \n ${test} \n ${inputTest} \n ${gitHubUsername} \n ${inputGitHubUsername} \n ${email} \n ${inputEmail}`;



   return markdown;
} 

module.exports = generateMarkdown;
