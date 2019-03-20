export default {
  assert (condition, msg) {
    if (!condition) {
      throw new Error(`[GIS] ${msg}`);
    }
  },
  mixin (source, target) {
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  },
  uuid (len = 32, radix = 16) {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
      ""
    );
    let uuid = [],
      i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join("");
  },
  meter2degree (meter) {
    return meter * 0.001 * 0.0089932202929999989
  },
  degree2meter(degree) {
    return degree * 1000 / 0.0089932202929999989
  },
  convertTableArr2objects (table) {
    if (!table) {
      return null;
    }
    var ret = [];
    for (let i = 0; i < table.length; i++) {
      let r= this.convertTable2objects(table[i])
      ret = ret.concat(r||[]);
    }
    return ret;
  },
  convertTable2objects (table) {
    if (!table) {
      return null;
    }
    var ret = [];
    for (let i = 0; i < table.Values.length; i++) {
      const element = table.Values[i];
      var item = this.convertRow2object(table, i);
      ret.push(item);
    }
    return ret;
  },
  convertRow2object (table, i) {
    var property = {};
    for (var j = 0; j < table.Columns.length; j++) {
      var val = table.Values[i][j];
      if (table.ColumnsType[j] == "number" || table.ColumnsType[j] == "double") {
        if (val == "") {
          val = 0;
        } else {
          val = parseFloat(val);
        }
      } else if (table.ColumnsType[j] == "date") {
        if (val != "") {
          val = new Date(val);
        }
      }
      property[table.Columns[j]] = val;
    }
    return property;
  },
  extendTable (tab) {
    /*
    * 将WCFtable转换为object
    */
    tab.objects = [];
    for (var i = 0; i < tab.Values.length; i++) {
      var vals = tab.Values[i];
      var row = {};
      for (var j = 0; j < tab.Columns.length; j++) {
        var col = tab.Columns[j];
        row[col] = vals[j];
        if (tab.ColumnsType[j] == "DateTime") {
          var dt = new Date(vals[j]);
          row[col + "_tm"] = dt;
        }
      }
      tab.objects.push(row);
    }
    return tab;
  },
  Queue () {
    var items = [];
    this.enqueue = function (element) {
      items.push(element);
    };
    this.dequeue = function () {
      return items.shift();
    };
    this.front = function () {
      return items[0];
    };
    this.isEmpty = function () {
      return items.length == 0;
    };
    this.clear = function () {
      items = [];
    };
    this.size = function () {
      return items.length;
    };
    this.print = function () {
      console.log(items.toString());
    };
  },
  checkPPP(point, vs) {
    var x = point.x, y = point.y;   
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i].x, yi = vs[i].y;
        var xj = vs[j].x, yj = vs[j].y;       
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
  },
  trim(str){
    return (''+str).replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "")
  }
};
