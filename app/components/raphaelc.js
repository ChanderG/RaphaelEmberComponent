export default Ember.Component.extend({
  didInsertElement: function(){
    var paper = new Raphael(this.$('r_canvas'), 320, 200);
    var circle = paper.circle(50, 40, 10);
    circle.attr("fill", "#f00");
    circle.attr("stroke", "#fff");
  }
});
