---
layout: page
title: "style"
meta_title: "style"
breadcrumb: true
permalink: "style/"
---
# Heading 1 {#h1}

## Heading 2 {#h2}

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a eros risus. Vestibulum sed est non eros cursus pharetra id a urna. Morbi interdum facilisis augue, ut consequat massa venenatis a. Cras accumsan dolor at maximus iaculis. Ut rutrum tellus erat, nec suscipit leo laoreet interdum. In scelerisque erat id molestie pharetra. In hac habitasse platea dictumst. Mauris dapibus bibendum nulla, eu euismod odio lobortis a. Maecenas nec felis commodo, convallis mauris eu, bibendum nibh. Nam lobortis congue mi sed viverra.
> Duis sed rhoncus magna. Proin vitae turpis ac nulla sodales mattis. Morbi in tortor vel mauris egestas bibendum ac vitae nisi. Ut efficitur, diam sed laoreet eleifend, quam tortor suscipit arcu, sed iaculis sapien nisl sed metus. Fusce vitae sagittis ante, ut ornare purus. Vivamus porta erat risus, vel iaculis est condimentum quis. Cras pretium luctus sagittis. Pellentesque blandit porta orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pulvinar ante mauris. Duis porta ullamcorper lectus, sit amet hendrerit turpis interdum ac.

Maecenas malesuada nunc luctus condimentum maximus. Donec tortor ante, maximus porta auctor eu, varius quis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sit amet turpis eros. Duis imperdiet condimentum congue. Nullam risus quam, semper ut euismod ultrices, lobortis non elit. Sed laoreet ligula ut enim eleifend, sit amet egestas arcu vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut aliquam est non ligula tristique lobortis. Quisque congue, leo ac porta iaculis, erat purus fermentum erat, at egestas massa mi et lectus. Donec suscipit, nunc id egestas varius, odio urna consectetur felis, quis aliquet mauris diam sed est. Etiam et tellus consequat, scelerisque tortor sit amet, molestie eros.

{:refdef: class="tip"}
> ## Tip: Header goes here
  > Nam sit
  > {: class="morse"}
  > Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut aliquam est non ligula tristique lobortis. Donec suscipit, nunc id egestas varius
  > {: class="tiptext"}
{:refdef }
date_updated: 2019-08-29
---

* one
* two
* three
  - first
  - second
    + third
    + more
* four
* five

1. first
2. second
3. third
  - again
  - more

~~~~~~~~
this is some code
~~~~~~~~

This is a Ruby code fragment `x = Class.new`{:.language-ruby}

This is [a link](http://rubyforge.org) to a page.
A [link](../test "local URI") can also have a title.
And [spaces](link with spaces.html)!
This is a [link](http://example.com){:hreflang="de"}

Here comes a ![smiley](../images/smiley.png)! And here
![too](../images/other.png 'Title text'). Or ![here].
With empty alt text ![](see.jpg)

*some text*
_some text_
**some text**
__some text__

This is some text.[^1]. Other text.[^footnote].

|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|
| Second body     |            |                 |                |
| 2 line          |            |                 |                |
|=================+============+=================+================|
| Footer row      |            |                 |                |
|-----------------+------------+-----------------+----------------|

|---
| Default aligned | Left aligned | Center aligned | Right aligned
|-|:-|:-:|-:
| First body part | Second cell | Third cell | fourth cell
| Second line |foo | **strong** | baz
| Third line |quux | baz | bar
|---
| Second body
| 2 line
|===
| Footer row


[^1]: Some *crazy* footnote definition.
[^footnote]: another footnote