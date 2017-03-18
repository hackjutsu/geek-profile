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
      </body>
    </html>
  `;
};
