function cross() {
  startTraffic();
  chicken.transition().duration(3000).attr('cy', 15);
}
  chicken.on('click', cross);