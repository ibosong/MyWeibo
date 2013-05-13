

function copyMsgfunction(msgId) {
    $.Zebra_Dialog('转发微博<br/>', {
        'modal': true,
        'type': false,
        'width': 600,
        'buttons': ['发送','取消'],
        'onClose': function (caption) {
            
            if (caption == '发送')
            {
                alert($(".copyMsg").val());
                alert($("#copyMsgId").val());
                $.get("/Weibo/PostMessage",
                    {
                        "content": $(".copyMsg").val(),
                        "copyMsgId": $("#copyMsgId").val()
                    },
                    function (data) {
                        
                        $.Zebra_Dialog(data.message, {
                            'buttons': false,
                            'modal': true,
                            'width': 200,
                            'type': false,
                            'auto_close': 700
                        });
                    }
                    );
            }
            
        },
        'source': {
            'ajax': {
                'url': '/Weibo/CopyMessagePartial',
                'data': { msgId: msgId },
                'complete': function (data) {
                    
                    $('#copyMsgDialog').html(data);
                }




            }
        }

    });

}