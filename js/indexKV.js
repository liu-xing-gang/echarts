
if (typeof deconcept == "undefined") {
    var deconcept = new Object()
}
if (typeof deconcept.util == "undefined") {
    deconcept.util = new Object()
}
if (typeof deconcept.SWFObjectUtil == "undefined") {
    deconcept.SWFObjectUtil = new Object()
}
deconcept.SWFObject = function (a, l, n, k, b, j, d, e, f, g) {
    if (!document.getElementById) {
        return
    }
    this.DETECT_KEY = g ? g : "detectflash";
    this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
    this.params = new Object();
    this.variables = new Object();
    this.attributes = new Array();
    if (a) {
        this.setAttribute("swf", a)
    }
    if (l) {
        this.setAttribute("id", l)
    }
    if (n) {
        this.setAttribute("width", n)
    }
    if (k) {
        this.setAttribute("height", k)
    }
    if (b) {
        this.setAttribute("version", new deconcept.PlayerVersion(b.toString().split(".")))
    }
    this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
    if (!window.opera && document.all && this.installedVer.major > 7) {
        deconcept.SWFObject.doPrepUnload = true
    }
    if (j) {
        this.addParam("bgcolor", j)
    }
    var m = d ? d : "high";
    this.addParam("quality", m);
    this.setAttribute("useExpressInstall", false);
    this.setAttribute("doExpressInstall", false);
    var i = (e) ? e : window.location;
    this.setAttribute("xiRedirectUrl", i);
    this.setAttribute("redirectUrl", "");
    if (f) {
        this.setAttribute("redirectUrl", f)
    }
};
deconcept.SWFObject.prototype = {
    useExpressInstall: function (a) {
        this.xiSWFPath = !a ? "expressinstall.swf" : a;
        this.setAttribute("useExpressInstall", true)
    },
    setAttribute: function (a, b) {
        this.attributes[a] = b
    },
    getAttribute: function (a) {
        return this.attributes[a]
    },
    addParam: function (a, b) {
        this.params[a] = b
    },
    getParams: function () {
        return this.params
    },
    addVariable: function (a, b) {
        this.variables[a] = b
    },
    getVariable: function (a) {
        return this.variables[a]
    },
    getVariables: function () {
        return this.variables
    },
    getVariablePairs: function () {
        var a = new Array();
        var c;
        var b = this.getVariables();
        for (c in b) {
            a[a.length] = c + "=" + b[c]
        }
        return a
    },
    getSWFHTML: function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "PlugIn");
                this.setAttribute("swf", this.xiSWFPath)
            }
            a = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '"';
            a += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ';
            var b = this.getParams();
            for (var f in b) {
                a += [f] + '="' + b[f] + '" '
            }
            var c = this.getVariablePairs().join("&");
            if (c.length > 0) {
                a += 'flashvars="' + c + '"'
            }
            a += "/>"
        } else {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "ActiveX");
                this.setAttribute("swf", this.xiSWFPath)
            }
            a = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '">';
            a += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            var d = this.getParams();
            for (var f in d) {
                a += '<param name="' + f + '" value="' + d[f] + '" />'
            }
            var e = this.getVariablePairs().join("&");
            if (e.length > 0) {
                a += '<param name="flashvars" value="' + e + '" />'
            }
            a += "</object>"
        }
        return a
    },
    write: function (a) {
        if (this.getAttribute("useExpressInstall")) {
            var b = new deconcept.PlayerVersion([6, 0, 65]);
            if (this.installedVer.versionIsValid(b) && !this.installedVer.versionIsValid(this.getAttribute("version"))) {
                this.setAttribute("doExpressInstall", true);
                this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl")));
                document.title = document.title.slice(0, 47) + " - Flash Player Installation";
                this.addVariable("MMdoctitle", document.title)
            }
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) {
            var c = (typeof a == "string") ? document.getElementById(a) : a;
            c.innerHTML = this.getSWFHTML();
            return true
        } else {
            if (this.getAttribute("redirectUrl") != "") {
                document.location.replace(this.getAttribute("redirectUrl"))
            }
        }
        return false
    }
};
deconcept.SWFObjectUtil.getPlayerVersion = function () {
    var a = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var f = navigator.plugins["Shockwave Flash"];
        if (f && f.description) {
            a = new deconcept.PlayerVersion(f.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."))
        }
    } else {
        if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
            var c = 1;
            var b = 3;
            while (c) {
                try {
                    b++;
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + b);
                    a = new deconcept.PlayerVersion([b, 0, 0])
                } catch (d) {
                    c = null
                }
            }
        } else {
            try {
                var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (d) {
                try {
                    var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    a = new deconcept.PlayerVersion([6, 0, 21]);
                    c.AllowScriptAccess = "always"
                } catch (d) {
                    if (a.major == 6) {
                        return a
                    }
                }
                try {
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (d) { }
            }
            if (c != null) {
                a = new deconcept.PlayerVersion(c.GetVariable("$version").split(" ")[1].split(","))
            }
        }
    }
    return a
};
deconcept.PlayerVersion = function (a) {
    this.major = a[0] != null ? parseInt(a[0]) : 0;
    this.minor = a[1] != null ? parseInt(a[1]) : 0;
    this.rev = a[2] != null ? parseInt(a[2]) : 0
};
deconcept.PlayerVersion.prototype.versionIsValid = function (a) {
    if (this.major < a.major) {
        return false
    }
    if (this.major > a.major) {
        return true
    }
    if (this.minor < a.minor) {
        return false
    }
    if (this.minor > a.minor) {
        return true
    }
    if (this.rev < a.rev) {
        return false
    }
    return true
};
deconcept.util = {
    getRequestParameter: function (a) {
        var d = document.location.search || document.location.hash;
        if (a == null) {
            return d
        }
        if (d) {
            var b = d.substring(1).split("&");
            for (var c = 0; c < b.length; c++) {
                if (b[c].substring(0, b[c].indexOf("=")) == a) {
                    return b[c].substring((b[c].indexOf("=") + 1))
                }
            }
        }
        return ""
    }
};
deconcept.SWFObjectUtil.cleanupSWFs = function () {
    var a = document.getElementsByTagName("OBJECT");
    for (var b = a.length - 1; b >= 0; b--) {
        a[b].style.display = "none";
        for (var c in a[b]) {
            if (typeof a[b][c] == "function") {
                a[b][c] = function () { }
            }
        }
    }
};
if (deconcept.SWFObject.doPrepUnload) {
    if (!deconcept.unloadSet) {
        deconcept.SWFObjectUtil.prepUnload = function () {
            __flash_unloadHandler = function () { };
            __flash_savedUnloadHandler = function () { };
            window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs)
        };
        window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload);
        deconcept.unloadSet = true
    }
}
if (!document.getElementById && document.all) {
    document.getElementById = function (a) {
        return document.all[a]
    }
}
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject;
var SWFObject = deconcept.SWFObject; (function (a) {
    a.fn.maiPlayer = function (c) {
        var b = {
            oPlay: null,
            speedSwitch: 3000,
            speedAnimate: 500,
            showPage: 0,
            playerWidth: 0,
            autoPlay: true,
            flipButton: true,
            pageButton: true,
            playerBg: true,
            numPage: false,
            imageTitle: false,
            imageContent: false,
            switchActionAuto: "roll",
            switchActionPage: "opacity",
            switchActionFlip: "roll",
            textDisplay: 0,
            textSpeed: 500
        };
        var c = a.extend(b, c);
        this.each(function () {
            var p = a(this);
            var n = "";
            var h = 0;
            var i = 0;
            var j = null;
            var d = [];
            a(p).find("li img").parents("ul").addClass("ul-img").css("position", "relative");
            h = a(p).find(".ul-img li").length;
            if (c.playerWidth) {
                i = c.playerWidth;
                a(p).css("width", i + "px");
                a(p).find(".ul-img li").css("width", i + "px");
                a(p).find("img").css("width", i + "px");
                a(p).find(".bg:first").css("width", i + "px")
            } else {
                i = a(p).find(".ul-img li:first").width()
            }
            if (c.playerHeight) {
                iHeight = c.playerHeight;
                a(p).css("height", iHeight + "px");
                a(p).find(".ul-img").css("height", iHeight + "px");
                a(p).find(".ul-img li").css("height", iHeight + "px");
                a(p).find("img").css("height", iHeight + "px")
            }
            a(p).find(".ul-img li").each(function () {
                var q = a(p).find(".ul-img li").index(this);
                d[q] = a(p).find(".ul-img img").eq(q).attr("title");
                a(p).find(".ul-img img").eq(q).removeAttr("title")
            });
            if (c.imageTitle || c.imageContent) {
                var k = a('<ul class="ul-text"></ul>');
                a(k).insertAfter(a(p).find(".ul-img"));
                a(p).find(".ul-img li").each(function () {
                    var s = a("<li></li>");
                    var q = a(p).find(".ul-img li").index(this);
                    if (c.imageTitle) {
                        var t = a("<h2></h2>");
                        a(t).text(d[q]);
                        a(s).append(t)
                    }
                    if (c.imageContent) {
                        var r = a("<p></p>");
                        var u = a(p).find(".ul-img img").eq(q).attr("alt");
                        a(r).text(u);
                        a(s).append(r)
                    }
                    a(k).append(s)
                });
                a(p).find(".ul-text").width(i * h);
                a(p).find(".ul-text").height(a(p).find(".bg:first").height())
            }
            a(p).find(".ul-img").width(i * h);
            if (c.flipButton) {
                a(p).find(".next:first").click(function () {
                    if (c.switchActionFlip == "roll") {
                        l(a(p).find(".ul-img"), 1);
                        if (c.imageTitle || c.imageContent) {
                            l(a(p).find(".ul-text"), 0)
                        }
                    } else {
                        if (c.switchActionFlip == "opacity") {
                            if (c.showPage == h - 1) {
                                c.showPage = 0
                            } else {
                                c.showPage++
                            }
                            f(a(p).find(".ul-img"), c.showPage);
                            f(a(p).find(".ul-text"), c.showPage);
                            e(a(p).find(".num span").eq(c.showPage), "on")
                        }
                    }
                });
                a(p).find(".prev:first").click(function () {
                    if (c.switchActionFlip == "roll") {
                        l(a(p).find(".ul-img"), -1);
                        if (c.imageTitle || c.imageContent) {
                            l(a(p).find(".ul-text"), 0)
                        }
                    } else {
                        if (c.switchActionFlip == "opacity") {
                            if (c.showPage == 0) {
                                c.showPage = h - 1
                            } else {
                                c.showPage--
                            }
                            f(a(p).find(".ul-img"), c.showPage);
                            f(a(p).find(".ul-text"), c.showPage);
                            e(a(p).find(".num span").eq(c.showPage), "on")
                        }
                    }
                })
            } else {
                a(p).find(".next:first").css("display", "none");
                a(p).find(".prev:first").css("display", "none")
            }
            if (c.showPage) {
                a(p).find(".ul-img").css("left", -i * c.showPage + "px");
                a(p).find(".ul-text").css("left", -i * c.showPage + "px")
            }
            if (c.pageButton) {
                n = "";
                a(p).find(".ul-img li").each(function () {
                    n += "<span></span>"
                });
                a(p).find(".num:first").html(n);
                a(p).find(".num span:first").addClass("on");
                e(a(p).find(".num span").eq(c.showPage), "on");
                a(p).find(".num span").click(function () {
                    var q = a(p).find(".num span").index(this);
                    if (c.switchActionPage == "roll") {
                        c.showPage = 0;
                        l(a(p).find(".ul-img"), q);
                        l(a(p).find(".ul-text"), 0)
                    } else {
                        if (c.switchActionPage == "opacity") {
                            c.showPage = q;
                            f(a(p).find(".ul-img"), c.showPage);
                            f(a(p).find(".ul-text"), c.showPage);
                            e(a(p).find(".num span").eq(c.showPage), "on")
                        }
                    }
                    if (c.numPage) {
                        a(this).text(a(p).find(".num span").index(this) + 1)
                    }
                })
            }
            if (!c.playerBg) {
                a(p).find(".bg:first").css("display", "none")
            }
            function l(r, q) {
                if (r.is(":animated") == false) {
                    c.showPage += q;
                    if (c.showPage != -1 && c.showPage != h) {
                        r.animate({
                            left: -c.showPage * i + "px"
                        },
                        c.speedAnimate)
                    } else {
                        if (c.showPage == -1) {
                            c.showPage = h - 1;
                            r.css({
                                left: -(i * (c.showPage - 1)) + "px"
                            });
                            r.animate({
                                left: -(i * c.showPage) + "px"
                            },
                            c.speedAnimate)
                        } else {
                            if (c.showPage == c.showPage) {
                                c.showPage = 0;
                                r.css({
                                    left: -i + "px"
                                });
                                r.animate({
                                    left: 0 + "px"
                                },
                                c.speedAnimate)
                            }
                        }
                    }
                    e(a(p).find(".num span").eq(c.showPage), "on")
                }
            }
            function f(s, r) {
                var q = (s.css("left") != -r * i + "px");
                if (q) {
                    s.fadeOut(20,
                    function () {
                        s.css("left", -r * i + "px");
                        s.fadeIn(500)
                    })
                }
            }
            function m() {
                j = setInterval(function () {
                    if (c.switchActionAuto == "roll") {
                        l(a(p).find(".ul-img"), 1)
                    } else {
                        if (c.switchActionAuto == "opacity") {
                            c.showPage++;
                            if (c.showPage == h) {
                                c.showPage = 0
                            }
                            f(a(p).find(".ul-img"), c.showPage);
                            e(a(p).find(".num span").eq(c.showPage), "on")
                        }
                    }
                    if (c.imageTitle || c.imageContent) {
                        l(a(p).find(".ul-text"), 0)
                    }
                },
                c.speedSwitch)
            }
            function o() {
                if (j) {
                    clearInterval(j)
                }
            }
            a(p).hover(function () {
                o();
                if (c.textDisplay == 1) {
                    a(p).find(".bg:first").slideUp(c.textSpeed);
                    a(p).find(".ul-text:first").slideUp(c.textSpeed)
                } else {
                    if (c.textDisplay == 2) {
                        a(p).find(".bg:first").slideDown(c.textSpeed);
                        a(p).find(".ul-text:first").slideDown(c.textSpeed)
                    }
                }
            },
            function () {
                if (c.autoPlay) {
                    m()
                }
                if (c.textDisplay == 1) {
                    a(p).find(".bg:first").slideDown(c.textSpeed);
                    a(p).find(".ul-text:first").slideDown(c.textSpeed)
                } else {
                    if (c.textDisplay == 2) {
                        a(p).find(".bg:first").slideUp(c.textSpeed);
                        a(p).find(".ul-text:first").slideUp(c.textSpeed)
                    }
                }
            });
            if (c.autoPlay) {
                m()
            }
            function g(q, r) { }
            function e(r, q) {
                r = a(r) ? a(r) : r;
                r.addClass(q).siblings().removeClass(q)
            }
        })
    }
})(jQuery);