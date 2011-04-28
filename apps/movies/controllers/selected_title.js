// ==========================================================================
// Project:   Movies.selectedTitleController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Movies */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Movies.selectedTitleController = SC.ObjectController.create(
/** @scope Movies.selectedTitleController.prototype */ {

  // TODO: Add your own code here.
  play: function() {
     $f(0).play(this.get("content.videoUrl"));
      return YES;
  }
}) ;
