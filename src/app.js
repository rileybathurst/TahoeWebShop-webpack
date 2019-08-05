// portfolio triptych
if (document.getElementById('first') !=null) {
  var intElemOffsetWidth = document.getElementById('first').offsetWidth; // why isnt this working?

  document.getElementById('snap-scroll-container-coordinates').scrollLeft += intElemOffsetWidth;
  console.log(intElemOffsetWidth);
}

// import _ from 'lodash';

/* IntersectionObserver to rotate the text around the profile image
if ('IntersectionObserver' in window &&
'IntersectionObserverEntry' in window &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  let iopush = document.querySelectorAll('.turn');

  var numSteps = 20.0;

  var pusher; // naming choice is too close to push
  var prevRatio = 0.0;
  var pT = "rotate(-Ratiodeg)";

  // Set things up.

  window.addEventListener("load", function(event) {
  pusher = document.querySelectorAll(".turn");

  createObserver();
  }, false);

  function createObserver() {
  var observer;

  var options = {
  root: null,
  rootMargin: "0px",
  threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);

  pusher.forEach(pushers => {
    observer.observe(pushers);
  });
  }

  function buildThresholdList() {
  var thresholds = [];
  var numSteps = 100;

  for (var i=1.0; i<=numSteps; i++) {
  var ratio = i/numSteps;
  thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
  }

  function handleIntersect(entries, observer) {
  entries.forEach(function(entry) {
    entry.target.style.webkitTransform = pT.replace("Ratio", (entry.intersectionRatio*75));
    prevRatio = entry.intersectionRatio;
  });
  }
}
*/

