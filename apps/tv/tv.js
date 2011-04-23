// ==========================================================================
// Project:   Tv
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tv */

SC.ready(function() {
  Tv.videosController.set('content', Tv.store.find(Tv.VideoRecord));

  Tv.mainPane = SC.MainPane.design({
    childViews: 'videoPage'.w(),
    defaultResponder: 'Tv.START',

    videoPage: SC.ScrollView.design({
       layout: {top: 0, bottom: 0, left: 0, right: 0},
       hasHorizontalScroller: NO,
       contentView: 'Tv.VideoTemplate'
    })
  }); // end Tv.mainPane
}); // end SC.ready()
Tv.VideoListView = SC.TemplateCollectionView.extend({
    contentBinding: 'Tv.videosController'

}); // end Tv.VideoListView


// Subclass SC-view and supply render and update method
Tv.VideoPlayer = SC.View.extend({

    uri: null,

    tagName: "a",

    classNames: ["video-player"],

    displayProperties: ["uri", "splash"],

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
                }).ipad({simulateiDevice: true});
            }, 0);
    }, // end didCreateLayer()

    render: function(context) {
		sc_super();
        context.attr("href", this.get("uri"));
        context.begin("img").attr("src", this.get("splash")).end();
    }, // end render()

    update: function(context) {
		sc_super();
        this.$().attr("href", this.get("uri"));
    } // end update()
}); // end VideoPlayer

Tv.VideoTemplate = SC.TemplatePane.append({
        layerId: 'tv',
        templateName: 'tv'
});
