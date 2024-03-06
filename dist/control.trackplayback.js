!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e(require("leaflet"));
  else if ("function" == typeof define && define.amd) define(["leaflet"], e);
  else {
    var i = "object" == typeof exports ? e(require("leaflet")) : e(t.L);
    for (var n in i) ("object" == typeof exports ? exports : t)[n] = i[n];
  }
})(window, function (t) {
  return (function (t) {
    var e = {};
    function i(n) {
      if (e[n]) return e[n].exports;
      var a = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var a in t)
            i.d(
              n,
              a,
              function (e) {
                return t[e];
              }.bind(null, a)
            );
        return n;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 2))
    );
  })([
    function (e, i) {
      e.exports = t;
    },
    ,
    function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i(0),
        a = i.n(n);
      const o = a.a.Control.extend({
        options: {
          position: "topright",
          showOptions: !0,
          showInfo: !0,
          showSlider: !0,
          autoPlay: !1,
        },
        initialize: function (t, e) {
          a.a.Control.prototype.initialize.call(this, e),
            (this.trackPlayBack = t),
            this.trackPlayBack.on("tick", this._tickCallback, this);
        },
        onAdd: function (t) {
          return this._initContainer(), this._container;
        },
        onRemove: function (t) {
          this.trackPlayBack.dispose(),
            this.trackPlayBack.off("tick", this._tickCallback, this);
        },
        getTimeStrFromUnix: function (t, e = "s") {
          t = parseInt(1e3 * t);
          let i,
            n = new Date(t),
            a = n.getFullYear(),
            o =
              n.getMonth() + 1 < 10
                ? "0" + (n.getMonth() + 1)
                : n.getMonth() + 1,
            r = n.getDate() < 10 ? "0" + n.getDate() : n.getDate(),
            s = n.getHours() < 10 ? "0" + n.getHours() : n.getHours(),
            c = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes(),
            l = n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds();
          return (i =
            "d" === e
              ? a + "-" + o + "-" + r
              : "h" === e
              ? a + "-" + o + "-" + r + " " + s
              : "m" === e
              ? a + "-" + o + "-" + r + " " + s + ":" + c
              : a + "-" + o + "-" + r + " " + s + ":" + c + ":" + l);
        },
        _initContainer: function () {
          return (
            (this._container = a.a.DomUtil.create(
              "div",
              "leaflet-control-playback"
            )),
            a.a.DomEvent.disableClickPropagation(this._container),
            (this._optionsContainer = this._createContainer(
              "optionsContainer",
              this._container
            )),
            (this._buttonContainer = this._createContainer(
              "buttonContainer",
              this._container
            )),
            (this._infoContainer = this._createContainer(
              "infoContainer",
              this._container
            )),
            (this._sliderContainer = this._createContainer(
              "sliderContainer",
              this._container
            )),
            (this._pointCbx = this._createCheckbox(
              "Track Point",
              "show-trackpoint",
              this._optionsContainer,
              this._showTrackPoint
            )),
            (this._lineCbx = this._createCheckbox(
              "Track Line",
              "show-trackLine",
              this._optionsContainer,
              this._showTrackLine
            )),
            (this._playBtn = this._createButton(
              "play",
              "btn-stop",
              this._buttonContainer,
              this._play
            )),
            (this._restartBtn = this._createButton(
              "replay",
              "btn-restart",
              this._buttonContainer,
              this._restart
            )),
            (this._slowSpeedBtn = this._createButton(
              "slow",
              "btn-slow",
              this._buttonContainer,
              this._slow
            )),
            (this._quickSpeedBtn = this._createButton(
              "quick",
              "btn-quick",
              this._buttonContainer,
              this._quick
            )),
            (this._closeBtn = this._createButton(
              "close",
              "btn-close",
              this._buttonContainer,
              this._close
            )),
            (this._infoStartTime = this._createInfo(
              "Start Time ",
              this.getTimeStrFromUnix(this.trackPlayBack.getStartTime()),
              "info-start-time",
              this._infoContainer
            )),
            (this._infoEndTime = this._createInfo(
              "End Time ",
              this.getTimeStrFromUnix(this.trackPlayBack.getEndTime()),
              "info-end-time",
              this._infoContainer
            )),
            (this._infoCurTime = this._createInfo(
              "Current Time ",
              this.getTimeStrFromUnix(this.trackPlayBack.getCurTime()),
              "info-cur-time",
              this._infoContainer
            )),
            (this._infoSpeedRatio = this._createInfo(
              "Speed ",
              `X${this.trackPlayBack.getSpeed()}`,
              "info-speed-ratio",
              this._infoContainer
            )),
            (this._slider = this._createSlider(
              "time-slider",
              this._sliderContainer,
              this._scrollchange
            )),
            this._container
          );
        },
        _createContainer: function (t, e) {
          return a.a.DomUtil.create("div", t, e);
        },
        _createCheckbox: function (t, e, i, n) {
          let o = a.a.DomUtil.create("div", e + " trackplayback-checkbox", i),
            r = a.a.DomUtil.create("input", "trackplayback-input", o),
            s = `trackplayback-input-${a.a.Util.stamp(r)}`;
          r.setAttribute("type", "checkbox"), r.setAttribute("id", s);
          let c = a.a.DomUtil.create("label", "trackplayback-label", o);
          return (
            c.setAttribute("for", s),
            (c.innerHTML = t),
            a.a.DomEvent.on(r, "change", n, this),
            o
          );
        },
        _createButton: function (t, e, i, n) {
          let o = a.a.DomUtil.create("a", e, i);
          return (
            (o.href = "#"),
            (o.title = t),
            o.setAttribute("role", "button"),
            o.setAttribute("aria-label", t),
            a.a.DomEvent.disableClickPropagation(o),
            a.a.DomEvent.on(o, "click", n, this),
            o
          );
        },
        _createInfo: function (t, e, i, n) {
          let o = a.a.DomUtil.create("div", "info-container", n);
          a.a.DomUtil.create("span", "info-title", o).innerHTML = t;
          a.a.DomUtil.create("span", "info-space", o).innerHTML = ":";
          let r = a.a.DomUtil.create("span", i, o);
          return (r.innerHTML = e), r;
        },
        _createSlider: function (t, e, i) {
          let n = a.a.DomUtil.create("input", t, e);
          return (
            n.setAttribute("type", "range"),
            n.setAttribute("min", this.trackPlayBack.getStartTime()),
            n.setAttribute("max", this.trackPlayBack.getEndTime()),
            n.setAttribute("value", this.trackPlayBack.getCurTime()),
            a.a.DomEvent.on(
              n,
              "click mousedown dbclick",
              a.a.DomEvent.stopPropagation
            )
              .on(n, "click", a.a.DomEvent.preventDefault)
              .on(n, "change", i, this)
              .on(n, "mousemove", i, this),
            n
          );
        },
        _showTrackPoint(t) {
          t.target.checked
            ? this.trackPlayBack.showTrackPoint()
            : this.trackPlayBack.hideTrackPoint();
        },
        _showTrackLine(t) {
          t.target.checked
            ? this.trackPlayBack.showTrackLine()
            : this.trackPlayBack.hideTrackLine();
        },
        _play: function () {
          a.a.DomUtil.hasClass(this._playBtn, "btn-stop")
            ? (a.a.DomUtil.removeClass(this._playBtn, "btn-stop"),
              a.a.DomUtil.addClass(this._playBtn, "btn-start"),
              this._playBtn.setAttribute("title", "stop"),
              this.trackPlayBack.start())
            : (a.a.DomUtil.removeClass(this._playBtn, "btn-start"),
              a.a.DomUtil.addClass(this._playBtn, "btn-stop"),
              this._playBtn.setAttribute("title", "play"),
              this.trackPlayBack.stop());
        },
        _restart: function () {
          a.a.DomUtil.removeClass(this._playBtn, "btn-stop"),
            a.a.DomUtil.addClass(this._playBtn, "btn-start"),
            this._playBtn.setAttribute("title", "stop"),
            this.trackPlayBack.rePlaying();
        },
        _slow: function () {
          this.trackPlayBack.slowSpeed();
          let t = this.trackPlayBack.getSpeed();
          this._infoSpeedRatio.innerHTML = `X${t}`;
        },
        _quick: function () {
          this.trackPlayBack.quickSpeed();
          let t = this.trackPlayBack.getSpeed();
          this._infoSpeedRatio.innerHTML = `X${t}`;
        },
        _close: function () {
          return (
            a.a.DomUtil.remove(this._container),
            this.trackPlayBack.stop(),
            this.onRemove && this.onRemove(this._map),
            this
          );
        },
        _scrollchange: function (t) {
          let e = Number(t.target.value);
          this.trackPlayBack.setCursor(e);
        },
        _tickCallback: function (t) {
          let e = this.getTimeStrFromUnix(t.time);
          (this._infoCurTime.innerHTML = e),
            (this._slider.value = t.time),
            t.time >= this.trackPlayBack.getEndTime() &&
              (a.a.DomUtil.removeClass(this._playBtn, "btn-start"),
              a.a.DomUtil.addClass(this._playBtn, "btn-stop"),
              this._playBtn.setAttribute("title", "play"),
              this.trackPlayBack.stop());
        },
      });
      (a.a.TrackPlayBackControl = o),
        (a.a.trackplaybackcontrol = function (t, e) {
          return new o(t, e);
        });
    },
  ]);
});
//# sourceMappingURL=control.trackplayback.js.map
