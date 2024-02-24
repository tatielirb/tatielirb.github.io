(function ($) {
  // Scroll to each link animated section.

  $("header .navbar-nav .nav-link").on("click", function (e) {
    e.preventDefault();
    const link = $(this).data("link");
    const offset = $("main #" + link).offset().top - 10;
    var array_easy = [
      "easeInOutExpo",
      "easeInOutQuad",
      "easeInOutCubic",
      "easeInOutQuint",
      "easeInOutExpo",
    ];
    var rand = array_easy[Math.floor(Math.random() * array_easy.length)];

    $("html, body").animate(
      {
        scrollTop: offset,
      },
      1000,
      rand
    );
  });

  $(window).on("scroll", function () {
    var $sections = $("main > section"),
      topDistance = $(window).scrollTop(),
      nextActive,
      $navItems = $(
        "header .navbar #navbarToggleExternalContent .navbar-nav .nav-item"
      ),
      current = $navItems.filter(".active").find(".nav-link").attr("data-link");

    $sections.each(function () {
      var $this = $(this),
        idName = $this.attr("id").split(" ")[0];
      if (
        $this.offset().top - 200 < topDistance &&
        topDistance - $this.offset().top < $this.outerHeight() * 0.7
      ) {
        nextActive = idName;
      }
    });

    if (nextActive) {
      if (nextActive != current) {
        $navItems.removeClass("active");
        $('[data-link="' + nextActive + '"]', $navItems)
          .parent()
          .addClass("active");
      }
    } else {
      $navItems.removeClass("active");
    }
  });

  $(".arrow").on("click", function () {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top - 50,
        },
        1000
      );
    return false;
  });

  $(".to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  // Get mobile/desktop classes to add to <html> element.
  $(window).on("load resize", function () {
    if ($(window).width() <= 992 - 15) {
      $("html").addClass("mobile");
      $("html").removeClass("desktop");
      if ($(window).width() >= 768 - 15) {
        $("html").addClass("tablet");
      } else {
        $("html").removeClass("tablet");
      }
    } else {
      $("html").addClass("desktop");
      $("html").removeClass("mobile");
      $("html").removeClass("tablet");
    }
  });

  // Collapse navbar if an internal item is clicked on mobile layout.
  $("header .nav-item .nav-link").on("click", function () {
    if ($("html").hasClass("mobile")) {
      $("#navbarToggleExternalContent").collapse("hide");
    }
  });

  $(".load-more").on("click", function () {
    $(".hide").addClass("hidden");
    $(".page2").addClass("hidden");
    $(".load-more").removeClass("hidden");
  });

  $(".hide").on("click", function () {
    $(".hide").removeClass("hidden");
    $(".page2").removeClass("hidden");
    $(".load-more").addClass("hidden");
  });
})(jQuery);

$(window).on("resize.scrollMagic load.scrollMagic", function () {
  var addScrollMagic = function (_elementId, _triggerHook, _className, _debug) {
    if (!document.querySelectorAll(_elementId).length) {
      return false;
    }
    var elementId = _elementId;
    var triggerHook = _triggerHook;
    var className = _className || "animation";

    var Controller = new ScrollMagic.Controller();
    var Scene = new ScrollMagic.Scene({
      triggerElement: elementId,
      triggerHook: triggerHook,
    });
    if (_debug) {
      Scene.addIndicators();
    }
    Scene.on("start", function (e) {
      Controller.destroy();
      $(elementId).addClass(className);
    }).addTo(Controller);
  };

  $("#header").addClass("animation");

  addScrollMagic("#portfolio .box-title h2", 0.95, false);
  addScrollMagic("#portfolio .box-title .line", 0.95, false);
  addScrollMagic("#portfolio .box-title p", 0.95, false);
  // addScrollMagic('#portfolio .customers', 0.90, false);

  function portfolioCustomers() {
    var Controller = new ScrollMagic.Controller();
    var Scene = new ScrollMagic.Scene({
      triggerElement: "#portfolio",
      triggerHook: 0.9,
    });

    Scene.on("start", function (e) {
      Controller.destroy();
      Controller.addTween(
        "#portfolio",
        new TimelineMax().add(
          TweenMax.staggerFromTo(
            ".customers",
            0.4,
            { autoAlpha: 0, scale: 0 },
            { autoAlpha: 1, scale: 1, ease: Power1.easeOut },
            0.2
          )
        ),
        0,
        0,
        false
      );
    }).addTo(Controller);
  }

  addScrollMagic("#about .box-title h2", 0.95, false);
  addScrollMagic("#about .box-title .line", 0.95, false);
  addScrollMagic("#about .box-title p", 0.95, false);
  addScrollMagic("#about .description", 0.9, false);

  addScrollMagic("#skills .box-title h2", 0.95, false);
  addScrollMagic("#skills .box-title .line", 0.95, false);
  addScrollMagic(
    "#skills .box-services-content .services",
    0.9,
    false
  );
  addScrollMagic("#skills .card", 0.9, false);

  addScrollMagic("#services .box-title h2", 0.95, false);
  addScrollMagic("#services .box-title .line", 0.95, false);
  addScrollMagic("#services .card", 0.9, false);
  addScrollMagic("#services .box-title p", 0.95, false);
  addScrollMagic(
    "#services .box-services-content .services",
    0.9,
    false
  );

  addScrollMagic("#contact .box-title h2", 0.95, false);
  addScrollMagic("#contact .box-title .line", 0.95, false);
  addScrollMagic("#contact .box-title p", 0.95, false);

  addScrollMagic("#ide", 0.95, false);

  portfolioCustomers();

  $(window).off("resize.scrollMagic load.scrollMagic");
});
