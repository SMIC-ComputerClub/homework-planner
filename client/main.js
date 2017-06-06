import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Todos = new Mongo.Collection('todos');

Template.body.helpers({
  todos:function(){
    return Todos.find();
  }
});

Template.body.events({
  'submit .todo-list': function(event){
    var title = event.target.title.value;

    Todos.insert({
      title: title, 
      createdAt: new Date()
    });
    event.target.title.value= "";
    return false; 
  }
});