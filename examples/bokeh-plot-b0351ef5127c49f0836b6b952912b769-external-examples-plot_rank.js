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
    
      
      
    
      var element = document.getElementById("da22ed6c-6e23-410c-b7f0-5dcccbb6e7ff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'da22ed6c-6e23-410c-b7f0-5dcccbb6e7ff' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1c915d9a-118e-4524-8a86-9812d765ece2":{"roots":{"references":[{"attributes":{"children":[{"id":"40125"},{"id":"40123"}]},"id":"40126","type":"Column"},{"attributes":{"callback":null},"id":"39991","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40098"},"selection_policy":{"id":"40097"}},"id":"40037","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"40037"},"glyph":{"id":"40038"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40039"},"selection_glyph":null,"view":{"id":"40041"}},"id":"40040","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40039","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40045","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40048","type":"Span"},{"attributes":{},"id":"40096","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"39980"},"dimension":1,"ticker":null},"id":"39983","type":"Grid"},{"attributes":{},"id":"39974","type":"LinearScale"},{"attributes":{"source":{"id":"40037"}},"id":"40041","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39993","type":"PolyAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40100"},"selection_policy":{"id":"40099"}},"id":"40043","type":"ColumnDataSource"},{"attributes":{"text":"tau"},"id":"40063","type":"Title"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40044","type":"VBar"},{"attributes":{"source":{"id":"40043"}},"id":"40047","type":"CDSView"},{"attributes":{"axis":{"id":"40010"},"ticker":null},"id":"40013","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40051","type":"VBar"},{"attributes":{"callback":null},"id":"40025","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40054","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40111"},"ticker":{"id":"40089"}},"id":"40014","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40050","type":"VBar"},{"attributes":{},"id":"39987","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"40043"},"glyph":{"id":"40044"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40045"},"selection_glyph":null,"view":{"id":"40047"}},"id":"40046","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40109"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"40011"}},"id":"40010","type":"LinearAxis"},{"attributes":{},"id":"40097","type":"UnionRenderers"},{"attributes":{},"id":"40011","type":"BasicTicker"},{"attributes":{},"id":"40098","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40102"},"selection_policy":{"id":"40101"}},"id":"40049","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40049"}},"id":"40053","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40057","type":"VBar"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40060","type":"Span"},{"attributes":{"axis":{"id":"40014"},"dimension":1,"ticker":null},"id":"40017","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40056","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39992","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"40049"},"glyph":{"id":"40050"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40051"},"selection_glyph":null,"view":{"id":"40053"}},"id":"40052","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40038","type":"VBar"},{"attributes":{},"id":"39977","type":"BasicTicker"},{"attributes":{"overlay":{"id":"40026"}},"id":"40020","type":"BoxZoomTool"},{"attributes":{},"id":"40019","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40104"},"selection_policy":{"id":"40103"}},"id":"40055","type":"ColumnDataSource"},{"attributes":{},"id":"40018","type":"ResetTool"},{"attributes":{"source":{"id":"40055"}},"id":"40059","type":"CDSView"},{"attributes":{},"id":"40109","type":"BasicTickFormatter"},{"attributes":{},"id":"40024","type":"SaveTool"},{"attributes":{},"id":"40021","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"40065"},"glyph":{"id":"40066"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40067"},"selection_glyph":null,"view":{"id":"40069"}},"id":"40068","type":"GlyphRenderer"},{"attributes":{},"id":"40006","type":"LinearScale"},{"attributes":{"overlay":{"id":"40027"}},"id":"40022","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40067","type":"VBar"},{"attributes":{},"id":"40099","type":"UnionRenderers"},{"attributes":{},"id":"40023","type":"UndoTool"},{"attributes":{"data_source":{"id":"40055"},"glyph":{"id":"40056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40057"},"selection_glyph":null,"view":{"id":"40059"}},"id":"40058","type":"GlyphRenderer"},{"attributes":{},"id":"40100","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40113"},"selection_policy":{"id":"40112"}},"id":"40065","type":"ColumnDataSource"},{"attributes":{},"id":"40008","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40070","type":"Span"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40088","type":"Span"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40066","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40073","type":"VBar"},{"attributes":{"toolbar":{"id":"40124"},"toolbar_location":"above"},"id":"40125","type":"ToolbarBox"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40076","type":"Span"},{"attributes":{"overlay":{"id":"39993"}},"id":"39988","type":"LassoSelectTool"},{"attributes":{"source":{"id":"40065"}},"id":"40069","type":"CDSView"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40096"},"ticker":{"id":"40061"}},"id":"39980","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40115"},"selection_policy":{"id":"40114"}},"id":"40071","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"40089","type":"FixedTicker"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40072","type":"VBar"},{"attributes":{"source":{"id":"40083"}},"id":"40087","type":"CDSView"},{"attributes":{},"id":"40101","type":"UnionRenderers"},{"attributes":{"text":"mu"},"id":"40091","type":"Title"},{"attributes":{},"id":"40102","type":"Selection"},{"attributes":{"toolbars":[{"id":"39994"},{"id":"40028"}],"tools":[{"id":"39984"},{"id":"39985"},{"id":"39986"},{"id":"39987"},{"id":"39988"},{"id":"39989"},{"id":"39990"},{"id":"39991"},{"id":"40018"},{"id":"40019"},{"id":"40020"},{"id":"40021"},{"id":"40022"},{"id":"40023"},{"id":"40024"},{"id":"40025"}]},"id":"40124","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"40083"},"glyph":{"id":"40084"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40085"},"selection_glyph":null,"view":{"id":"40087"}},"id":"40086","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40071"}},"id":"40075","type":"CDSView"},{"attributes":{},"id":"40111","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"40026","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40079","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40082","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40078","type":"VBar"},{"attributes":{},"id":"39985","type":"PanTool"},{"attributes":{"data_source":{"id":"40071"},"glyph":{"id":"40072"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40073"},"selection_glyph":null,"view":{"id":"40075"}},"id":"40074","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"39992"}},"id":"39986","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40117"},"selection_policy":{"id":"40116"}},"id":"40077","type":"ColumnDataSource"},{"attributes":{},"id":"40112","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"40027","type":"PolyAnnotation"},{"attributes":{"source":{"id":"40077"}},"id":"40081","type":"CDSView"},{"attributes":{},"id":"40113","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40085","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39984"},{"id":"39985"},{"id":"39986"},{"id":"39987"},{"id":"39988"},{"id":"39989"},{"id":"39990"},{"id":"39991"}]},"id":"39994","type":"Toolbar"},{"attributes":{},"id":"39984","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40042","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40084","type":"VBar"},{"attributes":{},"id":"40103","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"40077"},"glyph":{"id":"40078"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40079"},"selection_glyph":null,"view":{"id":"40081"}},"id":"40080","type":"GlyphRenderer"},{"attributes":{},"id":"40104","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40119"},"selection_policy":{"id":"40118"}},"id":"40083","type":"ColumnDataSource"},{"attributes":{},"id":"40119","type":"Selection"},{"attributes":{},"id":"40118","type":"UnionRenderers"},{"attributes":{},"id":"39990","type":"SaveTool"},{"attributes":{},"id":"39968","type":"DataRange1d"},{"attributes":{},"id":"40114","type":"UnionRenderers"},{"attributes":{},"id":"40115","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"40018"},{"id":"40019"},{"id":"40020"},{"id":"40021"},{"id":"40022"},{"id":"40023"},{"id":"40024"},{"id":"40025"}]},"id":"40028","type":"Toolbar"},{"attributes":{},"id":"39972","type":"LinearScale"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40094"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39977"}},"id":"39976","type":"LinearAxis"},{"attributes":{"below":[{"id":"40010"}],"center":[{"id":"40013"},{"id":"40017"},{"id":"40070"},{"id":"40076"},{"id":"40082"},{"id":"40088"}],"left":[{"id":"40014"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"40068"},{"id":"40074"},{"id":"40080"},{"id":"40086"}],"title":{"id":"40091"},"toolbar":{"id":"40028"},"toolbar_location":null,"x_range":{"id":"39968"},"x_scale":{"id":"40006"},"y_range":{"id":"39970"},"y_scale":{"id":"40008"}},"id":"40003","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"39976"},"ticker":null},"id":"39979","type":"Grid"},{"attributes":{"children":[[{"id":"39967"},0,0],[{"id":"40003"},0,1]]},"id":"40123","type":"GridBox"},{"attributes":{},"id":"40094","type":"BasicTickFormatter"},{"attributes":{},"id":"39970","type":"DataRange1d"},{"attributes":{},"id":"39989","type":"UndoTool"},{"attributes":{},"id":"40116","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"40061","type":"FixedTicker"},{"attributes":{},"id":"40117","type":"Selection"},{"attributes":{"below":[{"id":"39976"}],"center":[{"id":"39979"},{"id":"39983"},{"id":"40042"},{"id":"40048"},{"id":"40054"},{"id":"40060"}],"left":[{"id":"39980"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"40040"},{"id":"40046"},{"id":"40052"},{"id":"40058"}],"title":{"id":"40063"},"toolbar":{"id":"39994"},"toolbar_location":null,"x_range":{"id":"39968"},"x_scale":{"id":"39972"},"y_range":{"id":"39970"},"y_scale":{"id":"39974"}},"id":"39967","subtype":"Figure","type":"Plot"}],"root_ids":["40126"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1c915d9a-118e-4524-8a86-9812d765ece2","root_ids":["40126"],"roots":{"40126":"da22ed6c-6e23-410c-b7f0-5dcccbb6e7ff"}}];
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