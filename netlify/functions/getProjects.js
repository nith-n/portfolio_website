import { readFileSync } from 'fs';
import { join } from 'path';

export const handler = async function(event, context) {
  try {
    const projects = [
      {
        "id": 1,
        "title": "Exploratory Data Analysis of Aircraft Wildlife Collisions",
        "date": "August 25, 2023",
        "details": [
          "Conducted an in-depth data analysis of American aircraft collisions with birds with the aim of finding information that might help reduce these collisions.",
          "Performed data cleaning to handle any missing values, duplicate values, and outliers.",
          "Used Seaborn and matplotlib to create visual representations of data. This allowed for easy identification of any correlations.",
          "Documented the analytical process thoroughly and brainstormed possible solutions to reducing these accidents from the insights gained from the analysis."
        ]
      },
      {
        "id": 2,
        "title": "IIF (Industrial Intake Form) Dashboard",
        "date": "January 15, 2024",
        "details": [
          "Developed a Power BI dashboard to streamline energy efficiency assessments for small industrial facilities in Nova Scotia.",
          "Automated data collection via Microsoft Forms to enhance efficiency and reduce manual entry errors.",
          "Integrated opportunity scoring, enabling engineers to prioritize high-potential sites.",
          "Significantly reduced assessment times and improved the efficiency of service delivery."
        ]
      },
      {
        "id": 3,
        "title": "Financial Data Pipelines via Microsoft Fabric",
        "date": "March 10, 2024",
        "details": [
          "Implemented Microsoft Fabric Data pipelines to automate ETL (Extract, Transform, Load) processes for financial data.",
          "Streamlined data management workflows to ensure accuracy and efficiency in data processing.",
          "Reduced manual intervention by automating data ingestion and transformation processes.",
          "Enhanced the reliability and scalability of financial data operations."
        ]
      }
    ];

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(projects)
    };
  } catch (error) {
    console.error('Error processing projects data:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Failed to load projects data' })
    };
  }
};