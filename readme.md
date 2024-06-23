You need to do a little prep for this to work:

1) Make sure you have MySQL installed

2) Clone this repo and then run:

    npm install

3) Within the /be folder you will need to create a .env file

4) Add the following line to this file adding your auth details and correct port:

    DATABASE_URL=mysql://janedoe:mypassword@localhost:3306/ylstodo

5) Open a terminal and navigate to the /be directory and run:

    npx prisma db push

6) As the Front and Backends are in seperate directories you'll need to open up a second terminal and navigate to /fe in the new one and then run the below code in each terminal:
    
    "npm run dev"

7) If you open a browser and navigate to http://localhost:3000/ it will load the app, the backend is hardcoded to port 12345 with can be changed in the index.ts file in /be/src

8) You can add your own to-do by entering a title and hitting enter or add, a black field won't be accepted. If you then click on your new list you will be able to add items to that list in the same fashion.

9) You can mark the task completed by clicking on the check icon to the left and delete the task by clicking on the trash icon to the right. There is no confirmation for either.

10) If you wish to delete the list you can do so by clicking the Delete List button and then confirming it.