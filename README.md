# Angular Customizable ChatBot

This Angular project empowers you to develop a personalized chatbot using openAI tailored to your unique data. By organizing various documents such as README files, text documents, or code files within a specified folder, you can seamlessly index them into the TEMBO RAG stack using this application. Moreover, the integrated search functionality enables you to efficiently retrieve information from the indexed data.

## Installation

Before starting, ensure you have Tembo Cloud set up, Python installed, and the Angular application configured. To run the Angular application, you need to have Node.js and npm installed, which can be obtained from the official Node.js website. Detailed instructions for setting up the Python application and Tembo stack can be found in the documentation available at the [TemboRAGCrud GitHub Repository](https://github.com/anjaneyak10/TemboRAGCrud).

## How to Use

1. **Document Indexing**: Collect all pertinent documents and place them in a designated folder.
   For example, you can utilize the sample documents provided in the `/sampleDocs` directory of this project.
   
2. **Launching the Application**: Initiate the Angular application.
   Use the command `ng serve` to start the application.
   Then, navigate to http://localhost:4200/ in your browser.

3. **Indexing into TEMBO RAG Stack**: Utilize the provided functionality to index the documents into the TEMBO RAG stack.
   You can specify the file path on your system during this process.
   A successful indexing will be indicated as follows:

   <p align='center'>  
  <img src='Images\SuccessfulIndexing.png' />
</p>

   An unsuccessful indexing will appear as:

<p align='center'>  
  <img src='Images\IndexingFailed.png' />
</p>

4. **Search Feature**: Utilize the search functionality to retrieve information from the indexed data.
   Search queries can be related to any content within your documents.
   For instance, if you've indexed TEMBO documentation and code, your search results might resemble:

<p align='center'>  
  <img src='Images\Searching.png' />
</p>