This project was bootstrapped with Create React App.

Follow these simple steps to have your own talknet web
1: Clone this repo using this command
git clone https://github.com/pawan99bux/talknet.git

2: Enter
cd talknet

3: Next
npm install

4: Goto src & Find file named firebase.js => Replace the config data to your project config data.
 Firebase config data you have to replace it with yours & save.

5: Now, Goto src directory again and find file named .firebasesrc


Replace the line "default": "your_project__name" & save.

6: Hit npm start in terminal & Boom you have your own talknet website..!! open at port 3000.
Set Up Hosting in Firebase
0: intstall firebase cli npm i firebase-tools
1: Hit command firebase init
2: Enter Yes
3: Goto the 4th option says - "Configure and Deploy firebase Hosting sites", Use Arrow key to go down & Hit spacebar to select the option and then hit Enter key
4: Enter build for directory && select Yes for all other options.
5: After initialization Completed. Enter
npm run build

6: Now the last command
Enter firebase deploy

Boom! You have succesfully hosted your firebase app. Click on the link and Enjoy!. Don't forget to rate the repository.