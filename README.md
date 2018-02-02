<p align="center">
  <img src="/client/public/convoy.png" width="350"/>
</p>

# convoy
Making group travel easy. This app allows users to create travel groups and track the location of members in that group. Use Convoy on your next roadtrip to avoid texting and calling your friends to see where they are!
## Deployment

 <a href="https://www.heroku.com/">Heroku</a> 


## User Authorization
<p style="text-align:center"><img src ="https://i.gyazo.com/7e9d482db7ed7ea06526f8f315a29e09.gif" />
</p>
<br>
Firebase + React:
Our Auth is wicked smaht, if youve signed in already it will remember.

## UI

<br>

## Firebase



<br>

## SendGrid

When users create a travel group, SendGrid will send an invitation email to all members of the group, inviting them to join Convoy. Check out our email template below...


TEMPLATE

...

When a user clicks the 'Accept Invitation' button, they will be redirected to the /signup page on Convoy. This will associate a convoyID with each user, allowing the travel group to populate as a card on the /convoys page, and the member names to populate the card.

<br>

## Built With

* [Node](https://nodejs.org/en/) - Backend
* [Express](https://expressjs.com/) - Server
* [SendGrid](https://sendgrid.com/) - Email Invitation

* [yarn](https://yarnpkg.com/en/) - Pkg manager
* [firebase](https://firebase.google.com/) - Database
* [Google Maps](https://developers.google.com/maps/) - API
* [React](https://reactjs.org/) - Framework



## Authors

See also the list of [contributors](https://github.com/Jordan-Gilliam/convoy/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



