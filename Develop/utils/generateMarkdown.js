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
 

   let description = "# Descripton";
  let inputDescription = `${data.name}`;

  let blank = "# Blank";
  let inputBlank = `${data.name}`;



   let markdown = `${title} \n ${inputTitle} \n ${description} \n ${inputDescription} \n ${blank} \n ${inputBlank}`;



   return markdown;
} 

module.exports = generateMarkdown;
