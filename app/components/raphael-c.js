import raphaelo from 'appkit/utils/raphaelo';

export default Ember.Component.extend({
  height: null,
  width: null,
  paper: null,
  didInsertElement: function(){
    var self = this;
    this.set('paper', raphaelo.create({
      element: "r_canvas",
      height: self.get('height'),
      width: self.get('width')
    })); 
   
    //use this in your raphael logic here   
    var canvas = this.get('paper').raphael_canvas;

    //simple convenience bindings
    var height = this.get('height');  
    var width = this.get('width'); 

    var circle = canvas.circle(50, 40, 10);
    circle.attr("fill", "#f00");
    circle.attr("stroke", "#fff");
    
    var circle1 = canvas.circle(0, 0, 10);
    circle1.attr("fill", "#f00");
    circle1.attr("stroke", "#fff");

    var circle2 = canvas.circle(0, width, 10);
    circle2.attr("fill", "#f00");
    circle2.attr("stroke", "#fff");

    var circle3 = canvas.circle(height ,0, 10);
    circle3.attr("fill", "#f00");
    circle3.attr("stroke", "#fff");

    var circle4 = canvas.circle(height , width, 10);
    circle4.attr("fill", "#f00");
    circle4.attr("stroke", "#fff");
  }
});
