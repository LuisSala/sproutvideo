// ==========================================================================
// Project:   Tv
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tv */

//Tv = SC.Application.create();

SC.ready(function() {
  Tv.videoController.set('content', Tv.store.find(Tv.VideoRecord));

  Tv.mainPane = SC.TemplatePane.append({
    layerId: 'tv',
    templateName: 'tv'
  });



});

Tv.VideoListView = SC.TemplateCollectionView.extend({
    contentBinding: 'Tv.videoController'
}); // end Tv.VideoListView

Handlebars.registerHelper('video', function(id, uri) {
  id = Handlebars.Utils.escapeExpression(id);
  uri  = Handlebars.Utils.escapeExpression(uri);

  var result = '<a href="' + uri + '" id="video-' + id + ' class="video-player"></a>';

  var video = '<script>$f("video-'+ id + '", "http://sala.us/flowplayer/flowplayer-3.2.7.swf").ipad();</script>';

  return new Handlebars.SafeString(result);
});


// Subclass SC-view and supply render and update method
Tv.VideoPlayer = SC.View.extend({

    uri: null,

    tagName: "a",

    classNames: ["video-player"],

    displayProperties: ["uri"],

    didCreateLayer: function(){
        var id = this.get("layerId");
        SC.Logger.log("appendToDocument id="+id);

        // Invoke the FlowPlayer function after the elements have been rendered.
        this.invokeLater(function(){
                $f(id, "http://sala.us/flowplayer/flowplayer-3.2.7.swf", {
                    clip:  {
                        autoPlay: false,
                        autoBuffering: true
                    }
                }).ipad();
            }, 0);
    }, // end didCreateLayer()

    render: function(context) {
		sc_super();
        context.attr("href", this.get("uri"));
    }, // end render()

    update: function(context) {
		sc_super();
        this.$().attr("href", this.get("uri"));
    } // end update()



});