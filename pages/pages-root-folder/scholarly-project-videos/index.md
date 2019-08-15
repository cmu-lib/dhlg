---
layout: landing
sidebar: left
title: "Scholarly Video Projects"
breadcrumb: true
meta_title: "Scholarly Video Projects"
permalink: "scholarly-project-videos/"
description: 
---
<div class="row">
	<div class="small-12 columns t30">
		<div class="row" id="listprojects">
			{% for project in site.projects limit:1000 %}
				<div id="project_{{ project.identifier }}" class="medium-4 columns projectbox">
					<img src="https://img.youtube.com/vi/{{ project.youtubeid}}/mqdefault.jpg">
					<h4>{{ project.title }}</h4>
					{% if project.teaser %}<p>{{ project.teaser }}</p>{% endif %}
					<p class="source_disciplines">{% if project.source == 'contribution' %}<img src="/assets/img/circle-cobalt.svg">{% else %}<img src="/assets/img/circle-brilliant-amber.svg">{% endif %}
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
					<p><a href="{{ site.url }}{{ site.baseurl }}{{ project.url }}" class="button radius" title="Play {{ project.title | escape_once }}">Play Video&nbsp;›</a></p>
				</div>
			{% endfor %}
		</div>
	</div><!-- /.small-8 small-offset-2.columns -->
</div><!-- /.row -->
