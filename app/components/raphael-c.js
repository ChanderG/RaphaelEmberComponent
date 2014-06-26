import raphaelo from 'appkit/utils/raphaelo';

export default Ember.Component.extend({
  //templateName: 'raphael-c',
  paper: null,
  didInsertElement: function(){
   // var paper = new Raphael(this.$('r_canvas'), 320, 200);
    window.console.log('didInsertElement');
    var element = this.$('r_canvas');
    this.set('paper', raphaelo.create({
      element: element,
      height: 320,
      width: 200
    })); 
    var circle = this.get('paper').raphael_canvas.circle(50, 40, 10);
    circle.attr("fill", "#f00");
    circle.attr("stroke", "#fff");
  }
});
