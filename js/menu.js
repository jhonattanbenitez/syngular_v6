parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    i0CD: [
      function (require, module, exports) {
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function n(e, n, o) {
          return n && t(e.prototype, n), o && t(e, o), e;
        }
        var o = (function () {
            function t(n) {
              var o = this;
              e(this, t),
                (this.DOM = { el: n }),
                (this.DOM.openCtrl = this.DOM.el.querySelector(
                  ".action--menu"
                )),
                (this.DOM.closeCtrl = this.DOM.el.querySelector(
                  ".action--close"
                )),
                this.DOM.openCtrl.addEventListener("click", function () {
                  return o.open();
                }),
                this.DOM.closeCtrl.addEventListener("click", function () {
                  return o.close();
                }),
                this.DOM.openCtrl.addEventListener("mouseenter", function () {
                  (r = !1), u.reset();
                }),
                this.DOM.openCtrl.addEventListener("mouseleave", function () {
                  r = !0;
                }),
                (this.DOM.items = Array.from(
                  this.DOM.el.querySelectorAll(".menu__item")
                )),
                (this.itemsTotal = this.DOM.items.length),
                (this.DOM.mainLinks = this.DOM.el.querySelectorAll(
                  ".mainmenu > a.mainmenu__item"
                )),
                (this.DOM.sidemenuLinks = this.DOM.el.querySelectorAll(
                  ".sidemenu span.sidemenu__item-inner"
                )),
                (this.DOM.menulink = this.DOM.el.querySelector(
                  ".menu__item-link"
                ));
            }
            return (
              n(t, [
                {
                  key: "open",
                  value: function () {
                    this.toggle("open");
                  },
                },
                {
                  key: "close",
                  value: function () {
                    this.toggle("close");
                  },
                },
                {
                  key: "toggle",
                  value: function (e) {
                    var t = this;
                    if (!this.isAnimating) {
                      (r = "open" !== e),
                        (this.isAnimating = !0),
                        this.DOM.el.classList["open" === e ? "add" : "remove"](
                          "menu--open"
                        );
                      var n = function (e) {
                        e === t.itemsTotal - 1 && (t.isAnimating = !1);
                      };
                      this.DOM.items.forEach(function (t, o) {
                        var i = t.querySelector(".menu__item-inner"),
                          a = {},
                          s = {},
                          r = t.dataset.direction;
                        "bt" === r
                          ? ((a.y = "101%"), (s.y = "-101%"), (s.x = "0%"))
                          : "tb" === r
                          ? ((a.y = "-101%"), (s.y = "101%"), (s.x = "0%"))
                          : "lr" === r
                          ? ((a.x = "-101%"), (s.x = "101%"))
                          : "rl" === r
                          ? ((a.x = "101%"), (s.x = "-101%"))
                          : ((a.x = "101%"),
                            (a.y = "101%"),
                            (s.x = "-101%"),
                            (s.y = "-101%")),
                          "open" === e
                            ? (TweenMax.set(t, a),
                              TweenMax.set(i, s),
                              TweenMax.to([t, i], 0.9, {
                                ease: Quint.easeOut,
                                x: "0%",
                                y: "0%",
                                onComplete: function () {
                                  return n(o);
                                },
                              }))
                            : (TweenMax.to(t, 0.6, {
                                ease: Quart.easeInOut,
                                x: a.x || 0,
                                y: a.y || 0,
                              }),
                              TweenMax.to(i, 0.6, {
                                ease: Quart.easeInOut,
                                x: s.x || 0,
                                y: s.y || 0,
                                onComplete: function () {
                                  return n(o);
                                },
                              }));
                      }),
                        TweenMax.to(this.DOM.closeCtrl, 0.6, {
                          ease: "open" === e ? Quint.easeOut : Quart.easeInOut,
                          startAt: "open" === e ? { rotation: 0 } : null,
                          opacity: "open" === e ? 1 : 0,
                          rotation: "open" === e ? 180 : 270,
                        }),
                        TweenMax.to(
                          this.DOM.openCtrl,
                          "open" === e ? 0.6 : 0.3,
                          {
                            delay: "open" === e ? 0 : 0.3,
                            ease: "open" === e ? Quint.easeOut : Quad.easeOut,
                            opacity: "open" === e ? 0 : 1,
                          }
                        ),
                        TweenMax.staggerTo(
                          this.DOM.mainLinks,
                          "open" === e ? 0.9 : 0.2,
                          {
                            ease:
                              "open" === e ? Quint.easeOut : Quart.easeInOut,
                            startAt:
                              "open" === e ? { y: "50%", opacity: 0 } : null,
                            y: "open" === e ? "0%" : "50%",
                            opacity: "open" === e ? 1 : 0,
                          },
                          "open" === e ? 0.1 : -0.1
                        ),
                        TweenMax.staggerTo(
                          this.DOM.sidemenuLinks,
                          "open" === e ? 0.5 : 0.2,
                          {
                            ease:
                              "open" === e ? Quint.easeInOut : Quart.easeInOut,
                            startAt: "open" === e ? { y: "100%" } : null,
                            y: "open" === e ? "0%" : "100%",
                          },
                          "open" === e ? 0.05 : -0.05
                        ),
                        TweenMax.to(
                          this.DOM.menulink,
                          "open" === e ? 0.9 : 0.6,
                          {
                            ease:
                              "open" === e ? Quint.easeOut : Quart.easeInOut,
                            startAt: "open" === e ? { x: "10%" } : null,
                            x: "open" === e ? "0%" : "10%",
                          }
                        );
                    }
                  },
                },
              ]),
              t
            );
          })(),
          i = new o(document.querySelector("nav.menu"));
        imagesLoaded(
          document.querySelector(".background"),
          { background: !0 },
          function () {
            return document.body.classList.remove("loading");
          }
        );
        var a = function (e) {
            var t = 0,
              n = 0;
            return (
              e || (e = window.event),
              e.pageX || e.pageY
                ? ((t = e.pageX), (n = e.pageY))
                : (e.clientX || e.clientY) &&
                  ((t =
                    e.clientX +
                    document.body.scrollLeft +
                    document.documentElement.scrollLeft),
                  (n =
                    e.clientY +
                    document.body.scrollTop +
                    document.documentElement.scrollTop)),
              { x: t, y: n }
            );
          },
          s = (function () {
            function t() {
              e(this, t),
                (this.DOM = { main: document.querySelector(".background") }),
                (this.layersTotal = 4),
                this.layout(),
                this.initEvents();
            }
            return (
              n(t, [
                {
                  key: "layout",
                  value: function () {
                    for (var e = "", t = 0; t <= this.layersTotal - 1; ++t)
                      e +=
                        '<div class="background__copy" style="background-image: url(img/1.jpg)"></div>';
                    (this.DOM.main.innerHTML = e),
                      (this.DOM.layers = Array.from(
                        this.DOM.main.querySelectorAll(".background__copy")
                      ));
                  },
                },
                {
                  key: "initEvents",
                  value: function () {
                    var e = this;
                    (this.mousemoveFn = function (t) {
                      return requestAnimationFrame(function () {
                        return e.tilt(t);
                      });
                    }),
                      document.body.addEventListener(
                        "mousemove",
                        this.mousemoveFn
                      );
                  },
                },
                {
                  key: "tilt",
                  value: function (e) {
                    if (r) {
                      var t = a(e),
                        n = this.DOM.main.getBoundingClientRect(),
                        o = t.x - n.left,
                        i = t.y - n.top;
                      this.DOM.layers.forEach(function (e, t) {
                        var a = t + 1,
                          s = [a, -a],
                          r = [a, -a],
                          u = [-2, 2],
                          l = [-a, a],
                          c = [1.03, 0.97],
                          m = {
                            translation: {
                              x: ((s[1] - s[0]) / n.width) * o + s[0],
                              y: ((r[1] - r[0]) / n.height) * i + r[0],
                            },
                            rotation: {
                              x: ((u[1] - u[0]) / n.height) * i + u[0],
                              y: ((l[1] - l[0]) / n.width) * o + l[0],
                            },
                            scale: { v: ((c[1] - c[0]) / n.height) * i + c[0] },
                          };
                        TweenMax.to(e, 1.5, {
                          ease: "Power1.easeOut",
                          x: m.translation.x,
                          y: m.translation.y,
                          rotationX: m.rotation.x,
                          rotationY: m.rotation.y,
                          scale: m.scale.v,
                        });
                      });
                    }
                  },
                },
                {
                  key: "zoom",
                  value: function () {
                    TweenMax.staggerTo(
                      this.DOM.layers,
                      1.5,
                      {
                        ease: "Expo.easeOut",
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1.1,
                      },
                      0.04
                    );
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    TweenMax.staggerTo(
                      this.DOM.layers,
                      1.5,
                      {
                        ease: "Expo.easeOut",
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                      },
                      0.07
                    );
                  },
                },
              ]),
              t
            );
          })(),
          r = !0,
          u = new s(),
          l = document.querySelector(".github");
        l.addEventListener("mouseenter", function () {
          (r = !1), u.zoom();
        }),
          l.addEventListener("mouseleave", function () {
            return (r = !0);
          });
      },
      {},
    ],
  },
  {},
  ["i0CD"],
  null
);
//# sourceMappingURL=/js/menu.js.map
