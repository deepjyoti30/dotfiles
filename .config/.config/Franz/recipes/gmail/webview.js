'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    // Each test is done in order of least accurate (but most robust)
    // -> most accurate (but least robust)
    // for reliability of at least getting a result

    // 3rd best test (basic, less accurate but OK if nothing else works)
    if (document.getElementsByClassName('zA zE').length > 0) {
      count = document.getElementsByClassName('zA zE').length;
    }

    if (document.getElementsByClassName('J-Ke n0').length > 0) {
      // 2nd best (more detailed check, much more accurate if available)
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('aria-label').replace(/[^0-9.]/g, ''), 10);
      }

      // 1st best
      if (document.getElementsByClassName('J-Ke n0')[0].getAttribute('title') != null) {
        count = parseInt(document.getElementsByClassName('J-Ke n0')[0].getAttribute('title').replace(/[^0-9.]/g, ''), 10);
      }
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdtYWlsL3dlYnZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56IiwiZ2V0TWVzc2FnZXMiLCJjb3VudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsInBhcnNlSW50IiwicmVwbGFjZSIsImlzTmFOIiwic2V0QmFkZ2UiLCJsb29wIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWtCQyxLQUFELElBQVc7QUFDMUIsUUFBTUMsY0FBYyxTQUFTQSxXQUFULEdBQXVCO0FBQ3pDLFFBQUlDLFFBQVEsQ0FBWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFJQyxTQUFTQyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5Q0MsTUFBekMsR0FBa0QsQ0FBdEQsRUFBeUQ7QUFDdkRILGNBQVFDLFNBQVNDLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDQyxNQUFqRDtBQUNEOztBQUVELFFBQUlGLFNBQVNDLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDQyxNQUEzQyxHQUFvRCxDQUF4RCxFQUEyRDtBQUN6RDtBQUNBLFVBQUlGLFNBQVNDLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLEVBQThDRSxZQUE5QyxDQUEyRCxZQUEzRCxLQUE0RSxJQUFoRixFQUFzRjtBQUNwRkosZ0JBQVFLLFNBQVNKLFNBQVNDLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLEVBQThDRSxZQUE5QyxDQUEyRCxZQUEzRCxFQUF5RUUsT0FBekUsQ0FBaUYsVUFBakYsRUFBNkYsRUFBN0YsQ0FBVCxFQUEyRyxFQUEzRyxDQUFSO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJTCxTQUFTQyxzQkFBVCxDQUFnQyxTQUFoQyxFQUEyQyxDQUEzQyxFQUE4Q0UsWUFBOUMsQ0FBMkQsT0FBM0QsS0FBdUUsSUFBM0UsRUFBaUY7QUFDL0VKLGdCQUFRSyxTQUFTSixTQUFTQyxzQkFBVCxDQUFnQyxTQUFoQyxFQUEyQyxDQUEzQyxFQUE4Q0UsWUFBOUMsQ0FBMkQsT0FBM0QsRUFBb0VFLE9BQXBFLENBQTRFLFVBQTVFLEVBQXdGLEVBQXhGLENBQVQsRUFBc0csRUFBdEcsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxRQUFJQyxNQUFNUCxLQUFOLENBQUosRUFBa0I7QUFDaEJBLGNBQVEsQ0FBUjtBQUNEOztBQUVEO0FBQ0FGLFVBQU1VLFFBQU4sQ0FBZVIsS0FBZjtBQUNELEdBL0JEOztBQWlDQTtBQUNBRixRQUFNVyxJQUFOLENBQVdWLFdBQVg7QUFDRCxDQXBDRCIsImZpbGUiOiJnbWFpbC93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgLy8gRWFjaCB0ZXN0IGlzIGRvbmUgaW4gb3JkZXIgb2YgbGVhc3QgYWNjdXJhdGUgKGJ1dCBtb3N0IHJvYnVzdClcbiAgICAvLyAtPiBtb3N0IGFjY3VyYXRlIChidXQgbGVhc3Qgcm9idXN0KVxuICAgIC8vIGZvciByZWxpYWJpbGl0eSBvZiBhdCBsZWFzdCBnZXR0aW5nIGEgcmVzdWx0XG5cbiAgICAvLyAzcmQgYmVzdCB0ZXN0IChiYXNpYywgbGVzcyBhY2N1cmF0ZSBidXQgT0sgaWYgbm90aGluZyBlbHNlIHdvcmtzKVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6QSB6RScpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnekEgekUnKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0otS2UgbjAnKS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyAybmQgYmVzdCAobW9yZSBkZXRhaWxlZCBjaGVjaywgbXVjaCBtb3JlIGFjY3VyYXRlIGlmIGF2YWlsYWJsZSlcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdKLUtlIG4wJylbMF0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgIT0gbnVsbCkge1xuICAgICAgICBjb3VudCA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0otS2UgbjAnKVswXS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKS5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyAxc3QgYmVzdFxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0otS2UgbjAnKVswXS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgIT0gbnVsbCkge1xuICAgICAgICBjb3VudCA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0otS2UgbjAnKVswXS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykucmVwbGFjZSgvW14wLTkuXS9nLCAnJyksIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBKdXN0IGluY2FzZSB3ZSBkb24ndCBlbmQgdXAgd2l0aCBhIG51bWJlciwgc2V0IGl0IGJhY2sgdG8gemVybyAocGFyc2VJbnQgY2FuIHJldHVybiBOYU4pXG4gICAgaWYgKGlzTmFOKGNvdW50KSkge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cblxuICAgIC8vIHNldCBGcmFueiBiYWRnZVxuICAgIEZyYW56LnNldEJhZGdlKGNvdW50KTtcbiAgfTtcblxuICAvLyBjaGVjayBmb3IgbmV3IG1lc3NhZ2VzIGV2ZXJ5IHNlY29uZCBhbmQgdXBkYXRlIEZyYW56IGJhZGdlXG4gIEZyYW56Lmxvb3AoZ2V0TWVzc2FnZXMpO1xufTtcbiJdfQ==