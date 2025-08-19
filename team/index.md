---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# <i class="fas fa-users"></i>Team

The MSU Electric Fish Lab values curiosity about the natural world, independent inquiry, critical thinking, science literacy, and accessible, open science, as well as strong prioritization of mentorship at all career levels. Since opening in 2013, we've built a large and productive lab group with many talented students, postdocs, and technicians from around the world, including Canada, Costa Rica, France, England and the US. Many of our students come from diverse economic backgrounds, and groups typically underrepresented in STEM fields. A particular point of pride is our outstanding group of undergraduates, many of whom have gone on to pursue graduate research positions at other institutions.

{% include list.html data="members" component="portrait" filter="role == 'pi'        && group.to_s.empty?" %}
{% include list.html data="members" component="portrait" filter="role == 'technician' && group.to_s.empty?" %}
{% include list.html data="members" component="portrait" filter="role == 'postdoc'    && group.to_s.empty?" %}
{% include list.html data="members" component="portrait" filter="role == 'phd'        && group.to_s.empty?" %}
{% include list.html data="members" component="portrait" filter="role == 'undergrad'  && group.to_s.empty?" %}
{% include list.html data="members" component="portrait" filter="role == 'programmer' && group.to_s.empty?" %}
{:.center}

# <i class="fas fa-users"></i>Alumni

{% include list.html data="members" component="portrait" filter="role == 'pi'        && group == 'alumni'" style="small" %}
{% include list.html data="members" component="portrait" filter="role == 'technician' && group == 'alumni'" style="small" %}
{% include list.html data="members" component="portrait" filter="role == 'postdoc'    && group == 'alumni'" style="small" %}
{% include list.html data="members" component="portrait" filter="role == 'phd'        && group == 'alumni'" style="small" %}
{% include list.html data="members" component="portrait" filter="role == 'undergrad'  && group == 'alumni'" style="small" %}
{% include list.html data="members" component="portrait" filter="role == 'programmer' && group == 'alumni'" style="small" %}
{:.center}
