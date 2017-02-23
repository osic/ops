---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
banner: yes
epic: True
osrelease: Ocata
estatus:
  - name: "ontarget"
    style: "green"
    label: "On Target"
  - name: "atrisk"
    style: "yellow"
    label: "At Risk"
  - name: "willmiss"
    style: "red"
    label: "Will Miss"
  - name: "blocked"
    style: "grey"
    label: "Blocked"
epics:
  - name: "incsca"
    canonical: "Incremental Scaling"
    description: "Scaling your OpenStack cloud."
    status: "grey"
    link: "https://01.org/jira/browse/OSIC-393"
  - name: "cpavai"
    canonical: "Control Plane Availability"
    description: "When things break, recover quickly."
    status: "grey"
    link: "https://01.org/jira/browse/OSIC-408"
  - name: "novice"
    canonical: "Ease of Deployment"
    description: "Debunking OpenStack is difficult to install."
    status: "green"
    link: "https://01.org/jira/browse/OSIC-409"
  - name: "livemi"
    canonical: "VM Availability"
    description: "Data just as important as control plane."
    status: "green"
    link: "https://01.org/jira/browse/OSIC-402"
  - name: "zerodo"
    canonical: "Zero Downtime Upgrades"
    description: "Upgrading without shutting anything down."
    status: "green"
    link: "https://01.org/jira/browse/OSIC-400"
  - name: "enters"
    canonical: "Enterprise Scale"
    description: "Large scale deployment (1000 nodes)."
    status: "yellow"
    link: "https://01.org/jira/browse/OSIC-409"
deliverable:
  - research
  - workhype
  - workdefi
  - toolhype
  - tooldefi
  - envdefin
  - toolpred
  - envdeplo
  - toolpost
  - baseline
  - basepubr
  - iterateo
  - publishr
---
