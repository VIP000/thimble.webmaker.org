module.exports = {
  defaultPage: function(req) {
    return "<!doctype html>\\n" +
           "<html>\\n" +
           "  <head>\\n" +
           "    <title>" + req.gettext("Your Awesome Webpage created on") + " " + new Date(Date.now()).toUTCString() + "</title>\\n" +
           "  </head>\\n" +
           "  <body>\\n" +
           "    <p>" + req.gettext("Make something amazing with the web") + "</p>\\n" +
           "  </body>\\n" +
           "</html>\\n";
  },
  slugify: function(s) {
    return s.toLowerCase().replace(/[^\w\s]+/g,'').replace(/\s+/g,'-');
  }
};
