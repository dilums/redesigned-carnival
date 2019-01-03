function load_data(){
    $.getJSON("/viz-text/assets/data/test.json", json =>{
        data = json;
        display_data();
    });
}
