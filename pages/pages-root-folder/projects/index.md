---
layout: page
title: "Projects"
teaser: "Look at all the scholarly project videos"
breadcrumb: true
header:
permalink: "projects/"
---
<div class="row">
	<div class="small-12 columns t30">
		<dl class="accordion" data-accordion>
			{% assign counter = 1 %}
			{% for project in site.projects limit:1000 %}
			<dd class="accordion-navigation">
			<a href="#panel{{ counter }}"><span class="iconfont"></span> {% if project.subheadline %}{{ project.subheadline }} › {% endif %}<strong>{{ project.title }}</strong></a>
				<div id="panel{{ counter }}" class="content">
                    <h4><a href="{{ site.url }}{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></h4>
					{% if project.meta_description %}{{ project.meta_description | strip_html | escape }}{% elsif project.teaser %}{{ project.teaser | strip_html | escape }}{% endif %}
					<a href="{{ site.url }}{{ site.baseurl }}{{ project.url }}" title="Read {{ project.title | escape_once }}"><strong>{{ site.data.language.read_more }}</strong></a><br><br>
				</div>
			</dd>
			{% assign counter=counter | plus:1 %}
			{% endfor %}
		</dl>
	</div><!-- /.small-12.columns -->
</div><!-- /.row -->
