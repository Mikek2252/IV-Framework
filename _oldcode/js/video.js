var dnxVideo = (function () {
    "use strict";

    var newOnClick = function(event) {
        var that = event.data.target;

        var option = timeline.getChapter("OptionChapter");
        var lastFloor = option.lastChapter;
        var newFloor = timeline.getChapter(that.chapter);
        var direction;
        $('.jp-hotspots').empty();
        var lastFloorIndex = timeline.getIndex(timeline.getChapter(lastFloor));

        if (lastFloorIndex > timeline.getIndex(newFloor)) {
            direction = "LiftUp";
        } else {
            direction = "LiftDown";
        }
        timeline.getChapter(direction).nextChapter = newFloor.name;

        var pressAnimation = newFloor.name+"Press";
        timeline.getChapter(pressAnimation).nextChapter = (direction);
        option.lastChapter = that.chapter;
        timeline.changeChapter(pressAnimation);
    };

        var decisionOnClick = function (event) {
            var that = event.data.target;
            timeline.changeChapter(that.chapter);
        };


        var defShowAnim = function () {
//            this.element.animate({
//                opacity: 1
//            }, this.animDuration);
        },
        defHideAnim = function () {
//            this.element.animate({
//                opacity: 0
//            }, this.animDuration);
        },
        defOnEnd = function () {

            if (this.nextChapter === null) {
                this.nextChapter === "OptionChapter";
            }
            timeline.changeChapter(this.nextChapter);
        },
        modalOnClick = function () {
            timeline.pause();
            this.parent.hideHotspots();
            this.parent.showAnimation();
        },
        modalCloseClick = function () {
            timeline.play();
            this.parent.hideAnimation();
        },
        customOnEnd = function () {
            var nextChapter = timeline.getChapter(this.nextChapter);
        },
        backToLift = function () {
            timeline.changeChapter("OptionChapter");
        },
            customShow = function () {
                $(".block-system-main-menu.header .menu").css('display','block');
                $(".l-footer-wrapper .l-footer div").css('display','block');
            };



    var videoData = {
        "playerid": "#jquery_jplayer_1",
        "chapters": [
            {
                "name": "OpeningChapter",
                "startTime": 0,
                "duration": 26,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "LiftUp"
                }
            },
            {
                "name": "OptionChapter",
                "startTime": 72,
                "duration": 9,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter",
                    "lastChapter": "CEO"
                },
                "decisions": [
                    {
                        "name": "Test1",
                        "duration": 8,
                        "startTime": 0,
                        "hotspots": [
                            {
                                "element": ".hotspot1",
                                "options": {
                                    "chapter": "CEO",
                                    "onClick": newOnClick
                                }
                            },
                            {
                                "element": ".hotspot2",
                                "options": {
                                    "chapter": "COO",
                                    "onClick": newOnClick
                                }
                            },
                            {
                                "element": ".hotspot3",
                                "options": {
                                    "chapter": "DesignDirector",
                                    "onClick": newOnClick
                                }
                            },
                            {
                                "element": ".hotspot4",
                                "options": {
                                    "chapter": "HeadofProduct",
                                    "onClick": newOnClick
                                }
                            },
                            {
                                "element": ".hotspot5",
                                "options": {
                                    "chapter": "Merchandising",
                                    "onClick": newOnClick
                                }
                            },
                            {
                                "element": ".hotspot6",
                                "options": {
                                    "chapter": "SourcingManager",
                                    "onClick": newOnClick
                                }
                            },
                            {
                                "element": ".hotspot7",
                                "options": {
                                    "chapter": "C.I.O",
                                    "onClick": newOnClick
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "CEOPress",
                "startTime": 347,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            },
            {
                "name": "CEO",
                "startTime": 33,
                "duration": 37,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter"
                },
                "decisions": [
                    {
                        "name": "backToLift",
                        "duration": 36,
                        "startTime": 0,
                        "hotspots": [
                            {
                                "element": ".BackToLift",
                                "options": {
                                    "chapter": "OptionChapter"
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "COOPress",
                "startTime": 82,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            },
            {
                "name": "COO",
                "startTime": 92,
                "duration": 32,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter"
                },
                "decisions": [
                    {
                        "name": "backToLift",
                        "duration": 29,
                        "startTime": 0,
                        "hotspots": [
                            {
                                "element": ".BackToLift",
                                "options": {
                                    "chapter": "OptionChapter"
                                }
                            },
                        ]
                    }
                ]

            },
            {
                "name": "DesignDirectorPress",
                "startTime": 127,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            },
            {
                "name": "DesignDirector",
                "startTime": 131,
                "duration": 37,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter"
                },
                "decisions": [
                    {
                        "name": "backToLift",
                        "duration": 35,
                        "startTime": 0,
                        "hotspots": [
                            {
                                "element": ".BackToLift",
                                "options": {
                                    "chapter": "OptionChapter"
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "HeadofProductPress",
                "startTime": 171,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            },
            {
                "name": "HeadofProduct",
                "startTime": 175,
                "duration": 35,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter"
                },
                "decisions": [
                    {
                        "name": "backToLift",
                        "duration": 34,
                        "startTime": 0,
                        "hotspots": [
                            {
                                "element": ".BackToLift",
                                "options": {
                                    "chapter": "OptionChapter"
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "MerchandisingPress",
                "startTime": 213,
                "duration": 2,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            },
            {
                "name": "Merchandising",
                "startTime": 217,
                "duration": 33,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter"
                },
                "decisions": [
                    {
                        "name": "backToLift",
                        "duration": 32,
                        "startTime": 0,
                        "hotspots": [
                            {
                                "element": ".BackToLift",
                                "options": {
                                    "chapter": "OptionChapter"
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "SourcingManagerPress",
                "startTime": 253,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            },
            {
                "name": "SourcingManager",
                "startTime": 257,
                "duration": 26,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter"
                },
                "decisions": [
                    {
                        "name": "backToLift",
                        "duration": 25,
                        "startTime": 0,
                        "hotspots": [
                            {
                                "element": ".BackToLift",
                                "options": {
                                    "chapter": "OptionChapter"
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "C.I.OPress",
                "startTime": 285,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            },
            {
                "name": "C.I.O",
                "startTime": 289,
                "duration": 50,
                "options": {
                    "onStart": customShow,
                    "onEnd": defOnEnd,
                    "nextChapter": "C.I.OBacktoLift"
                },
                "decisions": [
                    {
                        "name": "backToLift",
                        "duration": 16,
                        "startTime": 35,
                        "hotspots": [
                            {
                                "element": ".hotspot8",
                                "options": {
                                    "chapter": "C.I.OBacktoLift"
                                }
                            },
                        ]
                    }
                ]
            },
            {
                "name": "C.I.OBacktoLift",
                "startTime": 341,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "OptionChapter"
                }
            },
            {
                "name": "LiftUp",
                "startTime": 28,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": "CEO"
                }
            },
            {
                "name": "LiftDown",
                "startTime": 87,
                "duration": 3,
                "options": {
                    "onEnd": defOnEnd,
                    "nextChapter": null
                }
            }
        ],
        "mediaOptions": {
            "title": "Lectra-PLM",
            "m4v": "https://s3.amazonaws.com/dnx-lectra/Video/Lectra+PLM+Interactive+Internal+WIPv7.mp4",
            "mobile": "https://s3.amazonaws.com/dnx-lectra/Video/Lectra+PLM+Interactivev6.3-SD.mp4"
        }
    };



    //Define default functions and animations





    function Timeline(json) {

        this.duration = 0;
        this.chapters = [];
        this.actions = [];
        this.element = $(json.playerid);
        this.lastSecond = 0;

        this.actionIndex = 0;
        //Create Timeline actions from json data.
        //Loop through chapters
        for (var i = 0; i < json.chapters.length; i++) {
            var chapter = json.chapters[i];

            //Check for optionals
            if (typeof chapter.modals === "undefined") {
                chapter.modals = [];
            }
            if (typeof chapter.decisions === "undefined") {
                chapter.decisions = [];
            }
            if (typeof chapter.options === "undefined") {
                chapter.options = {};
            }

            //Create and add chapter
            var options = chapter.options;
            this.addChapter(chapter.startTime, chapter.name, chapter.duration, options);

            //Loop through decisions
            for (var e = 0; e < chapter.decisions.length; e++) {
                //Create and add decisions
                var decision = chapter.decisions[e];
                this.chapters[i].addDecision(decision.options, decision.start, decision.duration);
                //Loop through hotpots
                for (var j = 0; j < decision.hotspots.length; j++) {
                    //Create and add hotspots
                    var hotspot = decision.hotspots[j];
                    //Check if custom animation is defined
                    if (typeof hotspot.animation === "undefined") {
                        hotspot.animation = {};
                    }
                    this.chapters[i].decisions[e].addHotspot(hotspot.element, hotspot.options, hotspot.animation);
                }
            }
            //Loop through modal
            for (var e = 0; e < chapter.modals.length; e++) {
                //Create and add decisions
                var modal = chapter.modals[e];
                this.chapters[i].addModal(modal.element, modal.start, modal.duration, modal.options);
                //Loop through hotpots
                for (var j = 0; j < modal.hotspots.length; j++) {
                    //Create and add hotspots
                    var hotspot = modal.hotspots[j];
                    //Check if custom animation is defined
                    if (typeof hotspot.animation === "undefined") {
                        hotspot.animation = {};
                    }
                    this.chapters[i].modals[e].addHotspot(hotspot.element, hotspot.options, hotspot.animation);
                }
            }
        }
        //Create Player

        var cssSelector = "#" + this.element.parent().parent().attr("id");

        var supplied = "";
        // Check what was supplied and create string
        /** Probably a better way to do this **/
        if (typeof json.mediaOptions.m4v !== "undefined") {
            supplied = 'm4v';
        }
        if (typeof json.mediaOptions.ogg !== "undefined") {
            if (supplied === "") supplied = 'ogg';
            else supplied += ', ogg';
        }
        if (typeof json.mediaOptions.webm !== "undefined") {
            if (supplied === "") supplied = 'webm';
            else supplied += ', webm';
        }

        var that = this; //Change this to that so i can be used in anonymous function
        this.time = 0;
        this.player = this.element.jPlayer({
            ready: function () {
                //Set Media
                that.generateActions();
                that.width = $("#jquery_jplayer_1").width();
                that.ratio = $("#jquery_jplayer_1").height() / that.width;

                var containerWidth =$(".interactiveVideo").width();
                $('#jp_video_0').width(containerWidth);
                $("#jquery_jplayer_1").width(containerWidth);
                fullScreenButton();

                /* YOUTUBE STUFF */
                //Check if hosting type is youtube
                if (typeof json.mediaOptions.youtube === "undefined") {
                    json.mediaOptions.youtube === false;
                }

                if (json.mediaOptions.youtube === true) {
                    $(this).find('video').remove();
                    $(this).append('<div id="ytvideo"></div>');
                    var player;
                    window.onYouTubePlayerAPIReady = function() {
                        player = new YT.Player('ytvideo', {
                            height: '270',
                            width: '480',
                            videoId: json.mediaOptions.ytId,
                            playerVars: {
                                "autoplay": 1,
                                "color": "white",
                                "modestbranding": 1,
                                "rel": 0,
                                "showinfo": 0,
                                "theme": "light",
                                "controls": 0,
                                "disablekb": 0,
                                "playsinline": 1
                            }
                        });
                    }

                    $("html").append("<script src='https://www.youtube.com/player_api' ></script>")
                /* YOUTUBE STUFF */
                } else {
                    var media;
                    if (typeof json.mediaOptions.mobile && isMobile.any()) {
                        $(".jp-full-screen").hide();
                        json.mediaOptions.m4v = json.mediaOptions.mobile;
                    }

                    $(this).jPlayer("setMedia", json.mediaOptions);
                }

                //Make inline video work on iPhone
                $(this).find('video').attr("playsinline", "");
                var video = document.querySelector('video');
//                makeVideoPlayableInline(video);

                //add hotspots to video layer
                var hotspots = $('.jp-hotspots').clone();
                $('.jp-hotspots').remove();
                hotspots.empty();

                $(this).append(hotspots);

                //Add Listener for current time

                $(this).bind($.jPlayer.event.play, function (event) {
                    that.isPlaying = true;
                    that.play();
                    that.time = Math.floor(event.jPlayer.status.currentTime);
                });


                $(this).bind($.jPlayer.event.resize, function (event) {
                    //timeout to ensure that page has fully resized
                    setTimeout(function(){
                        fullScreenButton();
                    }, 100);
                })

                $(this).bind($.jPlayer.event.pause, function (event) {
                    that.element.jPlayer( "pause", Math.floor(that.time) + 1);
                    that.isPlaying = false;
                });

//                Sync actions when time is changed
                $(this).bind($.jPlayer.event.seeked, function (event) {
                    var time = Math.floor(event.jPlayer.status.currentTime);
                    that.time = time;
                    that.syncActions(time);

                    function checkForActions() {
                            if (that.actions[that.actionIndex].time === that.time) {
                                //Do action
                                that.actions[that.actionIndex].target.action = that.actions[that.actionIndex].event;
                                that.actions[that.actionIndex].target.action();
                                //Add to the action index
                                that.actionIndex++;
                                //Check the index isnt too high
                                if (that.actionIndex > that.actions.length - 2) {
                                    that.actionIndex = that.actions.length - 1;
                                }
                                if (that.actions[that.actionIndex].time === that.time) {
                                    checkForActions();
                                } else {
                                    that.syncActions(time);
                                }
                            }
                        }

                });
            },
            cssSelectorAncestor: cssSelector,
            swfPath: "/js",
            supplied: "m4v",
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true,
            size: {
                width: "882px",
                height: "496px"
            }
        });
    }

    Timeline.prototype = {
        constructor: Timeline,
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

        playing: function (time) {

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
    };

    function Interval(that) {
       setTimeout(function () {

           that.actions[that.actionIndex].time === that.time
           checkForActions();

            function checkForActions() {
                if (that.actions[that.actionIndex].time === that.time) {
                    //Do action
                    that.actions[that.actionIndex].target.action = that.actions[that.actionIndex].event;
                    that.actions[that.actionIndex].target.action();
                    //Add to the action index
                    that.actionIndex++;
                    //Check the index isnt too high
                    if (that.actionIndex > that.actions.length - 2) {
                        that.actionIndex = that.actions.length - 1;
                    }
                    if (that.actions[that.actionIndex].time === that.time) {
                        checkForActions();
                    }
                }
            }

            if (that.isPlaying === true) {
                that.time++;
                Interval(that);
            }
        }, 1000);
    }

    //Chapters
    function Chapter(startTime, name, duration, options) {
        this.startTime = startTime;
        this.name = name;
        this.duration = duration;
        this.modals = [];
        this.decisions = [];
        if (typeof options.onStart !== "undefined") {
            this.onStart = options.onStart;
        }
        if (typeof options.onEnd === "undefined") {
            options.onEnd = defOnEnd;
        }
        if (typeof options.nextChapter === "undefined") {
            options.nextChapter === null
        }
        this.onEnd = options.onEnd;
        this.nextChapter = options.nextChapter;
    }

    Chapter.prototype = {
        constructor: Chapter,
        decisions: function (decisions) {
            if (typeof decisions === "undefined") {
                return this.chapters;
            } else {
                this.chapters = decisions;
            }
        },
        addDecision: function (options, start, duration) {
            //Check if optionals are defined
            if (typeof duration === "undefined") {
                duration = 10;
            }
            if (typeof start === "undefined") {
                start = this.duration - duration;
            }
            this.decisions.push(new Decision(options, start, duration));
        },
        modals: function (modal) {
            if (typeof modal === "undefined") {
                return this.modals;
            } else {
                this.modals = modal;
            }
        },
        addModal: function (modalElement, start, duration, options) {
            if (typeof duration === "undefined") {
                duration = 10;
            }
            if (typeof start === "undefined") {
                start = this.duration - duration;
            }
            if (typeof options === "undefined") {
                options = {};
            }
            this.modals.push(new Modal(modalElement, start, duration, options));
        },
    };

    //Decision
    function Decision(options, start, duration) {
        this.options = options;
        this.duration = duration;
        this.start = start;
        this.hotspots = [];
        this.selected = null;
        //OnEnd
    }

    Decision.prototype = {
        constructor: Decision,
        addHotspot: function (element, options, animation) {
            if (typeof options === "undefined") {
                options = {
                    onClick: decisionOnClick
                };
            }
            this.hotspots.push(new Hotspot(element, options, animation, this));
        },
        injectHotspots: function () {
            $('.jp-hotspots').empty();
            for (var i = 0; i < this.hotspots.length; i++) {
                $('.jp-hotspots').append(this.hotspots[i].element);
                this.hotspots[i].addClickEvent();
            }
        },
        showHotspots: function () {
            this.injectHotspots();
            for (var i = 0; i < this.hotspots.length; i++) {
                this.hotspots[i].showAnimation();
            }
        },
        hideHotspots: function () {
            for (var i = 0; i < this.hotspots.length; i++) {
                this.hotspots[i].hideAnimation();
            }
        }
    };

    //Modal

    function Modal(modalElement, start, duration, options) {
        this.element = $(modalElement);
        this.start = start;
        this.duration = duration;
        this.hotspots = [];
        //Check optionals
        if (typeof options.showAnim === "undefined") {
            options.showAnim = defShowAnim;
        }
        if (typeof options.hideAnim === "undefined") {
            options.hideAnim = defHideAnim;
        }
        this.showAnimation = options.showAnim;
        this.hideAnimation = options.hideAnim;
        //All models need a button with .close tag
        this.element.find(".close").on('click', {
            target: this
        }, this.hideAnimation());
    }

    Modal.prototype = {
        constructor: Modal,
        addHotspot: function (element, options) {
            if (typeof options === "undefined") {
                options = {
                    onClick: modalOnClick
                };
            }
            this.hotspots.push(new Hotspot(element, options, this));
        },
        showHotspots: function () {
            for (var i = 0; i < this.hotspots.length; i++) {
                this.hotspots[i].showAnimation();
            }
        },
        hideHotspots: function () {
            for (var i = 0; i < this.hotspots.length; i++) {
                this.hotspots[i].hideAnimation();
            }
        }
    }

    //Hotspot
    //options  Object { showAnim:, hideAnim:, trackingPath:    }
    function Hotspot(element, options, animation,  parent) {
        this.element = $(element);
        this.selected = false;
        this.parent = parent;

        //Check optionals
        if (typeof animation.showAnim === "undefined") {
            animation.showAnim = defShowAnim;
        }
        if (typeof animation.hideAnim === "undefined") {
            animation.hideAnim = defHideAnim;
        }
        if (typeof animation.duration === "undefined") {
            animation.duration = 0;
        }
        if (typeof options.trackingPath === "undefined") {
            options.trackingPath = null;
        }
        if (typeof options.chapter !== "undefined") {
            this.chapter = options.chapter;
        }
        if (typeof options.onClick === "undefined") {
            options.onClick = decisionOnClick;
        }

        this.showAnimation = animation.showAnim;
        this.hideAnimation = animation.hideAnim;
        this.animDuration = animation.duration;
        this.trackingPath = options.trackingPath;
        this.onClick = options.onClick;

        var scale = 1;
        //Save CSS attributes
        this.height = this.element.outerHeight()* scale;
        this.width = this.element.outerWidth() * scale;
        this.x = this.element.css("left").replace('px', '') * scale;
        this.y = this.element.css("top").replace('px', '') * scale;
        this.fontSize = this.element.css("font-size").replace('px', '') * scale;
    }

    Hotspot.prototype = {
        constructor: Hotspot,
        addClickEvent: function () {
            this.element.on('click tap touchstart', {
            target: this
            }, this.onClick);
        }
    }

    function fullScreenButton() {
        var width = timeline.width;
        var ratio = timeline.ratio;

        var newWidth = $("#jp_video_0").width();
        var screenHeight = $("#jp_video_0").outerHeight();
        var videoHeight = newWidth * ratio;
        var marginSize = (screenHeight - videoHeight) /2;

        if (newWidth === 0) {
            newWidth = $("#jp_poster_0").width();
        }

        var scale = newWidth/width;
        $(".jp-hotspots");
        $(".jp-hotspots").height(videoHeight);
        $(".jp-hotspots").width(newWidth);
        $(".jp-hotspots").css("margin-top", marginSize);
        $(".jp-hotspots").css("margin-bottom", marginSize);

        var chapters = timeline.chapters;

        for (var i=0; i< chapters.length; i++) {
            var decisions = chapters[i].decisions;
            for ( var e=0; e< decisions.length; e++ ) {
                var hotspots = decisions[e].hotspots;
                for ( var j=0; j< hotspots.length; j++) {
                    var hotspot = hotspots[j];
                    hotspot.element.width(hotspot.width * scale);
                    hotspot.element.height(hotspot.height * scale);

                    hotspot.element.css("left", hotspot.x * scale+"px");
                    hotspot.element.css("top", hotspot.y * scale+"px");
                    hotspot.element.css("font-size", hotspot.fontSize * scale +"px");
                }
            }
        }
    }


    //Utils -- sorting
    function mergeSort(arr) {
        if (arr.length < 2) return arr;
        var middle = parseInt(arr.length / 2);
        var left = arr.slice(0, middle);
        var right = arr.slice(middle, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        var result = [];
        while (left.length && right.length) {
            if (left[0].time <= right[0].time) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        while (left.length) result.push(left.shift());
        while (right.length) result.push(right.shift());
        return result;
    }

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            window.isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
            return window.isIOS;
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    //Stop Video if tab is changed or Phone is locked
    window.addEventListener('blur', function () {
        if (isMobile.any()) {
            timeline.element.jPlayer( "pause");
        }
    });

    function fixVideoScaling(){
        setTimeout(function(){
            if($("#jp_container_1").hasClass("jp-state-full-screen") === false) {
                var containerWidth =$(".interactiveVideo").width();
                $('#jp_video_0').width(containerWidth);
                $("#jquery_jplayer_1").width(containerWidth);
                $('#jp_video_0').height(containerWidth * timeline.ratio);
                $("#jquery_jplayer_1").height(containerWidth * timeline.ratio);
                $("#jp_container_1").height(containerWidth * timeline.ratio);
                $(".jp-video-play").height(containerWidth * timeline.ratio);
                $(".jp-video-play").css("margin-top", (-containerWidth * timeline.ratio)+"px");
                fullScreenButton();
            }
        }, 100);
    }

    $( window ).resize(function() {
       fixVideoScaling();
    });

    $(".jp-play").on("click touchstart", function() {
        fixVideoScaling();
    });
    $(".jp-video-play-icon").on("click touchstart", function() {
        fixVideoScaling();
    });

    //Convert time to the nearest full second
    function getSecond(time) {
        var roundedTime = Math.round(time);
        var timeDiff = roundedTime - time;
        //Check if it rounded up or down
        if (timeDiff > 0) {
            //If rounded up Reduce by one because second hasn't been completed
            roundedTime--;
        }
        return roundedTime;
    }

    var timeline = new Timeline(videoData);
    return timeline;
}());
