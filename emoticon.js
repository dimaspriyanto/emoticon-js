/*
 * Emoticon library for Prototype
 * version: 1.0.0 beta
 *
 * created by: Dimas Priyanto (dimas.priyanto@gmail.com)
 * created at: 17/02/2010 (v 1.0.0)
 * 
 */


var Emoticon = Class.create({});

RegExp.escape = function(text) {
  if (!arguments.callee.sRE) {
    var specials = [
      '/', '.', '*', '+', '?', '|',
      '(', ')', '[', ']', '{', '}', '\\'
    ];
    arguments.callee.sRE = new RegExp(
      '(\\' + specials.join('|\\') + ')', 'g'
    );
  }
  return text.replace(arguments.callee.sRE, '\\$1');
}

Emoticon.emoticonize = function(string){
  var patterns = [
    {code: ":)", img: "smile"},
    {code: ":(", img: "sad"},
    {code: ":D", img: "hoho"},
    {code: ":))", img: "laugh"},
    {code: ":((", img: "cry"},
    {code: ";)", img: "wink"},
    {code: ":*)", img: "clown"},
    {code: ":|", img: "grim"}
  ];
  var img_tag;
  var reg_exp;

  patterns.each(function(pattern){
    img_tag = "<img src=\"/javascripts/emoticon/images/"+pattern.img+".gif\" \>";
    reg_exp = RegExp.escape(pattern.code);
    string = string.replace(new RegExp(reg_exp), img_tag);
  });

  return string;
}

String.emoticonize = function(string){
  return Emoticon.emoticonize(string);
}

String.prototype.emoticonize = function(){
  return Emoticon.emoticonize(this);
}
