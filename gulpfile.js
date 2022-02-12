const { src, dest } = require("gulp");
const del = require("del");
const packFolder='dist'
function build(cb) {
  del([packFolder],{force:true}).then(()=>{
    src("popup/public/**").pipe(dest(`${packFolder}/popup/public`));
    src("assets/**").pipe(dest(`${packFolder}/assets`));
    src(["manifest.json"]).pipe(dest(`${packFolder}/`));
  });
  return cb();
}

exports.build = build;
