module.exports = function ({ title, content }) {
  return `
    <!doctype html>
    <html>
      <head>
        <!-- <title>${title}</title> -->
        <title>Cosmo Qiu</title>
        <link rel="stylesheet" href="./css/site.css">
      </head>
      <body>
        <div class="profile">
        ${content}
        </div>
        <footer>
           Like this page? <a href="https://github.com/hackjutsu/geek-profile">Fork me to create your own!</a>
        </footer>
      </body>
    </html>
  `;
};
