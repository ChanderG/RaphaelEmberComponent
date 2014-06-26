export default Ember.Object.extend({
  raphael_canvas: null,
  element: null,
  height: null,
  width: null,
  init: function(){
    this._super();
    this.set('raphael_canvas', new Raphael(this.element, this.height, this.width));
  }
});
