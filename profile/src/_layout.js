module.exports = function ({ title, content, frontMatter }) {
  return `
    <!doctype html>
    <html>
      <head>
        <!-- <title>${title}</title> -->
        <title>${frontMatter.title}</title>
        <link rel="stylesheet" href="./css/site.css">
      </head>
      <body>
        <div class="profile">
        ${content}
        </div>
        <footer>
           Like this page? <a href="${frontMatter.github}">Fork me to create your own!</a>
        </footer>
      </body>
    </html>
  `;
};
