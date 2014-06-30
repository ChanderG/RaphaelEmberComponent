#Raphael component for EmberJS (WIP)

A Raphael canvas Ember component and simple usuage.
This is an example using the component.
As such the component provides an interface between Raphael and Ember.
Project structure is [EAK](https://github.com/stefanpenner/ember-app-kit)

####Build Instructions
Standard EAK instructions.

####Demo
[See Demo](http://chanderg.github.io/raphael-ember-component)

####Usuage
To use the component in your project, place the following files in the corresponding location:

app/utils/raphaelo.js  - contains the actual raphael object creation
app/components/raphael-c.js  -  contains the component, add drawing logic here
app/templates/components/raphael-c.hbs  - just a div to hold the raphael canvas

Call the component using:
```
{{raphael-c height=h width=w}}
```
####LICENSE
MIT
