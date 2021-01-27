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
    
      
      
    
      var element = document.getElementById("2cb2d43b-1467-48c9-a9df-68305d83ff3c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2cb2d43b-1467-48c9-a9df-68305d83ff3c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1a3f0068-14f8-42d9-b739-b64447c48be0":{"roots":{"references":[{"attributes":{},"id":"17444","type":"Selection"},{"attributes":{"data_source":{"id":"17420"},"glyph":{"id":"17421"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17422"},"selection_glyph":null,"view":{"id":"17424"}},"id":"17423","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17400"}},"id":"17395","type":"LassoSelectTool"},{"attributes":{},"id":"17446","type":"Selection"},{"attributes":{"data_source":{"id":"17415"},"glyph":{"id":"17416"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17417"},"selection_glyph":null,"view":{"id":"17419"}},"id":"17418","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17448"},"selection_policy":{"id":"17447"}},"id":"17425","type":"ColumnDataSource"},{"attributes":{},"id":"17381","type":"LinearScale"},{"attributes":{},"id":"17397","type":"SaveTool"},{"attributes":{},"id":"17375","type":"DataRange1d"},{"attributes":{},"id":"17392","type":"PanTool"},{"attributes":{"above":[{"id":"17431"}],"below":[{"id":"17383"}],"center":[{"id":"17386"},{"id":"17390"}],"left":[{"id":"17387"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17413"},{"id":"17418"},{"id":"17423"},{"id":"17428"},{"id":"17430"}],"title":{"id":"17434"},"toolbar":{"id":"17401"},"toolbar_location":null,"x_range":{"id":"17375"},"x_scale":{"id":"17379"},"y_range":{"id":"17377"},"y_scale":{"id":"17381"}},"id":"17374","subtype":"Figure","type":"Plot"},{"attributes":{"text":"b"},"id":"17434","type":"Title"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17439"},"ticker":{"id":"17388"}},"id":"17387","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17417","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17399","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17412","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17446"},"selection_policy":{"id":"17445"}},"id":"17420","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17410"}},"id":"17414","type":"CDSView"},{"attributes":{},"id":"17445","type":"UnionRenderers"},{"attributes":{"children":[{"id":"17454"},{"id":"17452"}]},"id":"17455","type":"Column"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17430","type":"Span"},{"attributes":{"source":{"id":"17425"}},"id":"17429","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"17432"},{"id":"17433"}],"location":"center_right","orientation":"horizontal"},"id":"17431","type":"Legend"},{"attributes":{},"id":"17379","type":"LinearScale"},{"attributes":{"source":{"id":"17415"}},"id":"17419","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17400","type":"PolyAnnotation"},{"attributes":{},"id":"17439","type":"BasicTickFormatter"},{"attributes":{},"id":"17394","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17391"},{"id":"17392"},{"id":"17393"},{"id":"17394"},{"id":"17395"},{"id":"17396"},{"id":"17397"},{"id":"17398"}]},"id":"17401","type":"Toolbar"},{"attributes":{},"id":"17447","type":"UnionRenderers"},{"attributes":{"axis":{"id":"17387"},"dimension":1,"ticker":null},"id":"17390","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17426","type":"Circle"},{"attributes":{},"id":"17384","type":"BasicTicker"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17421","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17444"},"selection_policy":{"id":"17443"}},"id":"17415","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"17383"},"ticker":null},"id":"17386","type":"Grid"},{"attributes":{"data_source":{"id":"17410"},"glyph":{"id":"17411"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17412"},"selection_glyph":null,"view":{"id":"17414"}},"id":"17413","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17399"}},"id":"17393","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17420"}},"id":"17424","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17422","type":"Line"},{"attributes":{"toolbar":{"id":"17453"},"toolbar_location":"above"},"id":"17454","type":"ToolbarBox"},{"attributes":{},"id":"17391","type":"ResetTool"},{"attributes":{},"id":"17388","type":"BasicTicker"},{"attributes":{},"id":"17441","type":"UnionRenderers"},{"attributes":{},"id":"17442","type":"Selection"},{"attributes":{},"id":"17448","type":"Selection"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17413"},{"id":"17418"}]},"id":"17432","type":"LegendItem"},{"attributes":{},"id":"17396","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17427","type":"Circle"},{"attributes":{"callback":null},"id":"17398","type":"HoverTool"},{"attributes":{},"id":"17377","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17416","type":"Line"},{"attributes":{},"id":"17443","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"17401"}],"tools":[{"id":"17391"},{"id":"17392"},{"id":"17393"},{"id":"17394"},{"id":"17395"},{"id":"17396"},{"id":"17397"},{"id":"17398"}]},"id":"17453","type":"ProxyToolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17442"},"selection_policy":{"id":"17441"}},"id":"17410","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17425"},"glyph":{"id":"17426"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17427"},"selection_glyph":null,"view":{"id":"17429"}},"id":"17428","type":"GlyphRenderer"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17428"},{"id":"17423"}]},"id":"17433","type":"LegendItem"},{"attributes":{"children":[[{"id":"17374"},0,0]]},"id":"17452","type":"GridBox"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17437"},"ticker":{"id":"17384"}},"id":"17383","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17411","type":"Circle"},{"attributes":{},"id":"17437","type":"BasicTickFormatter"}],"root_ids":["17455"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1a3f0068-14f8-42d9-b739-b64447c48be0","root_ids":["17455"],"roots":{"17455":"2cb2d43b-1467-48c9-a9df-68305d83ff3c"}}];
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