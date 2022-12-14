# CSCI2720 Project
## How to install
```
npm install
```
## How to run
* Run the client (frontend)
```
npm run dev
```
## Application Requirements
* User Actions
- [ ] List all locations in a table, and allow sorting of the table with one of the listed fields, 
linking to single locations
- [ ] Show all locations in a map, with links to each single location
- [ ] Search for locations which contain keywords in one field chosen by the user which 
will result in a table of location results
- [ ] A separate view for one single location, containing:
    * a map showing the location
    * the location details (events or traffic speed)
    * user comments, where users can add new comments seen by all other users
- [ ] Add location into a list of user’s favourite locations, and see the list in another view
- [ ] See the username in the top left/right of screen, and be able to log out
* Admin Actions
- [ ] Request updated data of events or road names, i.e., reload from the online dataset, 
without affecting data which does not come from API (e.g., user comments within 
your app)
- [ ] CRUD stored event details or road names in the local database
    * We will not test other features (e.g., map, comments) if deleting an existing location
- [ ] CRUD user data (username and password only) in the local database
    * We will not test other features (e.g., comments) if deleting an existing user
- [x] Log out as admin
* Non-user Actions
- [x] Log in as user with username and password
- [x] Log in as admin using username and password both as admin
