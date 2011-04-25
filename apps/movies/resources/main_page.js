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
    childViews: 'videoPlayerView infoView titlesView'.w(),
    
    videoPlayerView: SC.View.design({
        layout: { top:0, bottom: 170, left:0, right:0},
        childViews: "videoTemplateView".w(),

        videoTemplateView: SC.TemplateView.extend({
              templateName: 'videoplayer',
              layerId: 'videoplayer'
            }) // end videoTemplateView
    }), // end videoPlayerView

    infoView: SC.View.design({
      layout: { bottom: 180, left:0, right:0, height: 70 },
      classNames: "info-view".w(),
      childViews: "infoTemplateView".w(),
      infoTemplateView: SC.TemplateView.extend({
          templateName: 'infobar',
          layerId: 'infobar'
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
          isVerticalScrollerVisible: NO
      }) // end titlesScrollView
    }) // end titlesView
  }) // end mainPane

}); // end Movies.MainPage

Movies.titlesCollectionView = SC.TemplateCollectionView.extend({
    contentBinding: 'Movies.titlesController'
}); // end titlesCollectionView

Movies.previewImageView = SC.View.extend({

    uri: null,

    tagName: "img",

    classNames: ["video-preview"],

    // This view expects a video URL and preview image URL.
    displayProperties: ["previewUrl", "videoUrl"],

    render: function(context) {
		sc_super();

        // Add href attribute.
        context.attr("src", this.get("previewUrl"));

    }, // end render()

    update: function(context) {
		sc_super();
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
        //$f(this.get("layerId")).play();
        return YES;
    }
});