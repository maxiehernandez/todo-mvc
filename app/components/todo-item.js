import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['editing'],
  editing: false,
  // this key is taking the editing binding above it& giving it a boolean value, if it was a string it would give it a string value
  actions: {
    editTodo() {
      this.toggleProperty('editing');
    },
    submitTodo() {
      const todo = this.get("zebra");
      if (todo.get("title") === "") {
        todo.destroyRecord().then(() => {
          this.toggleProperty("editing");
        });
      } else {
        this.toggleProperty("editing");
      }
    },
    deleteTodo() {
      this.get("zebra").destroyRecord();
    }
  }
});
