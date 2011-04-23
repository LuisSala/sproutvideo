// ==========================================================================
// Project:   Tv.VideoRecord
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tv */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Tv.VideoRecord = SC.Record.extend(
/** @scope Tv.VideoRecord.prototype */ {

    title: SC.Record.attr(String),
    uri: SC.Record.attr(String),
    previewUrl: SC.Record.attr(String),
    description: SC.Record.attr(String),
    bookmarked: SC.Record.attr(Boolean)

});
