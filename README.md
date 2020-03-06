## Office junior

Create presentations and documents with Office junior.
[Live demo](https://giovannikaaijk.github.io/project-1-1920/index.html)

<img width="1440" alt="Schermafbeelding 2020-03-05 om 16 17 09" src="https://user-images.githubusercontent.com/43671292/76075831-fb5e8000-5f9d-11ea-9ac5-3bea5ae2bd6e.png">
<img width="1440" alt="Schermafbeelding 2020-03-05 om 16 18 38" src="https://user-images.githubusercontent.com/43671292/76075829-fac5e980-5f9d-11ea-8fb5-b13a71f56977.png">
<img width="1440" alt="Schermafbeelding 2020-03-05 om 16 23 23" src="https://user-images.githubusercontent.com/43671292/76075821-f7caf900-5f9d-11ea-8582-f60ea50848c1.png">

## Table of Contents

- [Office junior](#office-junior)
  * [Description](#description)
  * [Features](#features)
    + [Api](#api)
    + [Drag and drop](#drag-and-drop)
    + [Color picker](#color-picker)
  * [Packages used](#packages-used)
  * [Installation](#installation)
  * [Keep up to date](#keep-up-to-date)
  * [Contributing](#contributing)

## Description

A tool for children to make presentations and documents. The presentation tool has been created for now. A child can drag elements such as titles and images to the presentation and can change these elements. The images are from the OBA book [API](#api), the book covers are retrieved.

## Features

### Api

Trough an API the app collects different book covers based on input, the following data is being retreived from the API:
```
id: "|oba-catalogus|998141"
frabl: {key1: "schreeuw onder water", key2: "øbro", cnt: "1", value: "50D56A48C9F360A0"}
detailLink: "http://zoeken.oba.nl/detail/bro/Schreeuw-onder-water/Boek/?itemid=%7coba-catalogus%7c998141"
titles: (2) ["Schreeuw onder water", "Schreeuw onder water / Øbro & Tornbjerg"]
isbn: ["9789044617818"]
coverimages: (2) ["https://cover.biblion.nl/coverlist.dll?doctype=mor…32795969&isbn=9789044617818&lid=&aut=&ti=&size=70", "https://v111.nbc.bibliotheek.nl/thumbnail?uri=http…a.bibliotheek.nl/ggc/ppn/332795969&token=c1322402"]
formats: [{…}]
authors: (3) ["Øbro", "... Tornbjerg", "Angélique de Kroon"]
authorsDetailed: (3) [{…}, {…}, {…}]
year: "2011"
publisher: ["Prometheus, Amsterdam, 2011"]
genres: ["Thriller"]
languages: (2) ["Nederlands", "Deens"]
summaries: ["Een psychologe en 'profiler' in dienst van de poli…e moord op een gynaecoloog op zijn geweten heeft."]
description: (2) ["347 p", "347 p ; 22 cm"]
note: "Vert. van: Skrig under vand. - Cop. 2010"
undup: {alsoAvailableAsCount: "0", items: Array(1)}
```
The api data:
```
cors = 'https://cors-anywhere.herokuapp.com/';
endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
key = String - Your public key;
secret = String - Your secret key;
detail = String - Detail level;
```

### Drag and drop
You are able to drag and drop elements into the presentation area.

### Color picker
You are able to change colors by using a color picker.

## Interested in the project? Use the following steps to clone the project to your local computer:

## Before you clone

* Install Node.js
* Install a Code Editor
* An CLI(Command Line Interface) like bash or iTerm

## Packages used

* @fantasy-color/hsv-to-rgb": "^1.0.0"
* @simonwep/pickr": "^1.5.1"
* rgb-hex": "^3.0.0"
* webpack": "^4.42.0"
* webpack-cli": "^3.3.11"

* When cloned, use npm install to install all the packages at once

## Installation

```
git clone https://github.com/GiovanniKaaijk/project-1-1920.git
```
Get into the right folder
```
cd project-1-1920
```
Install used npm packages
```
npm install
```
Run the webpack builder
```
npm run watch
```

## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

