var Floor = function() {
    var container;
    var bitmap = new createjs.Bitmap("img/floor.png");
    bitmap.tickEnabled = false;

    this.init = function() {
        container = new createjs.Container();

        this.resize();
        container.addChild(bitmap);

        stage.addChild(container);
    };

    this.resize = function() {
        bitmap.x = transform.provide.minx;

        var scale = transform.provide.sizex / bitmap.image.width;
        console.log(scale);
        bitmap.scaleX = scale;
        bitmap.scaleY = scale;

        bitmap.y = transform.provide.maxy- bitmap.image.height * scale;
    };
};

core.add_feature(new Floor());