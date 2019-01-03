let width, ratio, height;
let scene, renderer, camera, controls;
let data;
$(document).ready(()=>{
    init();
    render();
});

function init(){
    width = $('main').width();
    ratio = window.innerHeight / window.innerWidth;
    height = width * ratio * 0.9;
    // ___ Init Scene ___
    scene = new THREE.Scene();
    // ___ Set Camera ___
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    // ___ Init Renderer ___
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setClearColor("#000");
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.gammaOutput = true;
    $('main').append(renderer.domElement);
    // ___ Add Controls ___
    window.addEventListener('resize', onWindowResize, false);
    load_data();
}
function onWindowResize() {
    width = $('main').width();
    ratio = window.innerHeight / window.innerWidth;
    height = width * ratio * 0.9;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    render();
}

$(document).keydown( function(e) {
    if (e.keyCode == 37) { 
        camera.position.x -= 1;
    }
    if (e.keyCode == 38) { 
        camera.position.y += 1;
    }
    if (e.keyCode == 39) { 
        camera.position.x += 1;
    }
    if (e.keyCode == 40) { 
        camera.position.y -= 1;
    }

});

$(document).on('mousewheel', function(event) {
    if(event.deltaY == -1){
        camera.position.z += 1;
    }
    if(event.deltaY == 1){
        camera.position.z -= 1;
    }
});