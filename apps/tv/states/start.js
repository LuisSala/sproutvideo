// ==========================================================================
// Project:   Tv.START
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tv */

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
Tv.START = SC.Responder.create(
/** @scope Tv.START.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    // Called when this state becomes first responder
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  someAction: function() {
    
  }
  
}) ;
