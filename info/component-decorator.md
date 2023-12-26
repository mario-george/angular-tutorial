# @Component

imported from @angular/core

it tells the following class is an angular component

take an object to configure the component have a selector that will be used to point at this component and to instaniate it

the naming convention of a component will be for ex server ServerComponent

we need to import it in app module and append to declarations

# selector property

can be omitted not mandatory you can render it using routing

has to be unique

## element selector

selector : "app-server"

<app-server></app-server>

## attribute selector

selector : "[app-server]"

<div app-server></div>

## select by class

selector : '.app-server'

<div class='app-server'></div>

##

# template or templateUrl property

this is a mandatory property

templateUrl : "location to corresponding html "

template : `use backticks to write js template expressions`

if used regular quotes you can't use line breaks as you regulary did

template:'<app-server></app-server><app-server></app-server>'

# stylesUrl or styles property

not a mandatory property
