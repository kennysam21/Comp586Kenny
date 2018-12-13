# How to run on local computer

Install npm packages with npm install in the ClientApp directory.

Restore nuget packages with dotnet restore in the WebApp directory.

Set the DefaultConnection in the appsettings.json file to the local SQL database

Create the database with dotnet ef database update in the WebApp directory.

Run the project with dotnet run in the WebApp directory.

Open browser to http://localhost:5000.
