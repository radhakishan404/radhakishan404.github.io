$(document).ready(function () {
    $('body').addClass('page-ready');
    $('body').removeClass('no-js');
})

$('.js-menu-trigger').click(function (e) {
    e.preventDefault();
    if ($('body').hasClass('menu-is-active')) {
        $('body').removeClass('menu-is-active');
    } else {
        $('body').addClass('menu-is-active');
    }
});

$(".header__nav-btn").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("nav--open");
    $(".header__nav-btn").toggleClass("header__nav-btn--active");
    $(".header-nav").toggleClass("header-nav-open");
});

var checkDiv = setInterval(() => {
    if ($('body').hasClass("page-ready")) {
        (function () {
            "use strict";
            /* 	'To actually be able to display anything with Three.js, we need three things:
                  A scene, a camera, and a renderer so we can render the scene with the camera.' 
                         
                         - https://threejs.org/docs/#Manual/Introduction/Creating_a_scene 		*/

            var scene, camera, renderer;

            /* We need this stuff too */
            var container,
                aspectRatio,
                HEIGHT,
                WIDTH,
                fieldOfView,
                nearPlane,
                farPlane,
                mouseX,
                mouseY,
                windowHalfX,
                windowHalfY,
                stats,
                geometry,
                starStuff,
                materialOptions,
                stars;

            init();
            animate();

            function init() {
                container = document.createElement("div");
                $("#home-detail").find(".content__main").append(container);
                document.body.style.overflow = "hidden";

                HEIGHT = window.innerHeight;
                WIDTH = window.innerWidth;
                aspectRatio = WIDTH / HEIGHT;
                fieldOfView = 75;
                nearPlane = 1;
                farPlane = 1000;
                mouseX = 0;
                mouseY = 0;

                windowHalfX = WIDTH / 2;
                windowHalfY = HEIGHT / 2;

                /* 	fieldOfView — Camera frustum vertical field of view.
                        aspectRatio — Camera frustum aspect ratio.
                        nearPlane — Camera frustum near plane.
                        farPlane — Camera frustum far plane.	
            
                        - https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera
            
                         In geometry, a frustum (plural: frusta or frustums) 
                         is the portion of a solid (normally a cone or pyramid) 
                         that lies between two parallel planes cutting it. - wikipedia.		*/

                camera = new THREE.PerspectiveCamera(
                    fieldOfView,
                    aspectRatio,
                    nearPlane,
                    farPlane
                );

                //Z positioning of camera

                camera.position.z = farPlane / 2;

                scene = new THREE.Scene({ antialias: true });
                scene.fog = new THREE.FogExp2(0x000000, 0.0003);

                // The wizard's about to get busy.
                starForge();

                //check for browser Support
                if (webGLSupport()) {
                    //yeah?  Right on...
                    renderer = new THREE.WebGLRenderer({ alpha: true });
                } else {
                    //No?  Well that's okay.
                    renderer = new THREE.CanvasRenderer();
                }

                renderer.setClearColor(0x000011, 1);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(WIDTH, HEIGHT);
                container.appendChild(renderer.domElement);

                stats = new Stats();
                stats.domElement.style.position = "absolute";
                stats.domElement.style.top = "0px";
                stats.domElement.style.right = "0px";
                container.appendChild(stats.domElement);

                window.addEventListener("resize", onWindowResize, false);
                document.addEventListener("mousemove", onMouseMove, false);
            }

            function animate() {
                requestAnimationFrame(animate);
                render();
                stats.update();
            }

            function render() {
                camera.position.x += (mouseX - camera.position.x) * 0.005;
                camera.position.y += (-mouseY - camera.position.y) * 0.005;
                camera.lookAt(scene.position);
                renderer.render(scene, camera);
            }

            function webGLSupport() {
                /* 	The wizard of webGL only bestows his gifts of power
                        to the worthy.  In this case, users with browsers who 'get it'.		*/

                try {
                    var canvas = document.createElement("canvas");
                    return !!(
                        window.WebGLRenderingContext &&
                        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
                    );
                } catch (e) {
                    // console.warn('Hey bro, for some reason we\'re not able to use webGL for this.  No biggie, we\'ll use canvas.');
                    return false;
                }
            }

            function onWindowResize() {
                // Everything should resize nicely if it needs to!
                var WIDTH = window.innerWidth,
                    HEIGHT = window.innerHeight;

                camera.aspect = aspectRatio;
                camera.updateProjectionMatrix();
                renderer.setSize(WIDTH, HEIGHT);
            }

            function starForge() {
                /* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
                        are you really surprised at this point? 
                                                                */
                var starQty = 45000;
                geometry = new THREE.SphereGeometry(1000, 100, 50);

                materialOptions = {
                    size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
                    transparency: true,
                    opacity: 0.7
                };

                starStuff = new THREE.PointCloudMaterial(materialOptions);

                // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

                for (var i = 0; i < starQty; i++) {
                    var starVertex = new THREE.Vector3();
                    starVertex.x = Math.random() * 2000 - 1000;
                    starVertex.y = Math.random() * 2000 - 1000;
                    starVertex.z = Math.random() * 2000 - 1000;

                    geometry.vertices.push(starVertex);
                }

                stars = new THREE.PointCloud(geometry, starStuff);
                scene.add(stars);
            }

            function onMouseMove(e) {
                mouseX = e.clientX - windowHalfX;
                mouseY = e.clientY - windowHalfY;
            }
        })();

        $(document).ready(function () {
            var length = $(".word-spinner-item").length;
            let current = 5;

            setInterval(() => {
                let element = $(".word-spinner-inner");
                element.css("transform", "translateY(-" + 100 * current / length + "%)");

                if (current == 5) {
                    current = 0;
                } else {
                    current++;
                }
            }, 1500);
        })

        var canvas = document.querySelector("#scene"),
            ctx = canvas.getContext("2d"),
            particles = [],
            amount = 0,
            mouse = { x: 0, y: 0 },
            radius = 1;

        var colors = ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"];

        var copy = "R";
        var ww = canvas.width = "200px";
        var wh = canvas.height = "200px";

        function Particle(x, y) {
            this.x = Math.random() * ww;
            this.y = Math.random() * wh;
            this.dest = {
                x: x,
                y: y
            };
            this.r = Math.random() * 5 + 2;
            this.vx = (Math.random() - 0.5) * 20;
            this.vy = (Math.random() - 0.5) * 20;
            this.accX = 0;
            this.accY = 0;
            this.friction = Math.random() * 0.05 + 0.94;

            this.color = colors[Math.floor(Math.random() * 6)];
        }

        Particle.prototype.render = function () {


            this.accX = (this.dest.x - this.x) / 200;
            this.accY = (this.dest.y - this.y) / 200;
            this.vx += this.accX;
            this.vy += this.accY;
            this.vx *= this.friction;
            this.vy *= this.friction;

            this.x += this.vx;
            this.y += this.vy;

            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
            ctx.fill();

            var a = this.x - mouse.x;
            var b = this.y - mouse.y;

            var distance = Math.sqrt(a * a + b * b);
            if (distance < (radius * 70)) {
                this.accX = (this.x - mouse.x) / 100;
                this.accY = (this.y - mouse.y) / 100;
                this.vx += this.accX;
                this.vy += this.accY;
            }

        }

        function onMouseMove(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        function onTouchMove(e) {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        }

        function onTouchEnd(e) {
            mouse.x = -9999;
            mouse.y = -9999;
        }

        function initScene() {
            ww = canvas.width = window.innerWidth;
            wh = canvas.height = window.innerHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.font = "bold " + (ww / 3) + "px Nova Cut, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("R", ww / 1.4, wh / 1.4);

            var data = ctx.getImageData(0, 0, ww, wh).data;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "screen";

            particles = [];
            for (var i = 0; i < ww; i += Math.round(ww / 250)) {
                for (var j = 0; j < wh; j += Math.round(ww / 250)) {
                    if (data[((i + j * ww) * 4) + 3] > 250) {
                        particles.push(new Particle(i, j));
                    }
                }
            }
            amount = particles.length;

        }

        function onMouseClick() {
            radius++;
            if (radius === 5) {
                radius = 0;
            }
        }

        function render(a) {
            requestAnimationFrame(render);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < amount; i++) {
                particles[i].render();
            }
        };

        window.addEventListener("resize", initScene);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
        window.addEventListener("click", onMouseClick);
        window.addEventListener("touchend", onTouchEnd);
        initScene();
        requestAnimationFrame(render);

        clearInterval(checkDiv);

    }

}, 100);