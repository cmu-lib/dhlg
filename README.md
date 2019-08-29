## Build and deployment TBD

## Adding a new page TBD

** TBD brief step-by-step on how to name the file, where to place it, what yaml fields (identifier? meta-title? permalink? etc.) are needed, and what needs to be updated in _data/navigation.yml for:

#### Required yaml fields

The following are required fields for all new *.md files, including project videos, topics, and content pages.

1. identifier - a unique lowercase HTML-compatible string (cannot begin with a number, and must contain only a-z characters, with no spaces) used to identify the project video page
2. meta_title- - the page title which will be displayed in the HTML <head>
3. title - the page title displayed within the page body itself (can be the same as meta_title, but please supply both)
4. permalink - lower case url path relative to the baseurl / domain of the entire site, with a trailing slash / . This is used to generate the breadcrumbs in conjunction with the title field
5. creationdate: YYYY-MM-DD
6. date_updated: YYYY-MM-DD [this should be the last date the file was updated, only one value should be supplied]

for any page it is possible to add multiple authors using the following format:

~~~
authors:
- name: [enclose in double quotation marks "" if single quotations in the text ']
  bio: [enclose in double quotation marks "" and only use single quotations in the text ']
  affiliation: [enclose in double quotation marks "" if single quotations in the text ']
  uri:
~~~

1. adding new project video
  required fields include:
  - breadcrumb: true
  - layout: project
  - disciplines: list of matching discipline identifiers
  - topics: list of matching topic identifiers
  - source: community [CMU contributors use core]
  - youtubeid: [Youtube unique ID]
  - teaser: [short description of the video, which will be truncated at 80 characters when displayed on the project videos landing page]
2. adding new dh topic
  - topics: list of matching topic identifiers
  - breadcrumb: false
  - layout: page
3. adding new content page
  - breadcrumb: true
  - layout: page

For new content pages, please update _data/navigation.yml and place the page in the menu under existing main items. entries require the menu item text and the associated permalink, e.g.:
~~~
title: "Instructional Blogs / Misc"
url: "/global-resources/educational-resources/instructional-blogs"
~~~

For new disciplines, please update _data/disciplines.yml with the discipline name and a unique lower case identifier (as per above). This data file acts as a control for disciplines across the site: in order for projects to match by discipline, the discipline must appear in this data file even if the discipline is declared in the yaml header of the project. Entries are formatted as follows:
~~~
- identifier: "modernlanguages"
  name: "Modern Languages"
~~~

New topics are controlled by adding a new topic, with a unique identifier, and title.

## Credits TBD

- link to feeling responsive
- link to Agile Humanities
- link to Mellon
- link to CMU lib
- susan & contribs
