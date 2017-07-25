var frameModule = require("ui/frame")
exports.loaded = function(){
    console.log("hello!");
}
exports.signIn = function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/newScreen")
}