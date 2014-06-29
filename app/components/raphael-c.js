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
    
    /* Here add your drawing logic etc*/
    
    /*
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
    */

    var background = canvas.rect(0,0, height, width);
    background.attr({fill: "#333", stroke: "#333"}); 

    var r = canvas.circle(100, 100, 50);
    r.attr({fill: "hsb(0, 1, 1)", stroke: "none", opacity: 0.5});
    var g = canvas.circle(210, 100, 50);
    g.attr({fill: "hsb(.3, 1, 1)", stroke: "none", opacity: 0.5});
    var b = canvas.circle(320, 100, 50);
    b.attr({fill: "hsb(.6, 1, 1)", stroke: "none", opacity: 0.5});
    var p = canvas.circle(430, 100, 50);
    p.attr({fill: "hsb(.8, 1, 1)", stroke: "none", opacity: 0.5});
    
    var start = function () {
      this.ox = this.attr("cx");
      this.oy = this.attr("cy");
      this.animate({r: 70, opacity: 0.25}, 500, ">");
    },
    move = function (dx, dy) {
      this.attr({cx: this.ox + dx, cy: this.oy + dy});
    },
    up = function () {
      this.animate({r: 50, opacity: 0.5}, 500, ">");
    };
    canvas.set(r, g, b, p).drag(move, start, up);

  }
});
