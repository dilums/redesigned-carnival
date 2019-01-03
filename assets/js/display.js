const colors = {'ORG': '#450264',
    'PERSON': '#403215',
    'WORK_OF_ART': '#436262',
    'LOC': '#562063',
    'FAC': '#402633',
    'PRODUCT': '#362350',
    'NORP': '#341114',
    'GPE': '#134525',
    'EVENT': '#350664'
};
function display_data(){
    // ___ Add Items ___
    data.forEach(word =>{
    var sprite = new THREE.TextSprite({
        textSize: .3,
        redrawInterval: 250,
        texture: {
            text: word.text,
            fontFamily: 'Arial, Helvetica, sans-serif',
        },
        material: {
            color: colors[word.ent],
        },
    });
    sprite.position
    .setX(word.x)
    .setY(word.y)
    .setZ(word.z);
    scene.add(sprite);
    });
    camera.position.set(0, 0, 100);
}
// ___ Render Loop ___
function render(){
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};