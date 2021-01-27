(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("efc63de5-c27c-4069-a4b7-ab74a170e93d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'efc63de5-c27c-4069-a4b7-ab74a170e93d' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b32803c4-a62b-4cff-9b31-2753d6537ea8":{"roots":{"references":[{"attributes":{},"id":"17647","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17642"},{"id":"17643"},{"id":"17644"},{"id":"17645"},{"id":"17646"},{"id":"17647"},{"id":"17648"},{"id":"17649"}]},"id":"17652","type":"Toolbar"},{"attributes":{},"id":"17670","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17661"},"glyph":{"id":"17662"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17663"},"selection_glyph":null,"view":{"id":"17665"}},"id":"17664","type":"GlyphRenderer"},{"attributes":{},"id":"17674","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17675"},"selection_policy":{"id":"17674"}},"id":"17661","type":"ColumnDataSource"},{"attributes":{},"id":"17675","type":"Selection"},{"attributes":{},"id":"17672","type":"BasicTickFormatter"},{"attributes":{},"id":"17630","type":"LinearScale"},{"attributes":{},"id":"17628","type":"DataRange1d"},{"attributes":{},"id":"17626","type":"DataRange1d"},{"attributes":{"source":{"id":"17661"}},"id":"17665","type":"CDSView"},{"attributes":{},"id":"17645","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"17680"},"toolbar_location":"above"},"id":"17681","type":"ToolbarBox"},{"attributes":{"below":[{"id":"17634"}],"center":[{"id":"17637"},{"id":"17641"}],"left":[{"id":"17638"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17664"},{"id":"17666"}],"title":{"id":"17667"},"toolbar":{"id":"17652"},"toolbar_location":null,"x_range":{"id":"17626"},"x_scale":{"id":"17630"},"y_range":{"id":"17628"},"y_scale":{"id":"17632"}},"id":"17625","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"17672"},"ticker":{"id":"17639"}},"id":"17638","type":"LinearAxis"},{"attributes":{},"id":"17635","type":"BasicTicker"},{"attributes":{"text":"sigma"},"id":"17667","type":"Title"},{"attributes":{"toolbars":[{"id":"17652"}],"tools":[{"id":"17642"},{"id":"17643"},{"id":"17644"},{"id":"17645"},{"id":"17646"},{"id":"17647"},{"id":"17648"},{"id":"17649"}]},"id":"17680","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"17649","type":"HoverTool"},{"attributes":{"children":[[{"id":"17625"},0,0]]},"id":"17679","type":"GridBox"},{"attributes":{"children":[{"id":"17681"},{"id":"17679"}]},"id":"17682","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17663","type":"Circle"},{"attributes":{},"id":"17632","type":"LinearScale"},{"attributes":{"axis":{"id":"17634"},"ticker":null},"id":"17637","type":"Grid"},{"attributes":{"overlay":{"id":"17651"}},"id":"17646","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17650","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"17638"},"dimension":1,"ticker":null},"id":"17641","type":"Grid"},{"attributes":{"overlay":{"id":"17650"}},"id":"17644","type":"BoxZoomTool"},{"attributes":{},"id":"17639","type":"BasicTicker"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17666","type":"Span"},{"attributes":{},"id":"17648","type":"SaveTool"},{"attributes":{},"id":"17642","type":"ResetTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17651","type":"PolyAnnotation"},{"attributes":{},"id":"17643","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17662","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17670"},"ticker":{"id":"17635"}},"id":"17634","type":"LinearAxis"}],"root_ids":["17682"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b32803c4-a62b-4cff-9b31-2753d6537ea8","root_ids":["17682"],"roots":{"17682":"efc63de5-c27c-4069-a4b7-ab74a170e93d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();