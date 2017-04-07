$(function () {

    var timerInit = false;

    initTimer();

    function initTimer() {

        var timer = $('.js-sign-timer'),
            currentTime = new Date(),
            closingTime = new Date(currentTime),
            weekDay = currentTime.getDay(),
            remainingTime,
            START_HOUR = 8;

        if (weekDay === 0 || 6) {
            closingTime.setHours('21');
            closingTime.setMinutes('00');
            closingTime.setSeconds('00');
        } else {
            closingTime.setHours('19');
            closingTime.setMinutes('00');
            closingTime.setSeconds('00');
        }

        remainingTime = closingTime - currentTime;
        remainingTime /= 1000;

        if (remainingTime > 0 && !timerInit && (currentTime.getHours() >= START_HOUR)) {
            timerInit = true;

            timer.each(function () {
                var $this = $(this);

                $this
                    .show()
                    .siblings('.sign-timer__message')
                    .hide();
                $this.prev().show();
                $this.next().show();

                var clock = new FlipClock($this, remainingTime, {
                    countdown: true,
                    autoStart: true,
                    stop: function () {
                        $this.siblings('.sign-timer__message').fadeIn();
                        $this.prev().slideUp();
                        $this.next().slideUp();
                        $this.fadeOut();
                        timerInit = false;
                    }
                });
            });
        } else {
            var timerInterval = setTimeout(function () {
                initTimer();

                if (timerInit) {
                    clearInterval(timerInterval);
                }
            }, 1000);
        }

    }
});
