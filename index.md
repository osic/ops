---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
estatus:
  - name: "ontarget"
    style: "success"
    label: "On Target"
  - name: "atrisk"
    style: "warning"
    label: "At Risk"
  - name: "willmiss"
    style: "danger"
    label: "Will Miss"
  - name: "blocked"
    style: "muted"
    label: "Blocked"
epics:
  - name: "incsca"
    canonical: "Incremental Scaling"
    description: "Scaling your OpenStack cloud."
    status: "success"
  - name: "cpavai"
    canonical: "Control Plane Availability"
    description: "When things break, recover quickly."
    status: "muted"
  - name: "novice"
    canonical: "Ease of Deployment"
    description: "Debunking OpenStack is difficult to install."
    status: "success"
  - name: "livemi"
    canonical: "VM Availability"
    description: "Data just as important as control plane."
    status: "danger"
  - name: "rollin"
    canonical: "Rolling Upgrades"
    description: "Upgrading without shutting it all down."
    status: "warning"
  - name: "zerodo"
    canonical: "Zero Downtime Upgrades"
    description: "Upgrading without shutting anything down."
    status: "warning"
---

# Ocata Documentation
___

<ul>
  <li><a href="https://goo.gl/51e29g">Deployment Architecture</a></li>
  <li><a href="https://goo.gl/Cx6LtF">Workload Definition</a></li>
  <li><a href="https://goo.gl/erWDBb">High Availability of Services</a></li>
  <li><a href="https://goo.gl/n8r0A4">Ease of Use: Novice Install</a></li>
</ul>


# Ocata Epic Status
___
<div class="col-sm-12">
  {% for status in page.estatus %}
    <span class="fa-stack fa-1x" style="float-left">
      <i class="fa fa-circle fa-stack-2x text-{{ status.style }}"></i>
      <i class="fa fa-cog fa-stack-1x fa-spin fa-inverse"></i>
    </span>
    <span>{{ status.label }}</span>
  {% endfor %}
</div>

<br />

<div class="col-md-12">
{% for epic in page.epics %}
<div class="col-md-6">
    <div class="panel panel-default text-center">
        <div class="panel-heading">
            <span class="fa-stack fa-5x">
                  <i class="fa fa-circle fa-stack-2x text-{{ epic.status }}"></i>
                  <i class="fa fa-cog fa-stack-1x {% unless epic.status == 'muted' %} fa-spin {% endunless %} fa-inverse"></i>
            </span>
        </div>
        <div class="panel-body">
            <h4 id="epic-{{ epic.name }}">{{ epic.canonical }}<a class="anchorjs-link" href="#"></a></h4>
            <p>{{ epic.description }}</p>
            <a href="https://01.org/jira/secure/RapidBoard.jspa?rapidView=36&projectKey=OSIC" class="btn btn-primary">Learn More</a>
        </div>
    </div>
</div>
{% endfor %}
</div>

# Pike Planning
___

<ul>
  <li><a href="https://goo.gl/J3cOCg">DevOps Pike Recommendations</a></li>
</ul>


<!-- <table id="sampletable" class="datatable">
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
         <th>Type</th>
         <th>Default Value</th>
      </tr>
   </thead>
   <tbody>
    {% for row in (1..50) %}
      <tr>
         <td>Parameter {% if row < 10 %}0{% endif %}{{ row }}</td>
         <td>Row {{ row }} description
         </td>
         <td>Sample type</td>
         <td>Sample default value</td>
      </tr>
    {% endfor %}
   </tbody>
</table> -->
