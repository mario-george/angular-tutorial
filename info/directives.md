# structural directives

we put \* before it which means it adds or remove the element not change or modify the element like attribute directives

like \*ngIf

# ngStyle

we use property binding with it and give a js object with the css properties you can make the value dynamic by calling a method and checking the properties of the instance of the component

single quotes for hyphen
or camelCase

'background-color':'red'

or

backgroundColor:'red'

# ngClass 

to dynamically add or remove classes based on the condition you also use property binding and take a js object

and the key is the class name and the value is the condition that should add or remove that class


# *ngFor
structural directives you need an array
and it makes a local temp value 

for example

<app-server *ngFor="let server of servers;let i = index">
{{i}} {{server}}
  
</app-server>

you create a local temp server also there is a reserved expression called index

