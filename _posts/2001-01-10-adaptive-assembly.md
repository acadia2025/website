---
layout: post
title:  "Adaptive Assembly: AI-Driven Protective Infrastructure from Found and Fabricated Materials"
date:   2014-06-09
caption: Adaptive Assembly Workshop
permalink: /adaptive-assembly
project: true
category: online-workshop
thumbnail: assets/images/workshops/acadia25-workshop_adaptiveassembly.png

---

![{{ page.title }}]({{ page.thumbnail }}){: class="post-thumbnail" }

# Adaptive Assembly: AI-Driven Protective Infrastructure from Found and Fabricated Materials

# [Registration Link](https://www.eventbrite.com/e/acadia-2025-workshops-tickets-1559581613589?aff=oddtdtcreator)

**Workshop Registration opens September 8th, 2025! Click the link above to be notified when registration becomes available.**

### Location : Online

## Workshop Team
---

**Jon Penvose** - OKIE5 (Co-Founder) & University of Pennsylvania, MSD Robotics and Autonomous Systems (MSD-RAS)  
**Qian Gu** - OKIE5 (Co-Founder) Robotics Engineer & University of Pennsylvania, MSD Robotics and Autonomous Systems (MSD-RAS)

## Workshop Description
In response to Miami's escalating vulnerability to climate-induced disasters, this workshop explores how real-time robotic sensing and AI-assisted planning can transform found materials (i.e., rubble, debris, and displaced objects) alongside pre-designed aggregates into protective infrastructure. Using NVIDIA Isaac Sim, participants will simulate the stacking and assembly of these elements into barricades, infill systems, and resilient barriers.

Equipped with computer vision and stereo depth sensing, the robotic system catalogs its surroundings and makes physically informed decisions about placement, fit, and structural stability. By combining site-discovered fragments with purpose-made components that guide assembly and distribute force, the workshop proposes a flexible, deployable strategy for both post-disaster conditions and proactive planning in high-risk areas.

Participants will configure and control a virtual robotic arm fitted with a RealSense stereo depth camera to detect, classify, and simulate the autonomous assembly of materials. By learning to use Isaac Sim's physics engine and sensor emulation, attendees will prototype AI-augmented workflows for adapting to unstructured environments using automation, robotics, and computational design.

## Key Learning Outcomes
- **Gain practical experience using Isaac Sim** to simulate robotic manipulation tasks
- **Understand how to integrate and calibrate depth sensors** in a virtual robotics workflow
- **Simulate grasping and sorting tasks** based on sensor input and rule-based logic
- **Develop foundational skills in robotics for architecture** using digital twins and AI-powered workflows
- **Build a functioning Isaac Sim environment** with a robot arm and object set
- **Configure a simulated RealSense camera** and interpret point cloud or depth-based data

## Workshop Schedule
**Day 1 – Tuesday, Nov. 4 (9:00 am - 5:30 pm)  
Day 2 – Wednesday, Nov. 5 (9:00 am - 5:00 pm)**

### Day 1 – Tuesday, Nov. 4: Simulation Setup & Sensor Integration

#### Session 1: Installation, Navigation, and Scene Fundamentals (9:00 am - 12:30 pm, with break)
- Guided installation and setup of Isaac Sim with overview
- Overview of Isaac Lab & Sim for building scenes and training
- Create and configure a new simulation environment (ground plane, lighting, physics)
- Place and modify basic objects with physics-based properties (collision, mass, friction)
- Use Isaac's asset libraries vs. importing your own .USD/.FBX/.STL scanned assets

**Lunch: 12:30-1:30 pm**

#### Session 2: Sensors and Scene Scanning (1:30 pm - 5:30 pm)
- Introduction to the RealSense stereo depth camera
- Add and calibrate a RealSense sensor in simulation
- Capture and visualize depth data and RGB imagery
- Explore depth maps, segmentation, and point cloud exports
- Begin integrating imported scanned objects (debris, architectural fragments)

### Day 2 – Wednesday, Nov. 5: Robotic Manipulation and Task Logic

#### Session 3: Robot Integration and Training Manipulation Setup (9:00 am - 12:30 pm, with break)
- Import and configure a robot arm in Isaac Sim
- Review kinematics, joints, and gripper setup
- Introduce basic object detection logic using spatial coordinates and bounding volumes
- Plan and simulate grasping of one scanned object using hard-coded rules

**Lunch: 12:30-1:30 pm**

#### Session 4: Classification + Adaptive Assembly Task (1:30 pm - 5:00 pm)
- 5:00 pm: Workshop outcomes presentation
- Use perception data to classify object types or sizes
- Create rule-based logic for part sorting (e.g., place large debris here, small here)
- Simulate adaptive stacking: simple placement strategies that respond to object location or category
- Stacking with the robotic arm (specific type varies depending on the availability of equipment)

## Workshop Format
**Online Workshop** - 2 Days, 6 Hours per Day

## Computer Requirements
- **NVIDIA RTX-30 or 40 Series GPU**
- **32-64 GB RAM**
- Isaac Sim (latest version)
- Visual Studio Code (Python script editing)
- Git & Conda

## Materials Provided
**We Will Provide**:
- Pre-scanned modular object files (.USD or .FBX)
- Robot arm model (from Isaac Sim library)
- Virtual RealSense - Virtual Depth Sensing Camera

## Prerequisites
- Basic understanding of robotics and simulation concepts
- Familiarity with Python programming helpful but not required
- Interest in AI-driven design and robotic assembly
- Computer meeting the hardware requirements

## Workshop Outcomes
Participants will leave the workshop with:
1. Hands-on experience with NVIDIA Isaac Sim for robotic simulation
2. Understanding of depth sensor integration and calibration
3. Practical skills in robotic manipulation and task planning
4. Experience with AI-augmented workflows for unstructured environments
5. Foundation for applying robotics in architectural contexts
6. Working simulation environment with robot arm and sensor setup

## Target Audience
This workshop is ideal for:
- Students and researchers in robotics and architecture
- Practitioners interested in AI-driven design workflows
- Anyone exploring the intersection of automation and built environment
- Participants seeking hands-on experience with advanced simulation tools

## Workshop Gallery

{% include image-gallery.html folder="assets/images/workshops/adaptive-assembly" item_width="30%" show_caption="false" %}
