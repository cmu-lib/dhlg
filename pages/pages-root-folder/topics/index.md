---
layout: default
title: "Topics"
teaser: "Look at all the scholarly project videos"
breadcrumb: true
header:
permalink: "topics/"
---
<div class="row">
	<div class="small-12 columns t30">
			{% assign topics = site.topics | sort: 'title' %}
			{% for topic in topics limit:1000 %}
				<div id="topic_{{ topic.identifier }}" class="content">
					<h2>{{ topic.title | markdownify }}</h2>
					<p>{{ topic.content | markdownify }}</p>
				</div>
			{% endfor %}
	</div><!-- /.small-12.columns -->
</div><!-- /.row -->
