---
layout: page
sidebar: left
title: "Topics"
teaser: "Look at all the scholarly project videos"
breadcrumb: true
header:
permalink: "topics/"
---
<div class="row">
	<div class="large-8 small-12 columns t30">
			{% assign topics = site.topics | sort: 'title' %}
			{% for topic in topics limit:1000 %}
				<div id="topic_{{ topic.identifier }}" class="content">
					<h2>{{ topic.title }}</h2>
					<p>{{ topic.content | markdownify }}</p>
				</div>
			{% endfor %}
	</div><!-- /.small-8 small-offset-2.columns -->
</div><!-- /.row -->
