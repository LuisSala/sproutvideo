// ==========================================================================
// Project:   Movies.Title
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Movies */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Movies.Title = SC.Record.extend(
/** @scope Movies.Title.prototype */ {

    title: SC.Record.attr(String),
    url: SC.Record.attr(String),
    previewUrl: SC.Record.attr(String),
    description: SC.Record.attr(String)

});
