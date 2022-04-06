// 监控：性能，异常，数据
// 埋点：代码埋点
// https://juejin.cn/post/6844904130163507214#heading-6
// https://juejin.cn/post/6891080391642316808

if (location.hostname === 'localhost') {
  // return true;
} else {
  // 数据监控：收集用户信息
  (function () {
    let params = {};
    // document
    if (document) {
      params.domain = document.domain || ''; // 域名
      params.url = document.URL || ''; // 当前 URL 地址
      params.title = document.title || ''; // 当前页面标题
      params.referrer = document.referrer || ''; // 上一个访问页面 URL 地址
    }
    // window
    if (window && window.screen) {
      params.sh = window.screen.height || 0; // 屏幕高度
      params.sw = window.screen.width || 0; // 屏幕宽度
      params.cd = window.screen.colorDepth || 0; // 屏幕颜色深度
    }
    // navigator
    if (navigator) {
      params.lang = navigator.language || ''; // 语言
    }
    // 拼接参数
    let args = '';
    for (let i in params) {
      if (args !== '') {
        args += '&';
      }
      args += `${i}=${params[i]}`
    }
    // console.log('数据监控:', params)

    // 通过伪装成 Image 对象，传递给后端
    let img = new Image(1, 1);
    // let src = `/api/monitor/data.jpg?args=${encodeURIComponent(args)}`;
    let src = `/api/monitor/data.jpg?args=${(args)}`;
    img.src = src;
  })();

  //性能监控：拿到Performance并且初始化一些参数
  (function () {
    let timing = performance.timing,
      start = timing.navigationStart,
      dnsTime = 0,
      tcpTime = 0,
      firstPaintTime = 0,
      domRenderTime = 0,
      loadTime = 0;
    //根据提供的api和属性，拿到对应的时间
    dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
    tcpTime = timing.connectEnd - timing.connectStart;
    firstPaintTime = timing.responseStart - start;
    domRenderTime = timing.domContentLoadedEventEnd - start;
    loadTime = timing.loadEventEnd - start;
    let params = {};
    params.dnsTime = dnsTime;
    params.tcpTime = tcpTime;
    params.firstPaintTime = firstPaintTime;
    params.domRenderTime = domRenderTime;
    params.loadTime = loadTime;
    // 拼接参数
    let args = '';
    for (let i in params) {
      if (args !== '') {
        args += '&';
      }
      args += `${i}=${params[i]}`
    }

    // console.log("性能监控",
    //   '\nDNS解析时间:', dnsTime,
    //   '\nTCP建立时间:', tcpTime,
    //   '\n首屏时间:', firstPaintTime,
    //   '\ndom渲染完成时间:', domRenderTime,
    //   '\n页面onload时间:', loadTime
    // );
    // console.log("性能监控",params);

    // 通过伪装成 Image 对象，传递给后端
    let img = new Image(1, 1);
    // let src = `/api/monitor/performance.jpg?args=${encodeURIComponent(args)}`;
    let src = `/api/monitor/performance.jpg?args=${(args)}`;
    img.src = src;

  })();

  //  异常监控：报错，error事件上报
  (function () {
    function reportError(msg) {
      if (!msg) {
        return;
      }

      let params = {};
      params.href = location.href;
      params.content = msg;
      // 拼接参数
      let args = '';
      for (let i in params) {
        if (args !== '') {
          args += '&';
        }
        args += `${i}=${params[i]}`
      }
      // console.log("异常监控",params)
      (new Image()).src = "/api/monitor/error.jpg?args=" + args;
    }
    window.addEventListener('unhandledrejection', function (e) {
      // console.log('unhandledrejection', e);
      reportError('jsPageUnhandledrejection:' + JSON.stringify({ msg: e.reason.message || '', stack: e.reason.stack || '' }));
      e.preventDefault(); // 阻止控制台输入 console.error
    });
    window.addEventListener('rejectionhandled', function (e) {
      // console.log('rejectionhandled', e);
      reportError('jsPageRejectionhandled:' + JSON.stringify({ msg: e.reason.message || '', stack: e.reason.stack || '' }));
    });
    window.onerror = function (msg, url, line, col, error) {
      //没有URL不上报！上报也不知道错误
      if (msg != 'Script error.' && !url) {
        //return true;
      }
      //采用异步的方式
      //我遇到过在window.onunload进行ajax的堵塞上报
      //由于客户端强制关闭webview导致这次堵塞上报有Network Error
      //我猜测这里window.onerror的执行流在关闭前是必然执行的
      //而离开文章之后的上报对于业务来说是可丢失的
      //所以我把这里的执行流放到异步事件去执行
      //脚本的异常数降低了10倍
      setTimeout(function () {
        var data = {};
        //不一定所有浏览器都支持col参数
        col = col || (window.event && window.event.errorCharacter) || 0;

        data.url = url || '';
        data.line = line;
        data.col = col;
        if (!!error && !!error.stack) {
          //如果浏览器有堆栈信息
          //直接使用
          data.msg = error.stack.toString();
        } else if (!!arguments.callee) {
          //尝试通过callee拿堆栈信息
          var ext = [];
          var f = arguments.callee.caller,
            c = 3;
          //这里只拿三层堆栈信息
          while (f && --c > 0) {
            ext.push(f.toString());
            if (f === f.caller) {
              break; //如果有环
            }
            f = f.caller;
          }
          ext = ext.join(',');
          data.msg = error.stack.toString();
        }
        //把data上报到后台！
        // console.log('pageError', data);
        reportError('jsPageError:' + JSON.stringify(data));
      }, 0);

      return true;
    };
  })();
}
