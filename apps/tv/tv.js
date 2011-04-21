// ==========================================================================
// Project:   Tv
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tv */

//Tv = SC.Application.create();

SC.ready(function() {
  //Tv.videoController.set('content', Tv.store.find(Tv.VideoRecord));

  Tv.mainPane = SC.TemplatePane.append({
    layerId: 'tv',
    templateName: 'tv'
  });
});

Tv.VideoListView = SC.TemplateCollectionView.extend({
    contentBinding: 'Tv.videoController'
}); // end Tv.VideoListView
