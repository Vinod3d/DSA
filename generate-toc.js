const fs = require('fs');
let readme = fs.readFileSync('README.md', 'utf-8');

let headers = readme.match(/^### .+/gm);

if (headers) {
    let toc = '| No. | Topic |\n| --- | ------ |\n';
 
    headers.forEach((header, index) => {
        // Check if the header is already numbered
        const isNumbered = /^### \d+\.\s/.test(header); 

        let cleanHeader;
        if (isNumbered) {
            // If already numbered, keep the existing numbering
            cleanHeader = header.replace(/^### \d+\.\s*/, '').trim(); 
        } else {
            // If not numbered, clean the header (remove "## ") 
            cleanHeader = header.slice(3).trim(); // Removes the "## " part
        } 
 
        // Create the new numbered header (e.g., "## 1. Introduction")
        const numberedHeader = `### ${index + 1}. ${cleanHeader}`;

        // Replace the original header with the numbered header in the README content
        readme = readme.replace(header, numberedHeader);

       // Convert the topic to a link-friendly format
       const link = cleanHeader.toLowerCase().replace(/\s+/g, '-').slice(0, -1);

       // Add the topic to the Table of Contents
       toc += `| ${index + 1} | [${cleanHeader}](#${index + 1}-${link}) |\n`; 
    });

    // Define the TOC section with markers
    const tocMarker = '<!-- TOC -->';
    const tocEndMarker = '<!-- TOC END -->';
    const tocSection = `${tocMarker}\n\n${toc}\n${tocEndMarker}`;

    // Insert or replace the TOC in the README
    if (readme.includes(tocMarker)) {
        const start = readme.indexOf(tocMarker);
        const end = readme.indexOf(tocEndMarker) + tocEndMarker.length;
        readme = readme.slice(0, start) + tocSection + readme.slice(end);
    } else {
        readme = `${tocSection}\n\n${readme}`;
    }
 
    // Write the updated README.md file
    fs.writeFileSync('README.md', readme, 'utf-8');
    console.log('Table of Contents and headers updated successfully!');
} else {
    console.log('No headers found in README.md.');
}
