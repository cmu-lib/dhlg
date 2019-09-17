---
layout: page
title: "Hiring Surveys"
breadcrumb: true
meta_title: "Hiring Surveys"
permalink: "global-resources/getting-hired/hiring-surveys/"
---
The Hiring Surveys, coming soon, are responses to a survey by people who are in positions to hire digital humanists. Each respondent describes a hypothetical ideal candidate for a plausible position at their institution. Use the answers to help set some goals for yourself. Also, see in these answers that while job ads often ask for everything, the person who gets hired rarely checks every box. It’s usually better to spend your time becoming an expert in a few things than trying to stretch yourself across the wide expanse of DH.

<div class="row">
	<div class="small-12 columns t30">
			{% for interview in site.interviews limit:1000 %}
				<div id="hiring_{{ interview.identifier }}" class="content">
                    <h4><a href="{{ interview.url | relative_url }}">{{ interview.title }}</a></h4>
					{% if interview.meta_description %}{{ interview.meta_description | strip_html | escape }}{% elsif interview.teaser %}{{ interview.teaser | strip_html | escape }}{% endif %}
					<a href="{{ interview.url | relative_url }}" title="Read {{ interview.title | escape_once }}"><strong>Read More&nbsp;›</strong></a><br><br>
				</div>
			{% endfor %}
	</div><!-- /.small-8 small-offset-2.columns -->
</div><!-- /.row -->
