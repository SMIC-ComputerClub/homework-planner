import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  todos:[
    {title: "make trump memes"},
    {title: "do a bit of homework"},
    {title: "continue making trump memes"}
  ]
});
