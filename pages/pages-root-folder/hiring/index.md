---
layout: page
title: "Hiring Digital Humanists"
teaser: "Look at all the interviews"
breadcrumb: true
header:
permalink: "hiring/"
---
<div class="row">
	<div class="small-8 small-offset-2 columns t30">
			{% for interview in site.interviews limit:1000 %}
				<div id="hiring_{{ interview.identifier }}" class="content">
                    <h4><a href="{{ site.url }}{{ site.baseurl }}{{ interview.url }}">{{ interview.title }}</a></h4>
					{% if interview.meta_description %}{{ interview.meta_description | strip_html | escape }}{% elsif interview.teaser %}{{ interview.teaser | strip_html | escape }}{% endif %}
					<a href="{{ site.url }}{{ site.baseurl }}{{ interview.url }}" title="Read {{ interview.title | escape_once }}"><strong>Read More&nbsp;›</strong></a><br><br>
				</div>
			{% endfor %}
	</div><!-- /.small-8 small-offset-2.columns -->
</div><!-- /.row -->
