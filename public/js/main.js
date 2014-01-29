d3.json("ing/12", function (error, response) {
  var app = appStart();

  app.force
    .charge(-500)
    .linkDistance(150)
    .nodes([])
    .links([])
    .on("tick", app.tick)
    .drag().on("dragstart", app.dragstart);
    
  var graph = app.createNodesLinks(response[0].data)
  app.force.nodes(graph.nodes);
  app.force.links(graph.links);

  app.updateNodes("10", app.force);

  $(document).ready(function() {
    app.resize();
  });

  $(window).on("resize", function() {
    app.resize();
  });
});

