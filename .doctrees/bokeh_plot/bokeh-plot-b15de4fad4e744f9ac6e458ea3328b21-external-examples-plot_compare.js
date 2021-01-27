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
    
      
      
    
      var element = document.getElementById("834aa7bf-f511-4d3e-a665-aa29f5bbd876");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '834aa7bf-f511-4d3e-a665-aa29f5bbd876' but no matching script tag was found.")
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
                    
                  var docs_json = '{"33f5f15d-9404-4024-aaa4-8e1307abae03":{"roots":{"references":[{"attributes":{"data_source":{"id":"14991"},"glyph":{"id":"14992"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14993"},"selection_glyph":null,"view":{"id":"14995"}},"id":"14994","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15001"},"glyph":{"id":"15002"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15003"},"selection_glyph":null,"view":{"id":"15005"}},"id":"15004","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15024"},"selection_policy":{"id":"15023"}},"id":"15001","type":"ColumnDataSource"},{"attributes":{},"id":"15023","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"14973"}},"id":"14967","type":"BoxZoomTool"},{"attributes":{},"id":"14955","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15003","type":"MultiLine"},{"attributes":{"axis_label":"Log","formatter":{"id":"15014"},"ticker":{"id":"14958"}},"id":"14957","type":"LinearAxis"},{"attributes":{},"id":"14966","type":"PanTool"},{"attributes":{},"id":"15021","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14993","type":"MultiLine"},{"attributes":{},"id":"15020","type":"Selection"},{"attributes":{"data_source":{"id":"14996"},"glyph":{"id":"14997"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14998"},"selection_glyph":null,"view":{"id":"15000"}},"id":"14999","type":"GlyphRenderer"},{"attributes":{},"id":"14965","type":"ResetTool"},{"attributes":{"source":{"id":"14986"}},"id":"14990","type":"CDSView"},{"attributes":{"toolbars":[{"id":"14975"}],"tools":[{"id":"14965"},{"id":"14966"},{"id":"14967"},{"id":"14968"},{"id":"14969"},{"id":"14970"},{"id":"14971"},{"id":"14972"}]},"id":"15031","type":"ProxyToolbar"},{"attributes":{},"id":"15024","type":"Selection"},{"attributes":{"children":[[{"id":"14948"},0,0]]},"id":"15030","type":"GridBox"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14987","type":"Triangle"},{"attributes":{"axis":{"id":"14961"},"dimension":1,"ticker":null},"id":"14964","type":"Grid"},{"attributes":{"formatter":{"id":"15016"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"14984"}},"id":"14961","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15018"},"selection_policy":{"id":"15017"}},"id":"14986","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14997","type":"Circle"},{"attributes":{"toolbar":{"id":"15031"},"toolbar_location":"above"},"id":"15032","type":"ToolbarBox"},{"attributes":{"source":{"id":"15006"}},"id":"15010","type":"CDSView"},{"attributes":{},"id":"14958","type":"BasicTicker"},{"attributes":{},"id":"15017","type":"UnionRenderers"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15011","type":"Span"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14992","type":"MultiLine"},{"attributes":{"overlay":{"id":"14974"}},"id":"14969","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14988","type":"Triangle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"14974","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14998","type":"Circle"},{"attributes":{},"id":"15014","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"15006"},"glyph":{"id":"15007"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15008"},"selection_glyph":null,"view":{"id":"15010"}},"id":"15009","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15026"},"selection_policy":{"id":"15025"}},"id":"15006","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15001"}},"id":"15005","type":"CDSView"},{"attributes":{},"id":"15025","type":"UnionRenderers"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15002","type":"MultiLine"},{"attributes":{"below":[{"id":"14957"}],"center":[{"id":"14960"},{"id":"14964"}],"left":[{"id":"14961"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"14989"},{"id":"14994"},{"id":"14999"},{"id":"15004"},{"id":"15009"},{"id":"15011"}],"title":{"id":"15013"},"toolbar":{"id":"14975"},"toolbar_location":null,"x_range":{"id":"14949"},"x_scale":{"id":"14953"},"y_range":{"id":"14951"},"y_scale":{"id":"14955"}},"id":"14948","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14970","type":"UndoTool"},{"attributes":{"source":{"id":"14996"}},"id":"15000","type":"CDSView"},{"attributes":{},"id":"14968","type":"WheelZoomTool"},{"attributes":{},"id":"15018","type":"Selection"},{"attributes":{"data_source":{"id":"14986"},"glyph":{"id":"14987"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14988"},"selection_glyph":null,"view":{"id":"14990"}},"id":"14989","type":"GlyphRenderer"},{"attributes":{},"id":"15026","type":"Selection"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14984","type":"FixedTicker"},{"attributes":{},"id":"15019","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15008","type":"Circle"},{"attributes":{},"id":"15016","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"15013","type":"Title"},{"attributes":{"axis":{"id":"14957"},"ticker":null},"id":"14960","type":"Grid"},{"attributes":{"callback":null},"id":"14972","type":"HoverTool"},{"attributes":{},"id":"14971","type":"SaveTool"},{"attributes":{"end":0.5,"start":-1.5},"id":"14951","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14965"},{"id":"14966"},{"id":"14967"},{"id":"14968"},{"id":"14969"},{"id":"14970"},{"id":"14971"},{"id":"14972"}]},"id":"14975","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15022"},"selection_policy":{"id":"15021"}},"id":"14996","type":"ColumnDataSource"},{"attributes":{"source":{"id":"14991"}},"id":"14995","type":"CDSView"},{"attributes":{"children":[{"id":"15032"},{"id":"15030"}]},"id":"15033","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14973","type":"BoxAnnotation"},{"attributes":{},"id":"14953","type":"LinearScale"},{"attributes":{},"id":"14949","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15007","type":"Circle"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15020"},"selection_policy":{"id":"15019"}},"id":"14991","type":"ColumnDataSource"},{"attributes":{},"id":"15022","type":"Selection"}],"root_ids":["15033"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"33f5f15d-9404-4024-aaa4-8e1307abae03","root_ids":["15033"],"roots":{"15033":"834aa7bf-f511-4d3e-a665-aa29f5bbd876"}}];
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