---
layout: landing
sidebar: left
title: "Project Videos"
breadcrumb: true
meta_title: "Project Videos"
permalink: "project-videos/"
description:
---
<div class="row">
	<div class="small-12 columns t30">
		<div class="row" id="listprojects">
			{% assign projects = site.projects | sort: 'title' %}
			{% for project in projects limit:1000 %}
				<div id="project_{{ project.identifier }}" class="large-4 medium-6 columns projectbox">
					<a href="{{ project.url | relative_url }}" title="View {{ project.title | escape_once }}"><img src="https://img.youtube.com/vi/{{ project.youtubeid}}/mqdefault.jpg" class="videothumbnail'"></a>
					<h4><a href="{{ project.url | relative_url }}" title="View {{ project.title | escape_once }}">{{ project.title | truncate: 45 }}</a></h4>
					{% if project.teaser %}<p>{{ project.teaser | truncate: 80 }}</p>{% endif %}
					<p class="source_disciplines">{% if project.source == 'community' %}<img src="{{ 'assets/img/circle-cobalt.svg' | relative_url }}">{% else %}<img src="{{ 'assets/img/circle-brilliant-amber.svg' | relative_url }}">{% endif %}
					{% assign matcheddisciplines = site.emptyArray %}
					{% unless project.disciplines == empty%}
						{% for discipline in project.disciplines %}
							{% for controldiscipline in site.data.disciplines %}
								{% if controldiscipline.identifier == discipline %}
									{% assign matcheddisciplines = matcheddisciplines | push: controldiscipline.name %}
								{% endif %}
							{% endfor %}
						{% endfor %}
					{% endunless %}
					{% for discipline in matcheddisciplines %}
					<span>{{discipline}}</span>{% if forloop.last %}{% else %}, {% endif %}
					{% endfor %}</p>
				</div>
			{% endfor %}
		</div>
	</div><!-- /.small-8 small-offset-2.columns -->
</div><!-- /.row -->
