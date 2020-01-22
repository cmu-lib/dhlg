---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: page
title: "About The DHLG"
meta_title: "About The DHLG"
breadcrumb: true
permalink: "about/"
header:
  image_fullwidth: header_unsplash_12.jpg
authors:
- name: Scott B. Weingart
  bio:
  affiliation: Carnegie Mellon University
  uri:
date_updated: 2019-10-31
---
The Digital Humanities Literacy Guidebook (DHLG) was first developed in the summer of 2019 as part of a 5-year A.W. Mellon Foundation grant to Carnegie Mellon University for the advancement of digital humanities and technology-enhanced learning on campus. Its goal is to offer its audience, newcomers to DH, a broad sense of the landscape of digital humanities, and a map to chart their course through it.

The DHLG is inspired by a series of five week-long summer workshops offered at CMU in [2015](http://www.andrew.cmu.edu/user/sbweinga/), [2016](http://www.andrew.cmu.edu/user/sbweinga/2016.html), [2017](http://www.andrew.cmu.edu/user/sbweinga/2017.html), [2018](https://scottbot.github.io/DH-Literacy-Workshop-at-CMU/schedule), and [2019](https://dsharp-cmu.github.io/DH-Literacy-Workshop-at-CMU-2019/). Lessons learned in these workshops helped shape the site into its current structure.

# Scope, Timeliness, and Digital Decay

The DHLG is built with the future in mind. 

We use the static site generator jekyll atop github in order to ensure long-term preservability, as well as the site's use in areas with limited internet access. The responsive design complies with HTML5, CSS3, ECMAScript 6, and AODA-WCAG accessibility standards, ensuring visitors of any ability or device will be able to access the page.

Because a resource like this will necessarily always be incomplete, out of date, and limited in perspective, the site's architecture allows for community contributions from anyone with a github account. We hope this will help keep the resource as relevant as possible for years to come.

Dead links, out-of-date information, and other issues will inevitably accrue. The site's caretaker, Scott B. Weingart, will to keep on top of these, but the DHLG also needs your help to keep it fresh and useful for the next cohort of digital humanists.

A locally-viewable version of this website as of 2019-11-04, including all the project video files, has been deposited in CMU's institutional repository: https://doi.org/10.1184/R1/10250381

Please see the [contributing](#contributing) section below for details on how to give back to this resource.

# Core vs. Community Content

As the DHLG began as a Carnegie Mellon University project, the majority of its early content was created by employees or affiliates of the university. On account of some legal complexities, we need to separate this original "CMU" content from "Community" content, which is why the former is marked in amber, and the latter in blue. As the guidebook grows, our hope is majority of content will come from you, the community, and thus appear in blue.

# Core Contributors

The Digital Humanities Literacy Guidebook was conceived and orchestrated by **Scott B. Weingart**, Program Director of Digital Humanities at Carnegie Mellon University. 

Much of the original content was written or edited by Online Workshop Coordinator **Susan Grunewald**, CMU History Ph.D. and the Digital History Postdoctoral Associate at the University of Pittsburgh World History Center.

**Matthew Lincoln**, a research software engineer and digital humanities developer at Carnegie Mellon University Libraries, oversaw the technical components of the DHLG. The majority of the technical implementation itself was contracted to **Agile Humanities Agency**. Their team included **Dean Irvine**, **Bill Kennedy**, and **Matt Milner**.

Other core contributors include Dominique Luster, Tatyana Gershkovich, AmyJo Brown, Bob Gradeck, Emma Slayton, David Kaufer, Elaine Frantz, Ruth Mostern, Elisa Beshero-Bondar, Michael Christel, Matthew J. Lavin, Simon DeDeo, Benjamin Miller, Elizabeth Archibald, Stephen Wittek, Nico Slate, S.E. Hackney, Patrick Juola, Kathy Newman, Steven Gotzler, Felipe Gómez, and Chloe Perry.

# Community Contributors

The majority of the list content on the site as of September 2019 originated with permission from [DHNotes](https://github.com/dh-notes/dhnotes), a Columbia University project by **Dennis Tenen** (Columbia University) and **Alex Gil** (Columbia University), among others.

The job resources section includes editorial advice written by **Matthew Hannah** (Purdue University), slightly modified on import to the DHLG. **Lauren Tilton** (University of Richmond) offered the initial list of DH organizations. **Zoe LeBlanc** (Princeton University) and **Scott B. Weingart** collaborated on curating the hiring interviews.

Although the majority of DH topic descriptions were written by **Susan Grunewald**, some were written by **Hannah Alpert-Abrams** (Program Officer in DH). More details on who contributed what content is available in the [markdown files on github](https://github.com/cmu-lib/dhlg/tree/master/_topics) and the github [list of contributors](https://github.com/cmu-lib/dhlg/graphs/contributors).

# Contributing

Because DH is always growing and changing, we welcome changes and contributions to this resource via pull requests to the github repository. You'll find links at the bottom of each page for its home on github, which can be used for editing pre-existing pages. More details on how to contribute can be found at the README.md file in the [github root directory](https://github.com/cmu-lib/dhlg). 

If you'd like to contribute a video, a new topic description for the glossary, or entirely new pages, the process is a little more complicated than a simple edit of a github page, unless you're a seasoned jekyll user. Feel free to get in touch with Scott B. Weingart if you'd like more information.

# Cite the DHLG

Cite the DHLG as:

Weingart, Scott B., Susan Grunewald, Matthew Lincoln et al. (eds.). <i>The Digital Humanities Literacy Guidebook</i>. Carnegie Mellon University, Updated {{ site.time | date: '%B %d, %Y' }}. https://cmu-lib.github.io/dhlg/.
