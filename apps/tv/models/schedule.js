// ==========================================================================
// Project:   Tv.Schedule
// Copyright: ©2011 Strobe, Inc.
// ==========================================================================
/*globals Tv */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Tv.Schedule = SC.Record.extend(
/** @scope Tv.Schedule.prototype */ {

    time: SC.Record.attr(String),
    title: SC.Record.attr(String),
    blurb: SC.Record.attr(String),
    url: SC.Record.attr(String)

}) ;
