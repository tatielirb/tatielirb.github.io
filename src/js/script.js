 $(window).on('resize.scrollMagic load.scrollMagic', function () {

    var addScrollMagic = function (_elementId, _triggerHook, _className, _debug) {
        if (!document.querySelectorAll(_elementId).length) {
          return false;
        }
        var elementId = _elementId;
        var triggerHook = _triggerHook;
        var className = _className || 'animation';

        var Controller = new ScrollMagic.Controller();
        var Scene = new ScrollMagic.Scene({
          triggerElement: elementId,
          triggerHook: triggerHook
        });
        if (_debug) {
          Scene.addIndicators();
        }
        Scene.on("start", function (e) {
          Controller.destroy();
          $(elementId).addClass(className);
        })
        .addTo(Controller);
    }

    
    

      $('#header').addClass('animation');

      addScrollMagic('#portfolio .box-title h2', 0.95, false);
      addScrollMagic('#portfolio .box-title .line', 0.95, false);
      addScrollMagic('#portfolio .box-title p', 0.95, false);
      // addScrollMagic('#portfolio .customers', 0.90, false);

      function portfolioCustomers (){
        var Controller = new ScrollMagic.Controller();
        var Scene = new ScrollMagic.Scene({
          triggerElement: '#portfolio',
          triggerHook: 0.90
        });

         Scene.on("start", function (e) {
          Controller.destroy();
          Controller.addTween('#portfolio',
            (new TimelineMax()).add(TweenMax.staggerFromTo('.customers', 0.4, { autoAlpha : 0, scale : 0 }, { autoAlpha : 1, scale : 1, ease : Power1.easeOut }, 0.2)), 0, 0, false
          );

        })
         .addTo(Controller);
      }
      


      addScrollMagic('#about .box-title h2', 0.95, false);
      addScrollMagic('#about .box-title .line', 0.95, false);
      addScrollMagic('#about .box-title p', 0.95, false);
      addScrollMagic('#about .descripition', 0.90, false);

      addScrollMagic('#skills-services .box-title h2', 0.95, false);
      addScrollMagic('#skills-services .box-title .line', 0.95, false);
      addScrollMagic('#skills-services .box-services-content .services', 0.90, false);
      addScrollMagic('#skills-services .skill .fill', 0.75, false);

      addScrollMagic('#experiences .box-title h2', 0.95, false);
      addScrollMagic('#experiences .box-title .line', 0.95, false);
      addScrollMagic('#experiences .card', 0.90, false);

      addScrollMagic('#education-history .box-title h2', 0.95, false);
      addScrollMagic('#education-history .box-title .line', 0.95, false);
      addScrollMagic('#education-history .card', 0.90, false);

      addScrollMagic('#contact .box-title h2', 0.95, false);
      addScrollMagic('#contact .box-title .line', 0.95, false);
      addScrollMagic('#contact .box-title p', 0.95, false);

      addScrollMagic('#ide', 0.95, false);

      portfolioCustomers();

      $(window).off('resize.scrollMagic load.scrollMagic');

      
  });