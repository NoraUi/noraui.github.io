# NoraUi Slides
Non-Regression Automation for User Interfaces (official slides)

## Installation

Some reveal.js features, like external Markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](http://nodejs.org/) (4.0.0 or later)

1. Clone the noraui.github.io repository
   ```sh
   $ git clone https://github.com/NoraUi/noraui.github.io.git
   ```

1. Navigate to the slides folder
   ```sh
   $ cd slides
   ```

1. Install dependencies
   ```sh
   $ npm install
   ```

1. Serve the presentation and monitor source files for changes
   ```sh
   $ npm start
   ```

1. Open <http://localhost:8000> to view your presentation

   You can change the port by using `npm start -- --port=8001`.

### Folder Structure
- **css/** Core styles without which the project does not function
- **js/** Like above but for JavaScript
- **plugin/** Components that have been developed as extensions to reveal.js
- **lib/** All other third party assets (JavaScript, CSS, fonts)

## Contributing

This slides build with [reveal.js](https://github.com/hakimel/reveal.js)

## License

[![license](https://img.shields.io/github/license/NoraUi/noraui.github.io.svg)](https://github.com/NoraUi/noraui.github.io/blob/master/LICENSE) See LICENSE for details

![footer](https://noraui.github.io/img/end.png)
