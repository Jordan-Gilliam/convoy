<p align="center">
  <img src="/client/public/convoy.png" width="350"/>
</p>

# Convoy
Making group travel easy. This app allows users to create travel groups and track the location of members in that group. Use Convoy on your next roadtrip to avoid texting and calling your friends to see where they are!
## Deployment

 <a href="https://warm-woodland-20139.herokuapp.com/">Heroku</a> 


# User Authentication
[![https://gyazo.com/425c7acb6d28d47fca17ba5ccb10963d](https://i.gyazo.com/425c7acb6d28d47fca17ba5ccb10963d.png)](https://gyazo.com/425c7acb6d28d47fca17ba5ccb10963d)

<br>
<br>

### Firebase + React:
#### Our Auth is wicked smart, it uses your browser history to remember whether or not you are logged in. 
<br>

<p style="text-align:center"><img src ="https://i.gyazo.com/7e9d482db7ed7ea06526f8f315a29e09.gif" />
</p>
<br>

# UI
Using a combination of CSS, Materialize, and MaterialUI,  Convoy boasts a user-friendly, responsive design. Convoy's UI focuses on simplicity and usability, using a mobile first SPA. The custom graphics are implemented with media-queries, allowing Convoy to look great on any device. Red is a symbol of energy, strength, and determination, which are three characteristics most people on an adventure experience. Convoy harnesses this by using subtle hints of red throughout the app. 

#### Mobile 
![ConvoyImage Small](./client/public/convoyHere.png)

#### Min-Width @768px
![ConvoyImage Wide](./client/public/convoywider.png)

<br>

# Firebase

User authentication and data storage runs through Firebase. When a user creates an account, that account is verified and authenticated through Firebase Authentication. This will automatically create a table called 'profiles' in the database that houses all user information (with the exception of password). 

Users have the option to create an unlimited number of convoys, which will store in the 'convoys' table in the database. Using queries, each table is updated accordingly to link the user profile with his/her convoys and the convoy with the user profiles. 

Firebase database information is linked to the UI, allowing user pages to update seamlessly without a page reload. 



<br>

# SendGrid

When users create a travel group, SendGrid will send an invitation email to all members of the group, inviting them to join Convoy. Check out our email template below...


When a user clicks the 'Accept Invitation' button, they will be redirected to the /signup page on Convoy. This will associate a convoyID with each user, allowing the travel group to populate as a card on the /convoys page, and the member names to populate the card.

<br>

# Built With

* [Node](https://nodejs.org/en/) - Backend
* [Express](https://expressjs.com/) - Server
* [SendGrid](https://sendgrid.com/) - Email Invitation

* [yarn](https://yarnpkg.com/en/) - Pkg manager
* [firebase](https://firebase.google.com/) - Database
* [Google Maps](https://developers.google.com/maps/) - API
* [React](https://reactjs.org/) - Framework



# Authors

See also the list of [contributors](https://github.com/Jordan-Gilliam/convoy/graphs/contributors) who participated in this project.

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



