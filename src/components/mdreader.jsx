import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownReader() {
  const [markdownData, setMarkdownData] = useState([]);
  
  useEffect(() => {
    // Define the path to the folder containing your Markdown files.
    const folderPath = '@/content/projects/'; // Adjust this path as needed.

    // Function to fetch the list of Markdown files.
    const fetchMarkdownFiles = async () => {
      try {
        const response = await fetch(folderPath);
        const fileNames = await response.json();
        const markdownData = await Promise.all(
          fileNames.map(async (fileName) => {
            const markdownResponse = await fetch(`${folderPath}/${fileName}`);
            const markdownText = await markdownResponse.text();
            return { fileName, markdownText };
          })
        );
        setMarkdownData(markdownData);
      } catch (error) {
        console.error('Error fetching Markdown files:', error);
      }
    };

    // Call the function to fetch Markdown files when the component mounts.
    fetchMarkdownFiles();
  }, []);

  return (
    <div>
      {markdownData.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <ReactMarkdown source={item.description} />
        </div>
      ))}
    </div>
  );
}

export default MarkdownReader;
