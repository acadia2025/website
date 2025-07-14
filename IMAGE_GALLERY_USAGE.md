# Enhanced Image Gallery Usage Guide

The enhanced `image-gallery.html` system now supports custom sizing, optional captions, and automatic link detection from filenames.

## Basic Usage

```liquid
{% include image-gallery.html folder="/assets/images/sponsors/gold" %}
```

## Parameters

### Required Parameters
- `folder`: Directory path to scan for images

### Optional Parameters
- `item_width`: Width of each gallery item (default: "20%")
- `image_size`: Size class or custom height in pixels
- `show_caption`: Display captions below images (default: true)
- `detect_links`: Check filenames for link patterns (default: false)

## Image Size Options

### Predefined Sizes
- `small`: max-height: 100px
- `medium`: max-height: 150px
- `large`: max-height: 200px
- `xlarge`: max-height: 300px

### Custom Size
- Any number (e.g., "180" for 180px max-height)

## Link Detection

When `detect_links="true"` is enabled, the system automatically extracts links from filenames.

### Naming Convention for Links
Images should be named using the format: `"Company Name - website.com.png"`

### Examples
- `"HKS Line - hksline.com.png"` → Links to https://hksline.com
- `"Alpha Additive - alphaadditive.com.png"` → Links to https://alphaadditive.com
- `"Routledge - routledge.com.png"` → Links to https://routledge.com
- `"Company - https://example.com.png"` → Links to https://example.com (with full URL)

### Automatic URL Handling
- If the link doesn't start with `http://` or `https://`, it automatically adds `https://`
- Links open in a new tab with `target="_blank"` and `rel="noopener"`

## Examples

### Gold Sponsors (Large, No Captions, With Links)
```liquid
{% include image-gallery.html 
   folder="/assets/images/sponsors/gold" 
   item_width="40%" 
   image_size="large" 
   show_caption="false" 
   detect_links="true" %}
```

### Silver Sponsors (Medium, No Captions, With Links)
```liquid
{% include image-gallery.html 
   folder="/assets/images/sponsors/silver" 
   item_width="30%" 
   image_size="medium" 
   show_caption="false" 
   detect_links="true" %}
```

### Conference Sponsors (Small, No Captions, With Links)
```liquid
{% include image-gallery.html 
   folder="/assets/images/sponsors/conference" 
   item_width="25%" 
   image_size="small" 
   show_caption="false" 
   detect_links="true" %}
```

### Gallery with Captions (Default)
```liquid
{% include image-gallery.html 
   folder="/assets/images/general" 
   item_width="20%" 
   image_size="medium" 
   show_caption="true" %}
```

### Custom Size Gallery
```liquid
{% include image-gallery.html 
   folder="/assets/images/custom" 
   item_width="35%" 
   image_size="180" 
   show_caption="false" %}
```

## Image Organization

### Recommended Folder Structure for Sponsors
```
assets/images/sponsors/
├── gold/
│   ├── HKS Line - hksline.com.png
│   └── Another Company - anothercompany.com.png
├── silver/
│   ├── Alpha Additive - alphaadditive.com.png
│   └── Beta Company - betacompany.com.png
└── conference/
    ├── Routledge - routledge.com.png
    └── Publisher - publisher.com.png
```

### Naming Best Practices
1. Use descriptive company names
2. Include the website domain after a dash
3. Use lowercase for domains
4. Keep filenames concise but clear
5. Use consistent naming patterns within categories

## Migration from Old System

### Before (Old System)
```liquid
{% include image-gallery.html folder="/assets/images/sponsors/gold" %}
```

### After (Enhanced System)
```liquid
{% include image-gallery.html 
   folder="/assets/images/sponsors/gold" 
   item_width="40%" 
   image_size="large" 
   show_caption="false" 
   detect_links="true" %}
```

The enhanced system is backward compatible, so existing usage will continue to work with default settings.

## Benefits

1. **Custom Sizing**: Different sponsor tiers can have appropriately sized logos
2. **No Captions**: Clean, professional look for sponsor galleries
3. **Automatic Links**: Clicking sponsor logos takes visitors to their websites
4. **Flexible Layout**: Easy to adjust item widths and sizes
5. **Professional Appearance**: Consistent styling across all sponsor categories 