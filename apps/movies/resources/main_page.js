// ==========================================================================
// Project:   Movies - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Movies */

// This page describes the main user interface for your application.
Movies.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'centerView infoView titlesView'.w(),
    
    centerView: SC.View.design({
        layout: { top:0, bottom: 170, left:0, right:0},
        childViews: "videoContainerView".w(),

        videoContainerView: SC.View.design({
            childViews: 'videoTemplateView'.w(),
            layout: {centerX:0, centerY:0, width:600, height: 381},
              videoTemplateView: SC.TemplateView.extend({
              templateName: 'videoplayer',
              layerId: 'videoplayer'
            }) // end videoTemplateView
        })
    }), // end videoPlayerView

    infoView: SC.View.design({
      layout: { bottom: 180, left:0, right:0, height: 70 },
      classNames: "info-view".w(),
      childViews: "infoTemplateView".w(),
      infoTemplateView: SC.TemplateView.extend({
          templateName: 'infobar',
          layerId: 'infobar',
          contentBinding: 'Movies.selectedTitleController'
        }) // end infoTemplateView
    }), // end infoView

    titlesView: SC.View.design({
      layout: { bottom: 0, left:0, right:0, height: 180 },
      childViews: "titlesScrollView".w(),
      titlesScrollView: SC.ScrollView.design({
          contentView: SC.View.design({
              layout: { width: 5000 },
              childViews:"titlesTemplate".w(),
              titlesTemplate: SC.TemplateView.extend({
                templateName: 'videolist',
                layerId: 'videolist'})
          }),
          canScrollHorizontal: YES,
          hasHorizontalScroller: YES,
          isHorizontalScrollerVisible: YES,
          canScrollVertical: NO,
          hasVerticalScroller: NO,
          isVerticalScrollerVisible: NO,

          alwaysBounceVertical: NO,
          alwaysBounceHorizontal: YES
      }) // end titlesScrollView
    }) // end titlesView
  }) // end mainPane

}); // end Movies.MainPage

Movies.titlesCollectionView = SC.TemplateCollectionView.extend({
    contentBinding: 'Movies.titlesController'
}); // end titlesCollectionView

Movies.previewImageView = SC.View.extend(SC.Gesturable, {

    gestures:[SC.TapGesture],

    uri: null,

    tagName: "img",

    classNames: ["video-preview"],

    // This view expects a video URL and preview image URL.
    displayProperties: ["title"],

    render: function(context) {
		sc_super();
        // Add href attribute.
        context.attr("src", this.getPath("title.previewUrl"));

    }, // end render()

    update: function(context) {
		sc_super();
    }, // end update()


    // If this player element is touched, then play the corresponding video.
    tap: function(evt) {
        // Tell FlowPlayer to play the video.
        // "layerId" is the ID SproutCore assigned this view/anchor tag.
        Movies.selectedTitleController.set("content", this.get("title"));
        SC.Logger.log("Now playing: "+ this.getPath("title.previewUrl"));
        Movies.selectedTitleController.play();
        return YES;
    },

    mouseUp: function(evt){
        return this.tap(evt);
    }


});

Movies.VideoPlayer = SC.View.extend({

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

    touchStart: function(evt) {
        return YES;
    },

    // If this player element is touched, then play the corresponding video.
    touchEnd: function(evt) {
        // Tell FlowPlayer to play the video.
        // "layerId" is the ID SproutCore assigned this view/anchor tag.
        Movies.selectedTitleController(this.get("content"));
        $f(0).play();
        return YES;
    }
}); // end VideoPlayer