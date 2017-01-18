import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['editing'],
  editing: false,
  actions: {
    editTodo() {
      this.toggleProperty('editing');
    }
  }
});
