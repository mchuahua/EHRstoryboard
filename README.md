# EHRstoryboard

1. Javascript
- .js code should be embedded inside the articulate storyline file. Make sure the variables match whatever variables are needed to be sent, and no undefined variables are sent as it will mess up the POST retrieval logic
- The POST link is embedded in the .js; there is no need to change it unless google scripts gets shut down or there is an outage.
- Member variables being sent in the javascript code should match the scoreboard google sheets headers.
- You can test POST requests using resttesttest.com which is useful if you don't have access to the articulate storyline file.

2. Scoreboard
- The Scoreboard sheet is the raw parsed data from the POST request.
- the data_processed sheet is the processed useful information to display
- This useful information is displayed through the scoreboard html google scripts

3. Scoreboard html
- Accesses data_processed sheet and outputs a nice html
- Make sure number of columns matches the number of columns in data_processed
- Otherwise, the html can be edited as you wish



**UBC Health Informatics Game**
