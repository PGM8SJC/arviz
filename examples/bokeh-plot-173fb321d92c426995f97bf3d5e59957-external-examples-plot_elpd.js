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
    
      
      
    
      var element = document.getElementById("c2781e84-96af-4e01-aeb4-41dab1da8f1c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c2781e84-96af-4e01-aeb4-41dab1da8f1c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1b1d34dc-d1f1-4503-8dc9-3bea0229a626":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17159","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"17171"},"glyph":{"id":"17170"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17173"}},"id":"17172","type":"GlyphRenderer"},{"attributes":{},"id":"17156","type":"UndoTool"},{"attributes":{"below":[{"id":"17143"}],"center":[{"id":"17146"},{"id":"17150"}],"left":[{"id":"17147"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"17172"}],"title":{"id":"17174"},"toolbar":{"id":"17161"},"toolbar_location":null,"x_range":{"id":"17135"},"x_scale":{"id":"17139"},"y_range":{"id":"17137"},"y_scale":{"id":"17141"}},"id":"17134","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"17161"}],"tools":[{"id":"17151"},{"id":"17152"},{"id":"17153"},{"id":"17154"},{"id":"17155"},{"id":"17156"},{"id":"17157"},{"id":"17158"}]},"id":"17187","type":"ProxyToolbar"},{"attributes":{},"id":"17179","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17160","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"17159"}},"id":"17153","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17151"},{"id":"17152"},{"id":"17153"},{"id":"17154"},{"id":"17155"},{"id":"17156"},{"id":"17157"},{"id":"17158"}]},"id":"17161","type":"Toolbar"},{"attributes":{"source":{"id":"17171"}},"id":"17173","type":"CDSView"},{"attributes":{},"id":"17144","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"17187"},"toolbar_location":"above"},"id":"17188","type":"ToolbarBox"},{"attributes":{"children":[{"id":"17188"},{"id":"17186"}]},"id":"17189","type":"Column"},{"attributes":{},"id":"17141","type":"LinearScale"},{"attributes":{"overlay":{"id":"17160"}},"id":"17155","type":"LassoSelectTool"},{"attributes":{},"id":"17154","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"17147"},"dimension":1,"ticker":null},"id":"17150","type":"Grid"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17174","type":"Title"},{"attributes":{"callback":null},"id":"17158","type":"HoverTool"},{"attributes":{},"id":"17135","type":"DataRange1d"},{"attributes":{},"id":"17151","type":"ResetTool"},{"attributes":{"children":[[{"id":"17134"},0,0]]},"id":"17186","type":"GridBox"},{"attributes":{},"id":"17137","type":"DataRange1d"},{"attributes":{},"id":"17182","type":"Selection"},{"attributes":{},"id":"17152","type":"PanTool"},{"attributes":{"formatter":{"id":"17177"},"ticker":{"id":"17144"}},"id":"17143","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17182"},"selection_policy":{"id":"17181"}},"id":"17171","type":"ColumnDataSource"},{"attributes":{},"id":"17148","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17170","type":"Cross"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17179"},"ticker":{"id":"17148"}},"id":"17147","type":"LinearAxis"},{"attributes":{},"id":"17181","type":"UnionRenderers"},{"attributes":{},"id":"17139","type":"LinearScale"},{"attributes":{},"id":"17177","type":"BasicTickFormatter"},{"attributes":{},"id":"17157","type":"SaveTool"},{"attributes":{"axis":{"id":"17143"},"ticker":null},"id":"17146","type":"Grid"}],"root_ids":["17189"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1b1d34dc-d1f1-4503-8dc9-3bea0229a626","root_ids":["17189"],"roots":{"17189":"c2781e84-96af-4e01-aeb4-41dab1da8f1c"}}];
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