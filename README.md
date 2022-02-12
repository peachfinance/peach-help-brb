# Peach Help System

## Running Locally

1. Install [Node.js and npm](https://nodejs.org/en/) (If you are on Mac, I suggest using Homebrew, on Linux use apt or find a ppa repo with newer node versions)

2. Install npm dependencies:

        npm install

3. Start a local development server:

        npm run develop

4. Browse to [http://localhost:8000/](http://localhost:8000/)

## Add an extra section

* To add an extra section that is editable in the Netlify CMS - `config.yml` file under `static/admin/config.yml`. Adding a section to it, similar to the other sections in the help will allow you to add additional page under that section.

* To add an extra section on the navigation you'll need to add `doc_sections.yml` under `data/`
