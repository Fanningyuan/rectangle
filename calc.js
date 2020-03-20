
function rectangle() {
  return{
    'area': function(w,h) {
      return w*h;
    },

    'perimeter' : function(w,h) {
      return 2 * (w + h);
    }
  };
}

