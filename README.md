api_project

# Rick & Morty Character Viewer

### *created for General Assembly's SEI Course*
**Goal:** Create a web application hosted on Github Pages that displays relevant character-specific data using the [Rick & Morty API](https://rickandmortyapi.com).
**Start Date:** April 1st 2021
**Hours:** 1 hour
___

## Requirements
1. Use AJAX to make a request to an external data source like OMDBapi and insert some of the data retrieved into the DOM
2. Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc)
3. Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc

## Goal
Create a web application hosted on Github Pages that displays relevant character-specific R&M data using the [Rick & Morty API](https://rickandmortyapi.com).
___

## Tasks

- [ ] **create HTML containers**
	- [ ] sticky nav header
	- [ ] R&M logo somewhere
	- [ ] body
	- [ ] sample character card
	- [ ] footer
- [ ] **create top navigation bar**
	- [ ] implement search bar for characters
	- [ ] some kind of R&M picture
	- [ ] implement filter system (by gender, origin planet, current location, dead/alive)
- [ ] **display relevant character-specific R&M data from API call in a "character card"**
	- [ ] card's entire background image/color changes based on character's origin planet (maybe if they're alive or dead green/red hue)
	- [ ] image of character on card
	- [ ] display full name and gender of character on card
	- [ ] on click of more info, display species, type(subspecies), gender, origin, and location(last known) of character on card
- [ ] **responsive design**
	- [ ] desktop full-page system (show 20 characters per page)
	- [ ] tablet scroll system (show 4 at a time, displayed over 5 sub-pages)
	- [ ] phone single/carosel system 1: (alla tinder, single view OF the 20 pulled characters put into a carosel)
	- [ ] phone scroll system 2: (like desktop, showing all 20 characters, only 1 character viewable at a time and scroll down the page to see next)
___

### html flow

1. top sticky nav
	1. search bar
	2. filters (alive/dead, gender, planet, maybe species)
2. character cards (built from API data)
	1. name
	2. picture
	3. species
	4. type
	5. origin
	6. status
3. footer
	1. date created/maintained
	2. picture, misc info