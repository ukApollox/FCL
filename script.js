  (function (w, d, s, o, f, js, fjs) {
    w["fsStandingsEmbed"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)),
      (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  })(
    window,
    document,
    "script",
    "mw",
    "https://cdn.footystats.org/embeds/standings.js"
  );
  mw("params", {
    leagueID: 12326,
    showAllTeams: true, 
    showPoints: true, 
  });

  function openLink() {
    window.location.href = "kontakt.html"; 
}