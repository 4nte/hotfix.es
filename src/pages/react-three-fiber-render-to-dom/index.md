---
title: "React-three-fiber: Render to DOM"
date: '2019-02-15'
spoiler: "Portals won't work with multiple Reconcilers, so we hack around it in userland."
---
Reconciliation is a process in which React diffs two trees to determine an optimal set of mutations required to 
update a tree. 

React portals cannot render outside their host Reconciler.