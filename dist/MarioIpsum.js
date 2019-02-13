/**
 * TYPE: PARAGRAPH or SENTENCE
 * LENGTH: LENGTH OF THE PARAGRAPH or SENTENSE YOU WANT
 * 
 * data-mario='TYPE|LENGTH'
 */
var MIpsum;

(function () {
  
  /**
   * Constructor Function
   * 
   * element Element to hold text generated
   * type Type of the text should be generated
   * length Length of the text should be generated
   */
  MIpsum = function () {
    this.element = null;
    this.type = null;
    this.length = null;
  };
  
  /**
   * Types of text
   */
  MIpsum.prototype.types = {
    PARAGRAPH: 0,
    SENTENCE: 1
  };
  
  /**
   * Words Base
   */
  MIpsum.prototype.words = ["Mario","is","Missing!","Super","Sunshine","Advance","Hotel","vs.","Donkey","Kong",
  "New","Bros.","3D","World","Kart","Kart","Double","Dash!!","Wii","Party","Luigi's","Mansion",
  "Fortune","Street","Golf","Toadstool","Tour","Strikers","Charged","&","Sonic","at","the","Olympic",
  "Games","Saturday","Supercade","The","Show!","Mario","Manga","Adventures","Sports","Mix","Huh!?",
  "Why?","Ugh,","what","irresponsible","guy...","C'est","toi","Wario?!?","you've","ever","seen?","Go,",
  "little","man,","go!","Yeah,","does!","Oh.","Uh-oh,","now","he's","red!","Oh...","It's","cycle!","Oh,",
  "swingcycle!","like","that!","yeah!","'Keep","off","grass'...","seriously,","heeheeheeheehee!","Makes",
  "think,","doesn't","it?","Mm-hmm!","That's,","it...","it-it-it's","cow!","Nononono,","that's","llama!",
  "hello,","Is","your","mama","llama?","I,","bet","she","is!","Yeah!","Can","say,","'chorizo'?","Chorizo!",
  "I'm","glad","could!","Ho-ho!","yeah...","hot","tamale!",".......why?","Look","He's","CRAB!","looks","grumpy!",
  "mean","'crabby',","right?","Now,","Wait,","wait.","Did","'Banano'?","don't","know.","Mama mia...","Look,",
  "a-a-a-a","Bambi!","Hello,","Huh,","so","cute!","Cute!","cow...","No,","albino","alligator.",
  "Mmm-hmm!","hibiscus!","'biscus!","Oh!","hi!","Hi!","bathtub?","soup.","Mmm!","soup!","Hello!","not",
  "bathtub.","no.","soupy.","soupy!","Mmmmm...","And","that,","my","bro,","udon","was","delicious","udon.",
  "Way,","go,","bro!"];
  
  /**
   * Validate whether all requirements would informed
   * 
   * @param {String} type Opitional
   * @param {Integer} length Opitional
   */
  MIpsum.prototype.validateDataQuery = function (type, length) {
    if (!this.element) {
      console.warn('Element not set');
      return false;
    }
    
    if (!this.element.getAttribute('data-mario') && type && length) {
      var query = type + '|' + length;
    } else {
      var query = this.element.getAttribute('data-mario');
    }
    
    if (query.indexOf('|') == -1) {
      console.warn('TYPE and LENGTH must be inform to generate the text.', this.element);
      return false;
    }
    
    query = query.split('|');
    
    if (query[0] != 'SENTENCE' && query[0] != 'PARAGRAPH') {
      console.warn('First parameter TYPE must be PARAGRAPH or SENTENCE.', this.element);
      return false;
    }
    
    if (isNaN(query[1]) || query[1].indexOf('.') > -1 || query[1].indexOf(',') > -1) {
      console.warn('Second parameter LENGTH must be a integer number.', this.element);
      return false;
    } else if (query[1] == 0) {
      console.warn('Second parameter LENGTH must be a integer number over then 0.', this.element);
      return false;
    }
    
    this.type = query[0];
    this.length = query[1];
    
    return true;
  };
  
  /**
   * Get a Word
   */
  MIpsum.prototype.getWord = function () {
    return this.words[Math.floor(Math.random() * (this.words.length + 1) + 0)];
  };
  
  /**
   * Generate a Paragraph
   */
  MIpsum.prototype.getParagrath = function () {
    var max = Math.floor(184/this.length)*1.3, min = Math.floor(121/this.length)*1.3;
    var lengthParagrath = Math.floor(Math.random() * (max - min) ) + min;
    var i = 0;
    var paragrath = [];
    for (; i < lengthParagrath; i++) {
      paragrath.push(this.getWord());
    }
    return paragrath.join(' ');
  };
  
  /**
   * Generate a Paragraph
   */
  MIpsum.prototype.getParagrath = function () {
    var max = 183, min = 121;
    var lengthParagrath = Math.floor(Math.random() * (max - min) ) + min;
    var i = 0;
    var paragrath = [];
    for (; i < lengthParagrath; i++) {
      paragrath.push(this.getWord());
    }
    return paragrath.join(' ');
  };
  
  /**
   * Generate a Sentence
   */
  MIpsum.prototype.getSentence = function () {
    var max = this.length*2, min = this.length;
    var lengthSentence = Math.floor(Math.random() * (max - min) ) + min;
    var i = 0;
    var sentence = [];
    for (; i < lengthSentence; i++) {
      sentence.push(this.getWord());
    }
    return sentence.join(' ');
  };
  
  /**
   * Create a text to the element informed
   * 
   * @param {String} type Opitional
   * @param {Integer} length Opitional
   */
  MIpsum.prototype.createText = function (type, length) {
    if (this.validateDataQuery(type, length)) {
      var text = '';
      
      var i = 0;
      if (this.types[this.type] == 0) {
        //PARAGRAPH
        
        var paragraths = [];
        for (;i < this.length; i++) {
          paragraths.push(this.getParagrath());
        }
        
        text = (paragraths.length > 1 ? paragraths.join('<br><br>') : paragraths.join(''));
      } else if (this.types[this.type] == 1) {
        // SENTENCE
        
        text = this.getSentence();
      }
      
      if (this.element.tagName == 'INPUT' || this.element.tagName == 'TEXTAREA') {
        this.element.value = text.replace(/<br\s*[\/]?>/gi, "\n");
      } else {
        this.element.innerHTML = text; 
      }
    }
  };
  
  window.addEventListener('DOMContentLoaded',function(){
    var mis = [].slice.call(document.querySelectorAll('[data-mario]'));
    mis.forEach(function (mie) {
      var marioIpsum = new MIpsum;
      marioIpsum.element = mie;
      marioIpsum.createText();
    });
    
  });
})();