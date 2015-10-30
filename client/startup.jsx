if(Meteor.isClient) {
  Meteor.startup(function() {
    // Ugly fix for relative paths being truncated by css minifiers
    document.body.style.background = "url('./img/symphony.png')";
    React.render(<App />, document.getElementById('render-target'));
  });
}
