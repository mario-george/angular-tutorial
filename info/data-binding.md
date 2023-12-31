# definition

is communication between template and Typescript code

if you want to output data from ts code to template

String Interpolation or property binding

## String Interpolation

in template you can write {{}} inside it you can type ts expressions

{{propertyName}}

{{'string will be returned'}}

{{isInstructor ? 'instructor' :'not instructor'}}

you can't write multi line expressions like if / for statements but ternary expressions are possible

this is important

## STring Interpolation has to be resolved to a string at the end

# react to user events from template to ts code

# event binding

(click)= 'onCreateServer()'

like onClick property on the div tag but without on and lower case you can bind events like this and type ts expressions (fn property etc)

## property binding

[disabled]="!allowNewServer"

<div [innerHtml]="serverCreationMessage"></div>
