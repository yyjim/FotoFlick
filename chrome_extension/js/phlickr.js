var lastTime;
var touch;
var PAN_VELOCITY = 1500;

jQuery.calculateScale = function (size, overSize) {
    var size1Max = Math.max(size.width, size.height);
    var size2Max = Math.max(overSize.width, overSize.height);
    console.log(size1Max, size2Max);
    if (size2Max === 0) return NAN;
    return size1Max / size2Max;
}

function CGSize(width, height) {
    this.width = width;
    this.height = height;
}

function UITouch(prev, current) {
    this.prev = prev;
    this.current = current;
}

function spinAnimation(obj) {
    var element = $(obj);
    var size = new CGSize(element.width(), element.height());
    var overSize = new CGSize(40, 40);
    var scale = jQuery.calculateScale(size, overSize);
    console.log('scale:' + scale);
    element.transition({
        rotate: '180deg',
        left: '200px',
        top: '-200px',
        scale: 1 / scale,
        opacity: 0
    }, 200, 'linear', function () {
        console.log('finish');
        this.css({
            '-webkit-transform': 'rotate(0deg)'
        });
        moveToQueue(this);
    });
}

function velocity(offset1, offset2, t) {
    console.debug('t:' + t);
    console.debug('left distance:' + (offset1.left - offset2.left));
    console.debug('top distance:' + (offset1.top - offset2.top));
    return Math.max(Math.abs(offset1.left - offset2.left) / t,
    Math.abs(offset1.top - offset2.top) / t);
}

function moveToQueue(obj) {
    $(obj).appendTo($('#photo_queue'));
}

$(function () {
    $("img").draggable({
        start: function (event, ui) {
            console.debug(event);
            console.debug('start:' + ui.offset.left);
            lastOffset = ui.offset;
            lastTime = new Date().getTime() / 1000;
            touch = new UITouch();
        },
        stop: function (event, ui) {
            console.debug(event);
            console.debug('end:' + ui.offset.left);

            var currentTime = new Date().getTime() / 1000;
            var timeInterval = currentTime - lastTime;
            var v2 = velocity(touch.prev, touch.current, timeInterval);
            if (v2 > PAN_VELOCITY) {
                spinAnimation(event.target);
            } else {
                $(event.target).css({top : '', left: ''});
            }
            console.debug('velocity2 is:' + v2);
            console.debug('time interval is:' + timeInterval);
        },
        drag: function (event, ui) {
            console.debug('move to:' + ui.offset.left);
            console.debug('lastOffset:' + lastOffset.left);
            touch.prev = touch.current;
            touch.current = ui.offset;
            lastTime = new Date().getTime() / 1000;
        }
    });
});