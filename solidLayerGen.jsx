function generateSolidLayer(comp) {
    var solidLayer = comp.layers.addSolid([1, 1, 1], "Special Solid", comp.width, comp.height, 1, comp.duration);
    
    return solidLayer;
    }