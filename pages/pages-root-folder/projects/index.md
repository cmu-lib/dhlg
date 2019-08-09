---
layout: landing
sidebar: left
title: "Projects"
teaser: "Look at all the scholarly project videos"
breadcrumb: true
header:
permalink: "projects/"
---
<div class="row">
	<div class="small-12 columns t30">
		<div class="row" id="listprojects">
			{% for project in site.projects limit:1000 %}
				<div id="project_{{ project.identifier }}" class="small-4 columns projectbox">
					<img src="http://img.youtube.com/vi/{{ project.youtubeid}}/0.jpg">
                    <h4><a href="{{ site.url }}{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></h4>
					{% if project.teaser %}<p>{{ project.teaser }}</p>{% endif %}
					<p><a href="{{ site.url }}{{ site.baseurl }}{{ project.url }}" class="button radius" title="Play {{ project.title | escape_once }}">Play Video&nbsp;›</a></p>
				</div>
			{% endfor %}
		</div>
	</div><!-- /.small-8 small-offset-2.columns -->
</div><!-- /.row -->
