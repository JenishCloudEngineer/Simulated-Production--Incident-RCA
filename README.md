# Simulated-Production--Incident-RCA

cd  Simulated-Production--Incident-RCA

## Run the app

app.js is the app with bug 

app-fixed.js is the app without bug.

Run both the apps alternatively to check the output.

## start the appp

node app.js

Check on browser or curl http://localhost:8080/ ,  curl http://localhost:8080/payment

http://localhost:8080/payment - is for the payment application that prints the value.

http://localhost:8080/payment  - is to check the status or the app is running.

Refresh the page for multiple time to create the multiple numbers of logs

Do this again for app-fixed.js to get the correct logs, before doing it stop the application by ctl+c .

## Check logs

now check the terminal where you started the app. 

 In new terminal cd Simulated-Production--Incident-RCA

 cat service.logs

 Here it shows the logs for the app 

 From this logs analyze the cause of error and create the report and a propse. 
