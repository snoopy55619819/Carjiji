const sass = require("sass")
const fs = require("fs")

const sassMiddleware = (options) => {
  return (req, res, next) => {
    const cssFilename = req.path.replace(/\.[^/.]+$/, "")
    const { source, destination, isSass } = options
    const extension = isSass ? 'sass' : 'scss'
    console.log(`Testing sass middleware ran: ${source}${cssFilename}.${extension}`);

    if(req.path.includes(".css")) {
      console.log('sass middleware already redirected');
      return next();
    }
    try {
      const rendered = sass.renderSync({
        file: `${source}${cssFilename}.${extension}`,
        outFile: `${destination}${cssFilename}.css`,
        debug: true,
        outputStyle: 'expanded'
      })
      fs.writeFileSync(`${destination}${cssFilename}.css`, rendered.css.toString())
    } catch (e) {
      console.log(`\n 🙈🚨 SOURCE SASS FILE NOT FOUND FOR ${cssFilename.substring(1)}.${extension} 🚨🙈 \n`)
    }

    res.redirect(`/styles${cssFilename}.css`)
    // next()
  }
}
module.exports = sassMiddleware
