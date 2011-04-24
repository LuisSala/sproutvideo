// ==========================================================================
// Project:   Tv
// Copyright: ©2011 Strobe, Inc.
// ==========================================================================
/*globals Tv */

SC.ready(function() {
  Tv.videosController.set('content', Tv.store.find(Tv.VideoRecord));
  Tv.scheduleController.set('content', Tv.store.find(Tv.Schedule));

  Tv.mainPane = SC.MainPane.design({
    childViews: 'videoPage'.w(),

    videoPage: SC.ScrollView.extend({
       layout: {top: 0, bottom: 0, left: 0, right: 0},
       hasHorizontalScroller: NO,
       contentView: Tv.VideoTemplateView
    })
  }); // end Tv.mainPane

  // Append pane to document.
  Tv.mainPane.create().append();
}); // end SC.ready()

Tv.VideoTemplateView = SC.TemplateView.extend({
        layerId: 'tv',
        templateName: 'tv'
});

Tv.VideoListView = SC.TemplateCollectionView.extend({
    contentBinding: 'Tv.videosController'

}); // end Tv.VideoListView

Tv.ScheduleView = SC.TemplateCollectionView.extend({
    contentBinding: 'Tv.scheduleController'

}); // end Tv.VideoListView

// Subclass SC-view and supply render and update method
Tv.VideoPlayer = SC.View.extend({

    uri: null,

    tagName: "a",

    classNames: ["video-player"],

    // This view expects a video URL and preview image URL.
    displayProperties: ["videoUrl", "previewUrl"],

    // Once the view is created, we want to tell FlowPlayer
    // to bind itself to this element/layer.
    didCreateLayer: function(){
        var id = this.get("layerId");

        // Invoke the FlowPlayer function and enable auto-play along with
        // using the HTML5 video tag for non-iOS devices.
        this.invokeLater(function(){
                $f(id, "http://sala.us/flowplayer/flowplayer-3.2.7.swf", {
                    clip:  {
                        autoPlay: true,
                        autoBuffering: true
                    }
                }).ipad({simulateiDevice: false});
            }, 0);
    }, // end didCreateLayer()


    // Flowplayer requires an HTML anchor <a href="..."> tag pointing to a
    // video, styled with the preview image (splash) and overlayed with the
    // "play" button.
    render: function(context) {
		sc_super();

        // Add href attribute.
        context.attr("href", this.get("videoUrl"));

        // Add preview/splash image.
        context.attr("style", "background-image:url("+this.get("previewUrl")+")");

        // Insert <IMG> tag with play button image.
        context.begin("img").attr("src", sc_static("resources/images/play_large")).end();
    }, // end render()

    update: function(context) {
		sc_super();
        this.$().attr("href", this.get("videoUrl"));
    }, // end update()

    captureTouch: function(){
		return YES;
	},

    touchStart: function(evt) {
        return YES;
    },

    // If this player element is touched, then play the corresponding video.
    touchEnd: function(evt) {
        // Tell FlowPlayer to play the video.
        // "layerId" is the ID SproutCore assigned this view/anchor tag.
        $f(this.get("layerId")).play();
        return YES;
    }
}); // end VideoPlayer


