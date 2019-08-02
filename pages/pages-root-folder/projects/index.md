---
layout: page
title: "Projects"
teaser: "Look at all the scholarly project videos"
breadcrumb: true
header:
permalink: "projects/"
---
<div class="row">
	<div class="small-8 small-offset-2 columns t30">
			{% for project in site.projects limit:1000 %}
				<div id="project_{{ project.identifier }}" class="content">
                    <h4><a href="{{ site.url }}{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></h4>
					{% if project.meta_description %}{{ project.meta_description | strip_html | escape }}{% elsif project.teaser %}{{ project.teaser | strip_html | escape }}{% endif %}
					<a href="{{ site.url }}{{ site.baseurl }}{{ project.url }}" title="Read {{ project.title | escape_once }}"><strong>Read More&nbsp;›</strong></a><br><br>
				</div>
			{% endfor %}
	</div><!-- /.small-8 small-offset-2.columns -->
</div><!-- /.row -->
