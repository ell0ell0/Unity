---
layout: default
title: Welcome!
description: Unity guide version1
keywords: github pages, Jekyll, foundation 5
---

{% include off_canvas_nav_intro.html %}
{% include off_canvas_nav.html %}

<div id="content">
	<header id="hero">
		<div class="type_wrapper">
			<div class="logo_wrapper">
				<img src="img/logo/is_logo_on_color_large.png" alt="InsightSquared logo">
			</div>
			<hr>
			<h1 id="hero_headline">UNITY</h1> 
			<hr>
			<h1 class="display">Design Guide</h1>
		</div>
	</header>

	{% include side_nav.html %}
	<div id="brand">

		{% include name.html %}

		{% include logo.html %} 

		{% include color.html %} 

		{% include typography.html %} 

		{% include icons.html %} 

	</div>
 
	<div id="ui">
		{% include buttons.html %}

		{% include inputs.html %} 
	</div>
</div>

{% include off_canvas_nav_end.html %}