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
    
      
      
    
      var element = document.getElementById("678914c6-dada-42b6-b258-f18abe8fb1d9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '678914c6-dada-42b6-b258-f18abe8fb1d9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b1c8c3e9-cb3d-43d6-b02c-d479c2a20f9a":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17557","type":"Dash"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17568"},"ticker":{"id":"17530"}},"id":"17529","type":"LinearAxis"},{"attributes":{"source":{"id":"17552"}},"id":"17556","type":"CDSView"},{"attributes":{"source":{"id":"17558"}},"id":"17560","type":"CDSView"},{"attributes":{},"id":"17539","type":"SaveTool"},{"attributes":{},"id":"17534","type":"PanTool"},{"attributes":{},"id":"17566","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17554","type":"Circle"},{"attributes":{"toolbars":[{"id":"17543"}],"tools":[{"id":"17533"},{"id":"17534"},{"id":"17535"},{"id":"17536"},{"id":"17537"},{"id":"17538"},{"id":"17539"},{"id":"17540"}]},"id":"17578","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"17558"},"glyph":{"id":"17557"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17560"}},"id":"17559","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"17525"},"ticker":null},"id":"17528","type":"Grid"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17566"},"ticker":{"id":"17526"}},"id":"17525","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17571"},"selection_policy":{"id":"17570"}},"id":"17552","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17561","type":"Span"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17533"},{"id":"17534"},{"id":"17535"},{"id":"17536"},{"id":"17537"},{"id":"17538"},{"id":"17539"},{"id":"17540"}]},"id":"17543","type":"Toolbar"},{"attributes":{"text":"mu"},"id":"17563","type":"Title"},{"attributes":{"toolbar":{"id":"17578"},"toolbar_location":"above"},"id":"17579","type":"ToolbarBox"},{"attributes":{"children":[{"id":"17579"},{"id":"17577"}]},"id":"17580","type":"Column"},{"attributes":{},"id":"17523","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17562","type":"Span"},{"attributes":{},"id":"17572","type":"UnionRenderers"},{"attributes":{},"id":"17530","type":"BasicTicker"},{"attributes":{},"id":"17568","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17540","type":"HoverTool"},{"attributes":{},"id":"17536","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17541","type":"BoxAnnotation"},{"attributes":{},"id":"17538","type":"UndoTool"},{"attributes":{"below":[{"id":"17525"}],"center":[{"id":"17528"},{"id":"17532"}],"left":[{"id":"17529"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17555"},{"id":"17559"},{"id":"17561"},{"id":"17562"}],"title":{"id":"17563"},"toolbar":{"id":"17543"},"toolbar_location":null,"x_range":{"id":"17517"},"x_scale":{"id":"17521"},"y_range":{"id":"17519"},"y_scale":{"id":"17523"}},"id":"17516","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17553","type":"Circle"},{"attributes":{},"id":"17517","type":"DataRange1d"},{"attributes":{"overlay":{"id":"17541"}},"id":"17535","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17542","type":"PolyAnnotation"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17573"},"selection_policy":{"id":"17572"}},"id":"17558","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17552"},"glyph":{"id":"17553"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17554"},"selection_glyph":null,"view":{"id":"17556"}},"id":"17555","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"17529"},"dimension":1,"ticker":null},"id":"17532","type":"Grid"},{"attributes":{},"id":"17533","type":"ResetTool"},{"attributes":{"overlay":{"id":"17542"}},"id":"17537","type":"LassoSelectTool"},{"attributes":{},"id":"17526","type":"BasicTicker"},{"attributes":{"children":[[{"id":"17516"},0,0]]},"id":"17577","type":"GridBox"},{"attributes":{},"id":"17521","type":"LinearScale"},{"attributes":{},"id":"17573","type":"Selection"},{"attributes":{},"id":"17570","type":"UnionRenderers"},{"attributes":{},"id":"17519","type":"DataRange1d"},{"attributes":{},"id":"17571","type":"Selection"}],"root_ids":["17580"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b1c8c3e9-cb3d-43d6-b02c-d479c2a20f9a","root_ids":["17580"],"roots":{"17580":"678914c6-dada-42b6-b258-f18abe8fb1d9"}}];
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