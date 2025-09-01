---
layout: post
title:  "Print-Scan-Adapt: Feedback-Driven Bead Geometry Control in Pellet Extrusion"
date:   2014-06-01
caption:  Print-Scan-Adapt Workshop
permalink: /print-scan-adapt
project: true
category: site-workshop
thumbnail: assets/images/workshops/acadia25-workshop_printscanadapt.jpg

---

![{{ page.title }}]({{ page.thumbnail }}){: class="post-thumbnail" }

# Print-Scan-Adapt: Feedback-Driven Bead Geometry Control in Pellet Extrusion

# [Registration Link](https://www.eventbrite.com/e/acadia-2025-workshops-tickets-1559581613589?aff=oddtdtcreator)

**Workshop Registration opens September 9th, 2025! Click the link above to be notified when registration becomes available.**

### Location : FIU

## Workshop Team
---

**Aldo Sollazzo**, LAMÁQUINA  
**Hritik Thumar**, LAMÁQUINA

## Workshop Description
Print–Scan–Adapt is a research-driven workflow developed at LAMÁQUINA that integrates sensing, data analysis, and adaptive control into large-scale 3D printing. Traditional extrusion processes often produce inconsistent results, with bead width and layer accuracy shifting due to speed, acceleration, and material flow. By combining real-time scanning with robotic parameter mapping, this workflow transforms fabrication challenges into data-driven design opportunities.

This workshop brings the research to life in a hands-on format, exploring feedback-driven control in large-scale pellet-based 3D printing. Pellet extrusion offers a sustainable alternative to filament deposition, supporting recycled polymers and industrial-scale output, yet the process is inherently unstable. Participants use a flange-mounted Intel RealSense depth camera to measure bead width during printing, correlating this data with robot speed and extrusion parameters via KUKA&#124;prc. The resulting mapping model predicts and adapts deposition outcomes, allowing participants to actively control material behavior.

Print–Scan–Adapt emphasizes computation as a tool for resilience at the material-process interface, turning unpredictable extrusion into a design opportunity. By deliberately guiding over- and under-extrusion, participants create patterned modules where material variability becomes an intentional aesthetic. The final outcome is a collective prototype — such as a column or arch — assembled from modules whose surface textures directly reflect the process feedback, demonstrating how sensing, computation, and design converge in large-scale additive fabrication.

## Key Learning Outcomes
- **Understand Pellet-Based Additive Manufacturing**: Identify and analyze the challenges of pellet extrusion, including flow instability, bead width variation, and die swell.
- **Integrate Sensing for Real-Time Feedback**: Set up and operate a scan-to-feedback workflow using Intel RealSense and Grasshopper, correlating robotic parameters with measured bead geometry.
- **Develop Predictive Toolpath Models**: Build width-mapping models that translate target bead sizes into adjustable toolpath parameters and control variable deposition as a design element.
- **Fabricate Adaptive, Data-Driven Modules**: Apply image-sampler logic and adaptive control to produce modules demonstrating material responsiveness and surface variation.
- **Collaborate on Collective Assemblies**: Contribute to a final prototype that embodies resilience, material intelligence, and computational design.

## Workshop Schedule

### Day 1 – Calibration & Data Collection
**Time**: 10:00 am – 5:00 pm (w/ 1-hour break)
- Welcome + overview of ACADIA theme & workshop goals
- Introduction to pellet extrusion and feedback workflows
- Printing test coupons: straight lines, arcs, corners at varying speeds
- Scanning workflow: bead width extraction with RealSense
- Building initial speed vs width dataset

**Deliverables**:
- Set of calibration prints
- Logged dataset correlating speed with bead width
- Preliminary visualization of width vs. speed graph

### Day 2 – Mapping & Design Integration
**Time**: 10:00 am – 5:00 pm (w/ 1-hour break)
- Developing a mapping function: target width → robot parameters
- Introducing image-sampler logic in Grasshopper
- Designing variable-width toolpaths based on images/patterns
- Pilot printing of patterned strips with scan validation

**Deliverables**:
- Fitted width-mapping function
- First patterned test strips with visible variation in bead width
- Scan data comparing intended vs. achieved bead geometry

### Day 3 – Prototyping & Assembly
**Time**: 10:00 am – 5:00 pm (w/ 1-hour break)
- Generating toolpaths for final modules (column/arch components)
- Printing with variable-width toolpaths; scanning to validate
- Assembly of modules into collective prototype
- Wrap-up: discussion of resilient workflows, sustainability, and design expression

**Deliverables**:
- Individual modules printed with intentional bead width variation
- Scans validating controlled over-/under-extrusion
- Collective prototype (assembled column/arch)
- Group reflections on outcomes and future applications

**Total Workshop Time**: ~21 hours over 3 days

## Participant Information
- **Audience**: Students, researchers, and professionals in architecture, design, and digital fabrication
- **Skill Level**: Intermediate. Prior knowledge of Rhino/Grasshopper is helpful but not required
- **Group Size**: 15–20 participants

## Workshop Gallery

{% include image-gallery.html folder="assets/images/workshops/print-scan-adapt" item_width="30%" show_caption="false" %}