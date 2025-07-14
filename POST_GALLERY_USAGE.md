# Enhanced Post Gallery Usage Guide

The enhanced post gallery system now supports flexible image sizing, aspect ratios, and automatic image naming conventions.

## Basic Usage

```liquid
{% include post-gallery.html category="workshop" %}
```

## Parameters

### Required Parameters
- `category` (optional): Filter posts by category

### Optional Parameters
- `gallery_item_width`: Width of each gallery item (default: "22%")
- `image_size`: Size class or custom height in pixels
- `aspect_ratio`: Aspect ratio class
- `auto_naming`: Enable automatic image naming (default: false)
- `image_path`: Base path for images when using auto_naming
- `show_caption`: Display captions below images (default: true)

## Image Size Options

### Predefined Sizes
- `small`: max-height: 150px
- `medium`: max-height: 250px  
- `large`: max-height: 350px

### Custom Size
- Any number (e.g., "200" for 200px max-height)

## Aspect Ratio Options

- `square`: 1:1 ratio (default)
- `portrait`: 3:4 ratio
- `landscape`: 4:3 ratio
- `wide`: 16:9 ratio

## Automatic Image Naming

When `auto_naming="true"` is enabled, the system automatically generates image paths based on the post's caption and title.

### Naming Convention
Images should be named using the format: `"caption - title.png"`

### Example
For a post with:
- caption: "Luis Pacheco"
- title: "Luis Pacheco"

The image should be named: `"luis-pacheco - luis-pacheco.png"`

### Usage with Auto Naming
```liquid
{% include post-gallery.html 
   category="workshop" 
   auto_naming="true" 
   image_path="assets/images/organizers/cochairs/" 
   image_size="medium" 
   aspect_ratio="square" %}
```

## Examples

### Large Square Images
```liquid
{% include post-gallery.html 
   category="workshop" 
   gallery_item_width="30%" 
   image_size="large" 
   aspect_ratio="square" %}
```

### Medium Portrait Images
```liquid
{% include post-gallery.html 
   category="workshop" 
   gallery_item_width="25%" 
   image_size="medium" 
   aspect_ratio="portrait" %}
```

### Custom Size with Pixels
```liquid
{% include post-gallery.html 
   category="workshop" 
   gallery_item_width="28%" 
   image_size="200" 
   aspect_ratio="square" %}
```

### Wide Images
```liquid
{% include post-gallery.html 
   category="workshop" 
   gallery_item_width="45%" 
   aspect_ratio="wide" %}
```

### Gallery Without Captions
```liquid
{% include post-gallery.html 
   category="workshop" 
   gallery_item_width="25%" 
   image_size="medium" 
   aspect_ratio="square" 
   show_caption="false" %}
```

## Image Organization

### Recommended Folder Structure
```
assets/images/
├── organizers/
│   ├── chairs/
│   │   ├── luis-pacheco - luis-pacheco.png
│   │   └── shahin-vassigh - shahin-vassigh.png
│   └── cochairs/
│       ├── luis-pacheco - luis-pacheco.png
│       └── shahin-vassigh - shahin-vassigh.png
├── workshops/
│   ├── workshop-1 - digital-fabrication.png
│   └── workshop-2 - robotics.png
└── sponsors/
    ├── gold-sponsor - company-name.png
    └── silver-sponsor - company-name.png
```

### Naming Best Practices
1. Use lowercase letters and hyphens for filenames
2. Keep names descriptive but concise
3. Use consistent naming patterns within categories
4. Include both caption and title in the filename for clarity

## Migration from Old System

### Before (Old System)
```liquid
{% include post-gallery.html category="host" gallery_item_width="44%" %}
```

### After (Enhanced System)
```liquid
{% include post-gallery.html 
   category="host" 
   gallery_item_width="44%" 
   image_size="medium" 
   aspect_ratio="square" %}
```

The enhanced system is backward compatible, so existing usage will continue to work with default settings. 