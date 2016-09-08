define(function (require, exports, module) {

    exports.run = function () {
        /*   var $img = $('.img-js');
         setInterval(wxpay_roll, 2000);

         function wxpay_roll() {
         $.get($img.data('url'), function (response) {
         if (response) {
         window.location.href = $img.data('goto');
         }
         ;
         });
         }*/

        $(".section-wxpay").on('click', '.js-wxpay', function () {
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', jsApiCall);
                    document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
                }
            } else {
                jsApiCall();
            }
        });
        //调用微信JS api 支付
        function jsApiCall() {
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest',
                $("#jsApiParameters").data('value'),
                function (res) {
                    WeixinJSBridge.log(res.err_msg);
                    alert(res.err_code + res.err_desc + res.err_msg);
                }
            );
        }

    };
});