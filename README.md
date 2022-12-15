# CSCI2720 Project test
## How to install
```
npm install
```
## How to run
* Run the client (frontend)
```
npm start
```
* Run the server (backend)
```
cd src
```
```
node server.js
```
* or run both with concurrently
```
npm run dev
```
## Application Requirements
* User Actions
- [ ] List all locations in a table as links to single locations, and allow sorting of the table 
with number of events at venue
- [ ] Show all locations in a map, with links to each single location
- [ ] Search for locations which contain keywords in the name which will result in a table of 
location results
- [ ] A separate view for one single location, containing:
    * a map showing the location
    * the location details (events or traffic speed)
    * user comments, where users can add new comments seen by all other users
- [ ] Add location into a list of user’s favourite locations, and see the list in another view
- [x] See the username in the top left/right of screen, and be able to log out
* Admin Actions
- [ ] CRUD stored event details or road names in the local database
    * We will not test other features (e.g., map, comments) if deleting an existing location
- [x] CRUD user data (username and password only) in the local database
    * We will not test other features (e.g., comments) if deleting an existing user
- [x] Log out as admin
* Non-user Actions
- [x] Log in as user with username and password
- [x] Log in as admin using username and password both as admin


