---
layout: page
title: "Topics"
teaser: "Look at all the scholarly project videos"
breadcrumb: true
header:
permalink: "topics/"
---
<div class="row">
	<div class="small-12 columns t30">
			{% assign counter = 1 %}
			{% assign topics = site.topics | sort: 'title' %}
			{% for topic in topics limit:1000 %}
			<h3>{{ topic.title }}</h3>
			<a href="#panel{{ counter }}"><span class="iconfont"></span> {% if topic.subheadline %}{{ topic.subheadline }} › {% endif %}<strong>{{ post.title }}</strong></a>
				<div id="panel{{ counter }}" class="content">
					<p>{{ topic.content | markdownify }}</p>
				</div>
			{% assign counter=counter | plus:1 %}
			{% endfor %}
	</div><!-- /.small-12.columns -->
</div><!-- /.row -->
