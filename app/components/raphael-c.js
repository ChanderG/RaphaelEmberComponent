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
    var circle = this.get('paper').raphael_canvas.circle(50, 40, 10);
    circle.attr("fill", "#f00");
    circle.attr("stroke", "#fff");
    
    var circle1 = this.get('paper').raphael_canvas.circle(0, 0, 10);
    circle1.attr("fill", "#f00");
    circle1.attr("stroke", "#fff");

    var circle2 = this.get('paper').raphael_canvas.circle(0, 100, 10);
    circle2.attr("fill", "#f00");
    circle2.attr("stroke", "#fff");

    var circle3 = this.get('paper').raphael_canvas.circle(100,0, 10);
    circle3.attr("fill", "#f00");
    circle3.attr("stroke", "#fff");

    var circle4 = this.get('paper').raphael_canvas.circle(100,100, 10);
    circle4.attr("fill", "#f00");
    circle4.attr("stroke", "#fff");
  }
});
