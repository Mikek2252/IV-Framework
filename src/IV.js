(function (window) {
  "use strict";
  
  function IV() {
    this.timeline = new Timeline();
  }
  
  IV.prototype = {
    constructor: IV,
    addChapter: function (name, startTime, duration, options) {
      if (typeof options === "undefined") {
        options = {};
      }
      var chapter = new Chapter(name, startTime, duration, options);
      this.chapters.push(chapter);
    },
    chapters: function (chapters) {
      if (typeof chapters === "undefined") {
        return this.chapters;
      } else {
        this.chapters = chapters;
      }
    },
    getChapter: function (name) {
      for (var i=0; i< this.chapters.length; i++) {
        if (this.chapters[i].name === name) {
          return this.chapters[i];
        }
      }
    },
    getIndex: function (chapter) {
      for (var i=0; i< this.chapters.length; i++) {
        if (this.chapters[i] === chapter) {
          return i;
        }
      }
    },
    generateActions: function () {
    //Get all Chapters and work out all the events, then append it to the actions array.
      for (var i = 0; i < this.chapters.length; i++) {
        var chapter = this.chapters[i];
        var chapterEnd = chapter.startTime + chapter.duration;

        //Decisions
        for (var e = 0; e < chapter.decisions.length; e++) {
          var decision = chapter.decisions[e];
          //Decision start
          var startTime = chapter.startTime + decision.start;
          var endTime = startTime + decision.duration;
          //Push actions
          this.actions.push({
            time: startTime,
            event: decision.showHotspots,
            target: decision
          });
          this.actions.push({
            time: endTime,
            event: decision.hideHotspots,
            target: decision
          });
        }
        //Modals
        for (var j = 0; j < chapter.modals.length; j++) {
          var modal = chapter.modals[j];
          //Modal Hotspot Start and End
          var startTime = this.duration + modal.start;
          var endTime = this.duration + modal.start + modal.duration;
          //Push actions
          this.actions.push({
            time: startTime,
            event: modal.showHotspots,
            target: modal
          });
          this.actions.push({
            time: endTime,
            event: modal.hideHotspots,
            target: modal
          });
        }

        //Chapter Start Function
        if (typeof chapter.onStart !== "undefined") {
          this.actions.push({
            time: chapter.startTime + 35,
            event: chapter.onStart,
            target: chapter
          });
        }

        //Chapter End function
        this.actions.push({
          time: chapterEnd,
          event: chapter.onEnd,
          target: chapter
        });

        //Must be at the end
        this.duration = this.duration + this.chapters[i].duration;
      }
      this.actions = mergeSort(this.actions);
    },
    syncActions: function (time) {
      var lowest = this.actions.length - 1;
      for (var i = this.actions.length - 1; i >= 0; i--) {
        if (time < this.actions[i].time) {
          // if it is iOS reduce index by 1
          lowest = i;
        }
      }
      if (typeof window.isIOS === null ) {
        isMobile.iOS();
      }
        this.actionIndex = lowest;
    },
    //Debuging function
    play: function () {
      var that = this; //Change this to that so it can be used in Timeout
      if (this.isPlaying === true) {
        Interval(that);
      }
    },
    changeChapter: function(chapterName) {
      var chapterStart = 0;
      for (var i=0; i<this.chapters.length; i++) {
        if (this.chapters[i].name === chapterName) {
          chapterStart = this.chapters[i].startTime;
          if (chapterName === "OptionChapter") {
            this.chapters[i].decisions[0].showHotspots();
          }
        }
      }
      this.element.jPlayer( "play", chapterStart);
      this.time = chapterStart;
    }
  }
  
  function Timeline() {
    this.chapters = []; 
    
    this.actionIndex = 0;
  }
  
  if (typeof IV === 'undefined') {
      window.IV = new IV();
  } else {
    console.log("Interactive Video is already defined.");
  }
}(window));