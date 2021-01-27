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
    
      
      
    
      var element = document.getElementById("770b9408-765d-4a0c-968d-d1d1a05a3476");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '770b9408-765d-4a0c-968d-d1d1a05a3476' but no matching script tag was found.")
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
                    
                  var docs_json = '{"50c0cd55-b580-4574-b97e-028a38d6f65d":{"roots":{"references":[{"attributes":{},"id":"14224","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"14192"},"dimension":1,"ticker":null},"id":"14195","type":"Grid"},{"attributes":{},"id":"14226","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14196"},{"id":"14197"},{"id":"14198"},{"id":"14199"},{"id":"14200"},{"id":"14201"},{"id":"14202"},{"id":"14203"}]},"id":"14206","type":"Toolbar"},{"attributes":{},"id":"14199","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"14188"}],"center":[{"id":"14191"},{"id":"14195"}],"left":[{"id":"14192"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"14217"}],"title":{"id":"14219"},"toolbar":{"id":"14206"},"toolbar_location":null,"x_range":{"id":"14180"},"x_scale":{"id":"14184"},"y_range":{"id":"14182"},"y_scale":{"id":"14186"}},"id":"14179","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14201","type":"UndoTool"},{"attributes":{},"id":"14202","type":"SaveTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14227"},"selection_policy":{"id":"14226"}},"id":"14216","type":"ColumnDataSource"},{"attributes":{},"id":"14197","type":"PanTool"},{"attributes":{"axis":{"id":"14188"},"ticker":null},"id":"14191","type":"Grid"},{"attributes":{},"id":"14180","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14205"}},"id":"14200","type":"LassoSelectTool"},{"attributes":{},"id":"14182","type":"DataRange1d"},{"attributes":{},"id":"14196","type":"ResetTool"},{"attributes":{"callback":null},"id":"14203","type":"HoverTool"},{"attributes":{},"id":"14186","type":"LinearScale"},{"attributes":{},"id":"14184","type":"LinearScale"},{"attributes":{"children":[{"id":"14233"},{"id":"14231"}]},"id":"14234","type":"Column"},{"attributes":{},"id":"14222","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"14232"},"toolbar_location":"above"},"id":"14233","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"14222"},"ticker":{"id":"14189"}},"id":"14188","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"14206"}],"tools":[{"id":"14196"},{"id":"14197"},{"id":"14198"},{"id":"14199"},{"id":"14200"},{"id":"14201"},{"id":"14202"},{"id":"14203"}]},"id":"14232","type":"ProxyToolbar"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14215","type":"Cross"},{"attributes":{"text":"centered model - non centered model"},"id":"14219","type":"Title"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14224"},"ticker":{"id":"14193"}},"id":"14192","type":"LinearAxis"},{"attributes":{},"id":"14189","type":"BasicTicker"},{"attributes":{"overlay":{"id":"14204"}},"id":"14198","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"14179"},0,0]]},"id":"14231","type":"GridBox"},{"attributes":{"source":{"id":"14216"}},"id":"14218","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"14205","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"14216"},"glyph":{"id":"14215"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14218"}},"id":"14217","type":"GlyphRenderer"},{"attributes":{},"id":"14227","type":"Selection"},{"attributes":{},"id":"14193","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14204","type":"BoxAnnotation"}],"root_ids":["14234"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"50c0cd55-b580-4574-b97e-028a38d6f65d","root_ids":["14234"],"roots":{"14234":"770b9408-765d-4a0c-968d-d1d1a05a3476"}}];
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