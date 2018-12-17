'use strict';

module.exports = function(Abs) {

  //remoteMethod 추가하기
  Abs.status = callback => {
    const date = new Date();
    const currentHour = date.getHours();
    const OPEN_HOUR = 6;
    const CLOSE_HOUR = 20;
    console.log('Current hour is %d', currentHour);
    let response;
    if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    //callback 해줘야 요청 종료함
    callback(null, response);
  };

  //remoteMethod 정의하기
  Abs.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );
};
