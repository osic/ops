---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

# Ocata Documentation
___

<ul class="topnav" id="myTopnav">
  <li><a href="https://goo.gl/51e29g">Deployment Architecture</a></li>
  <li><a href="https://goo.gl/Cx6LtF">Workload Definition</a></li>
  <li><a href="https://goo.gl/erWDBb">High Availability of Services</a></li>
  <li><a href="https://goo.gl/n8r0A4">Ease of Use: Novice Install</a></li>
</ul>


# Current Status
___
_Clicking Learn More button navigates to Jira_  

{% for i in (1..3) %}
<div class="col-md-4 col-sm-6">
    <div class="panel panel-default text-center">
        <div class="panel-heading">
            <span class="fa-stack fa-5x">
                  <i class="fa fa-circle fa-stack-2x
                  {% if i == 2 %} {% assign status = "willmiss" %} text-danger
                  {% elsif i == 1 %} {% assign status = "ontarget" %} text-success
                  {% else %} {% assign status = "blocked" %} text-muted {% endif %}"></i>
                  <i class="fa fa-cog fa-stack-1x
                  {% case status %}
                    {% when 'blocked' %}

                    {% else %}
                      fa-spin
                  {% endcase %} fa-inverse"></i>
            </span>
        </div>
        <div class="panel-body">
            <h4 id="epic-{{ i }}">Epic {{ i }}<a class="anchorjs-link " href="#"></a></h4>
            {% case status %}
              {% when 'ontarget' %}
                <p>Epic is considered ontarget with green status and running gear.</p>
              {% when 'willmiss' %}
                <p>Epic is considered willmiss; red status and running gear - work being done.</p>
              {% when 'blocked' %}
                <p>Epic is considered blocked with grey status and stopped gear.</p>
            {% endcase %}
            <a href="https://01.org/jira/secure/RapidBoard.jspa?rapidView=36&projectKey=OSIC" class="btn btn-primary">Learn More</a>
        </div>
    </div>
</div>
{% endfor %}

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
