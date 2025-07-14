---
title: Sponsor Test
layout: page
permalink: /sponsor-test
---

# Sponsor Gallery Test

## Test with Captions (Shows only company name)
{% include image-gallery.html 
   folder="/assets/images/sponsors/gold" 
   item_width="40%" 
   image_size="large" 
   show_caption="true" 
   detect_links="true" %}

## Test without Captions (Clean look)
{% include image-gallery.html 
   folder="/assets/images/sponsors/gold" 
   item_width="40%" 
   image_size="large" 
   show_caption="false" 
   detect_links="true" %}

## Test with Different Sizes
{% include image-gallery.html 
   folder="/assets/images/sponsors/gold" 
   item_width="30%" 
   image_size="medium" 
   show_caption="false" 
   detect_links="true" %} 