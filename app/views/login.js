var frameModule = require("ui/frame");
var data;
var email;
var observableModule = require("data/observable");
var user = new observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});
exports.loaded = function(args){
    page = args.object;
    page.bindingContext = user;
}
exports.signIn = function(){
    email = page.getViewById("email");
    console.log(email.text);
    var topmost = frameModule.topmost();
    topmost.navigate("views/newScreen");
}
