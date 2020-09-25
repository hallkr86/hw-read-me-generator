function generateMarkdown(data) {
    return `# ${data.contents}
    * (#installation)
    * (#usage)
    * (#license)
    * (#contributing)
    * (#tests)
    * (#questions)
  `;
  }
  
  module.exports = generateMarkdown;
  