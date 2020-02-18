function tintLayer(layer) {
    var tintEffect = layer.Effects.addProperty("ADBE Tint");
    tintEffect.property(2).setValue([Math.random(), Math.random(), Math.random()]);
    }