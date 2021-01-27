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
    
      
      
    
      var element = document.getElementById("c4fe86b0-dde9-4c4c-a49a-92ba24c1f635");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c4fe86b0-dde9-4c4c-a49a-92ba24c1f635' but no matching script tag was found.")
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
                    
                  var docs_json = '{"365b0b10-7234-4166-84eb-c291bf2182c7":{"roots":{"references":[{"attributes":{"source":{"id":"35215"}},"id":"35217","type":"CDSView"},{"attributes":{},"id":"35127","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"35218","type":"Title"},{"attributes":{"children":[{"id":"35246"},{"id":"35244"}]},"id":"35247","type":"Column"},{"attributes":{"toolbars":[{"id":"35147"},{"id":"35183"}],"tools":[{"id":"35137"},{"id":"35138"},{"id":"35139"},{"id":"35140"},{"id":"35141"},{"id":"35142"},{"id":"35143"},{"id":"35144"},{"id":"35173"},{"id":"35174"},{"id":"35175"},{"id":"35176"},{"id":"35177"},{"id":"35178"},{"id":"35179"},{"id":"35180"}]},"id":"35245","type":"ProxyToolbar"},{"attributes":{},"id":"35137","type":"ResetTool"},{"attributes":{"toolbar":{"id":"35245"},"toolbar_location":"above"},"id":"35246","type":"ToolbarBox"},{"attributes":{"end":1,"start":-0.05},"id":"35123","type":"DataRange1d"},{"attributes":{},"id":"35142","type":"UndoTool"},{"attributes":{"data_source":{"id":"35192"},"glyph":{"id":"35193"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35194"},"selection_glyph":null,"view":{"id":"35196"}},"id":"35195","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35233"},"ticker":{"id":"35166"}},"id":"35165","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"35159","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35235"},"ticker":{"id":"35170"}},"id":"35169","type":"LinearAxis"},{"attributes":{"below":[{"id":"35129"}],"center":[{"id":"35132"},{"id":"35136"}],"left":[{"id":"35133"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35195"},{"id":"35197"},{"id":"35198"},{"id":"35199"},{"id":"35202"}],"title":{"id":"35204"},"toolbar":{"id":"35147"},"toolbar_location":null,"x_range":{"id":"35121"},"x_scale":{"id":"35125"},"y_range":{"id":"35123"},"y_scale":{"id":"35127"}},"id":"35120","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35161","type":"LinearScale"},{"attributes":{},"id":"35163","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35193","type":"Circle"},{"attributes":{"callback":null},"id":"35180","type":"HoverTool"},{"attributes":{},"id":"35166","type":"BasicTicker"},{"attributes":{"axis":{"id":"35165"},"ticker":null},"id":"35168","type":"Grid"},{"attributes":{"below":[{"id":"35165"}],"center":[{"id":"35168"},{"id":"35172"}],"left":[{"id":"35169"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"35209"},{"id":"35211"},{"id":"35212"},{"id":"35213"},{"id":"35216"}],"title":{"id":"35218"},"toolbar":{"id":"35183"},"toolbar_location":null,"x_range":{"id":"35157"},"x_scale":{"id":"35161"},"y_range":{"id":"35159"},"y_scale":{"id":"35163"}},"id":"35156","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"35146"}},"id":"35141","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"35169"},"dimension":1,"ticker":null},"id":"35172","type":"Grid"},{"attributes":{},"id":"35170","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35194","type":"Circle"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35198","type":"Span"},{"attributes":{"axis":{"id":"35133"},"dimension":1,"ticker":null},"id":"35136","type":"Grid"},{"attributes":{},"id":"35233","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"35181"}},"id":"35175","type":"BoxZoomTool"},{"attributes":{},"id":"35174","type":"PanTool"},{"attributes":{},"id":"35173","type":"ResetTool"},{"attributes":{},"id":"35179","type":"SaveTool"},{"attributes":{},"id":"35221","type":"BasicTickFormatter"},{"attributes":{},"id":"35176","type":"WheelZoomTool"},{"attributes":{},"id":"35157","type":"DataRange1d"},{"attributes":{"overlay":{"id":"35182"}},"id":"35177","type":"LassoSelectTool"},{"attributes":{},"id":"35178","type":"UndoTool"},{"attributes":{},"id":"35138","type":"PanTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35223"},"ticker":{"id":"35134"}},"id":"35133","type":"LinearAxis"},{"attributes":{"overlay":{"id":"35145"}},"id":"35139","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35200","type":"Dash"},{"attributes":{},"id":"35130","type":"BasicTicker"},{"attributes":{},"id":"35235","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"35201"},"glyph":{"id":"35200"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35203"}},"id":"35202","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"35129"},"ticker":null},"id":"35132","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35228"},"selection_policy":{"id":"35227"}},"id":"35201","type":"ColumnDataSource"},{"attributes":{},"id":"35143","type":"SaveTool"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35197","type":"Span"},{"attributes":{},"id":"35223","type":"BasicTickFormatter"},{"attributes":{},"id":"35140","type":"WheelZoomTool"},{"attributes":{"text":"tau"},"id":"35204","type":"Title"},{"attributes":{},"id":"35134","type":"BasicTicker"},{"attributes":{"callback":null},"id":"35144","type":"HoverTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35199","type":"Span"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35137"},{"id":"35138"},{"id":"35139"},{"id":"35140"},{"id":"35141"},{"id":"35142"},{"id":"35143"},{"id":"35144"}]},"id":"35147","type":"Toolbar"},{"attributes":{"source":{"id":"35201"}},"id":"35203","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35211","type":"Span"},{"attributes":{"source":{"id":"35192"}},"id":"35196","type":"CDSView"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35221"},"ticker":{"id":"35130"}},"id":"35129","type":"LinearAxis"},{"attributes":{},"id":"35237","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35207","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35240"},"selection_policy":{"id":"35239"}},"id":"35215","type":"ColumnDataSource"},{"attributes":{},"id":"35238","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35181","type":"BoxAnnotation"},{"attributes":{"source":{"id":"35206"}},"id":"35210","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35214","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35212","type":"Span"},{"attributes":{},"id":"35225","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"35206"},"glyph":{"id":"35207"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35208"},"selection_glyph":null,"view":{"id":"35210"}},"id":"35209","type":"GlyphRenderer"},{"attributes":{},"id":"35226","type":"Selection"},{"attributes":{"data_source":{"id":"35215"},"glyph":{"id":"35214"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35217"}},"id":"35216","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35238"},"selection_policy":{"id":"35237"}},"id":"35206","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35213","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35182","type":"PolyAnnotation"},{"attributes":{},"id":"35121","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35208","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"35145","type":"BoxAnnotation"},{"attributes":{},"id":"35239","type":"UnionRenderers"},{"attributes":{},"id":"35240","type":"Selection"},{"attributes":{},"id":"35227","type":"UnionRenderers"},{"attributes":{},"id":"35228","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"35146","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"35120"},0,0],[{"id":"35156"},0,1]]},"id":"35244","type":"GridBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35173"},{"id":"35174"},{"id":"35175"},{"id":"35176"},{"id":"35177"},{"id":"35178"},{"id":"35179"},{"id":"35180"}]},"id":"35183","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35226"},"selection_policy":{"id":"35225"}},"id":"35192","type":"ColumnDataSource"},{"attributes":{},"id":"35125","type":"LinearScale"}],"root_ids":["35247"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"365b0b10-7234-4166-84eb-c291bf2182c7","root_ids":["35247"],"roots":{"35247":"c4fe86b0-dde9-4c4c-a49a-92ba24c1f635"}}];
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