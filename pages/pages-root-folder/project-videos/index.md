---
layout: landing
sidebar: left
title: "Project Videos"
breadcrumb: true
meta_title: "Project Videos"
permalink: "project-videos/"
description:
---
The best way understand digital humanities is to dive right in and see what digital humanists are doing. These videos describe the what/why/how/who of a broad swath of DH projects, with the goal of helping you learn what's necessary to undertake similar endeavors.

The videos are inspired by Miriam Posner's How Did They Make That [blog post](https://miriamposner.com/blog/how-did-they-make-that/) and [video](https://archive.org/details/howdidtheymakethat).

We are always accepting new videos, up to 10 minutes in length. Get in touch with [Scott B. Weingart](https://www.library.cmu.edu/about/people/scott-weingart) to contribute.

<div class="row">
	<div class="small-12 columns t30">
		<div class="row" id="listprojects">
			{% assign projects = site.projects | sort: 'title' %}
			{% for project in projects limit:1000 %}
				<div id="project_{{ project.identifier }}" class="large-4 medium-6 columns projectbox">
					<a href="{{ project.url | relative_url }}" title="View {{ project.title | escape_once }}"><img src="https://img.youtube.com/vi/{{ project.youtubeid}}/mqdefault.jpg" class="videothumbnail"></a>
					<a href="{{ project.url | relative_url }}" title="View {{ project.title | escape_once }}"><h4>{{ project.title | truncate: 45 }}</h4></a>
					<p class="strong">{% for author in project.authors %}
						{{ author.name }} {% unless author.affiliation==NULL%}({{ author.affiliation }}){% endunless %}{% if forloop.last %}{% else %}, {% endif %}
						{% endfor %}</p>
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
