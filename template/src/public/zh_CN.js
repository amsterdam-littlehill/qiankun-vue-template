/* eslint-disable */
!(function (n, e) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = e() : typeof define === 'function' && define.amd ? define(e) : (n.__vee_validate_locale__zh_CN = n.__vee_validate_locale__zh_CN || {},
  n.__vee_validate_locale__zh_CN.js = e())
}
(this, function () {
  'use strict'
  var n, e = {
    name: 'zh_CN',
    messages: {
      after: function (n, e) {
        return ' ' + n + '必须在' + e[0] + '之后'
      },
      alpha_dash: function (n) {
        return ' ' + n + '能够包含字母数字字符，包括破折号、下划线'
      },
      alpha_num: function (n) {
        return n + '只能包含字母数字字符'
      },
      alpha_spaces: function (n) {
        return ' ' + n + ' 只能包含字母字符，包括空格.'
      },
      alpha: function (n) {
        return ' ' + n + ' 只能包含字母字符.'
      },
      before: function (n, e) {
        return ' ' + n + ' 必须在' + e[0] + ' 之前.'
      },
      between: function (n, e) {
        return ' ' + n + ' 必须在' + e[0] + ' ' + e[1] + '之间.'
      },
      confirmed: function (n, e) {
        return ' ' + n + ' 不能和' + e[0] + '匹配.'
      },
      date_between: function (n, e) {
        return ' ' + n + '必须在' + e[0] + '和' + e[1] + '之间.'
      },
      date_format: function (n, e) {
        return ' ' + n + '必须在在' + e[0] + '格式中.'
      },
      decimal: function (n, e) {
        void 0 === e && (e = [])
        var t = e[0]
        return void 0 === t && (t = '*'),
        ' ' + n + ' 必须是数字的而且能够保留' + (t === '*' ? '' : t) + ' 位小数.'
      },
      digits: function (n, e) {
        return ' ' + n + ' 必须是数字，且精确到 ' + e[0] + '数'
      },
      dimensions: function (n, e) {
        return ' ' + n + '必须是 ' + e[0] + ' 像素到 ' + e[1] + ' 像素.'
      },
      email: function (n) {
        return ' ' + n + ' 必须是有效的邮箱.'
      },
      ext: function (n) {
        return ' ' + n + ' 必须是有效的文件.'
      },
      image: function (n) {
        return ' ' + n + ' 必须是图片.'
      },
      included: function (n) {
        return ' ' + n + ' 必须是一个有效值.'
      },
      ip: function (n) {
        return ' ' + n + ' 必须是一个有效的地址.'
      },
      max: function (n, e) {
        return ' ' + n + '不能大于' + e[0] + '字符.'
      },
      max_value: function (n, e) {
        return ' ' + n + '必须小于或等于' + e[0]
      },
      mimes: function (n) {
        return ' ' + n + ' 必须是有效的文件类型.'
      },
      min: function (n, e) {
        return ' ' + n + '必须至少有' + e[0] + '字符'
      },
      min_value: function (n, e) {
        return ' ' + n + ' 必须大于或等于' + e[0] + '.'
      },
      excluded: function (n) {
        return ' ' + n + '必须是一个有效值.'
      },
      numeric: function (n) {
        return ' ' + n + ' 只能包含数字字符.'
      },
      regex: function (n) {
        return ' ' + n + ' 格式无效.'
      },
      required: function (n) {
        return ' 必填'
      },
      size: function (n, e) {
        var t, r, u, i = e[0]
        return ' ' + n + ' 必须小于 ' + (t = i, r = 1024, u = (t = Number(t) * r) == 0 ? 0 : Math.floor(Math.log(t) / Math.log(r)), 1 * (t / Math.pow(r, u)).toFixed(2) + ' ' + ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][u]) + '.'
      },
      url: function (n) {
        return ' ' + n + '不是有效的url.'
      }
    },
    attributes: {}
  }
  return typeof VeeValidate !== 'undefined' && VeeValidate.Validator.localize(((n = {})[e.name] = e, n)), e
}))
function formatMessgechzs (n) {
  return n.replace(/-\d+/g, '').replace(/\d+/g, '')
}
export default {
  messages: {
    after: function (n, e) {
      return ' ' + formatMessgechzs(n) + '必须在' + e[0] + '之后'
    },
    alpha_dash: function (n) {
      return ' ' + formatMessgechzs(n) + '能够包含字母数字字符，包括破折号、下划线'
    },
    alpha_num: function (n) {
      return formatMessgechzs(n) + '只能包含字母数字字符'
    },
    alpha_spaces: function (n) {
      return ' ' + formatMessgechzs(n) + ' 只能包含字母字符，包括空格.'
    },
    alpha: function (n) {
      return ' ' + formatMessgechzs(n) + ' 只能包含字母字符.'
    },
    before: function (n, e) {
      return ' ' + formatMessgechzs(n) + ' 必须在' + e[0] + ' 之前.'
    },
    between: function (n, e) {
      return ' ' + formatMessgechzs(n) + ' 必须在' + e[0] + ' ' + e[1] + '之间.'
    },
    confirmed: function (n, e) {
      return ' ' + formatMessgechzs(n) + ' 不能和' + e[0] + '匹配.'
    },
    date_between: function (n, e) {
      return ' ' + formatMessgechzs(n) + '必须在' + e[0] + '和' + e[1] + '之间.'
    },
    date_format: function (n, e) {
      return ' ' + formatMessgechzs(n) + '必须在在' + e[0] + '格式中.'
    },
    decimal: function (n, e) {
      void 0 === e && (e = [])
      var t = e[0]
      return void 0 === t && (t = '*'),
      ' ' + formatMessgechzs(n) + ' 必须是数字的而且能够保留' + (t === '*' ? '' : t) + ' 位小数.'
    },
    digits: function (n, e) {
      return ' ' + formatMessgechzs(n) + ' 必须是数字，且精确到 ' + e[0] + '数'
    },
    dimensions: function (n, e) {
      return ' ' + formatMessgechzs(n) + '必须是 ' + e[0] + ' 像素到 ' + e[1] + ' 像素.'
    },
    email: function (n) {
      return ' ' + formatMessgechzs(n) + ' 必须是有效的邮箱.'
    },
    ext: function (n) {
      return ' ' + formatMessgechzs(n) + ' 必须是有效的文件.'
    },
    image: function (n) {
      return ' ' + formatMessgechzs(n) + ' 必须是图片.'
    },
    included: function (n) {
      return ' ' + formatMessgechzs(n) + ' 必须是一个有效值.'
    },
    ip: function (n) {
      return ' ' + formatMessgechzs(n) + ' 必须是一个有效的地址.'
    },
    max: function (n, e) {
      return ' ' + formatMessgechzs(n) + '不能大于' + e[0] + '字符'
    },
    max_value: function (n, e) {
      return ' ' + formatMessgechzs(n) + ' 必须小于或等于' + e[0] + '.'
    },
    mimes: function (n) {
      return ' ' + formatMessgechzs(n) + ' 必须是有效的文件类型.'
    },
    min: function (n, e) {
      return ' ' + formatMessgechzs(n) + '必须至少有' + e[0] + '字符'
    },
    min_value: function (n, e) {
      return ' ' + formatMessgechzs(n) + ' 必须大于或等于' + e[0] + '.'
    },
    excluded: function (n) {
      return ' ' + formatMessgechzs(n) + '必须是一个有效值.'
    },
    numeric: function (n) {
      return ' ' + formatMessgechzs(n) + ' 只能包含数字字符.'
    },
    regex: function (n) {
      return ' ' + formatMessgechzs(n) + ' 格式无效.'
    },
    required: function (n) {
      return ' 必填'
    },
    size: function (n, e) {
      // eslint-disable-next-line one-var
      let t, r, u, i = e[0]
      // eslint-disable-next-line eqeqeq
      return ' ' + formatMessgechzs(n) + ' 必须小于 ' + (t = i, r = 1024, u = (t = Number(t) * r) == 0 ? 0 : Math.floor(Math.log(t) / Math.log(r)), 1 * (t / Math.pow(r, u)).toFixed(2) + ' ' + ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][u]) + '.'
    },
    url: function (n) {
      return ' ' + formatMessgechzs(n) + '不是有效的url.'
    }
  }
}
