---
layout: page
title: "Hiring Digital Humanists"
teaser: "Look at all the interviews"
breadcrumb: true
header:
permalink: "hiring/"
---
<div class="row">
	<div class="small-12 columns t30">
		<dl class="accordion" data-accordion>
			{% assign counter = 1 %}
			{% for interview in site.interviews limit:1000 %}
			<dd class="accordion-navigation">
			<a href="#panel{{ counter }}"><span class="iconfont"></span> {% if interview.subheadline %}{{ interview.subheadline }} › {% endif %}<strong>{{ interview.title }}</strong></a>
				<div id="panel{{ counter }}" class="content">
                    <h4><a href="{{ site.url }}{{ site.baseurl }}{{ interview.url }}">{{ interview.title }}</a></h4>
					{% if interview.meta_description %}{{ interview.meta_description | strip_html | escape }}{% elsif interview.teaser %}{{ interview.teaser | strip_html | escape }}{% endif %}
					<a href="{{ site.url }}{{ site.baseurl }}{{ interview.url }}" title="Read {{ interview.title | escape_once }}"><strong>{{ site.data.language.read_more }}</strong></a><br><br>
				</div>
			</dd>
			{% assign counter=counter | plus:1 %}
			{% endfor %}
		</dl>
	</div><!-- /.small-12.columns -->
</div><!-- /.row -->
