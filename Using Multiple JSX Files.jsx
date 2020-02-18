#include randomRGBTint.jsx
#include solidLayerGen.jsx

app.beginUndoGroup("Multiple Files Process");
main(app.project);
app.endUndoGroup();

function main(project) {
    var comp = project.activeItem;
    if(comp == null || !(comp instanceof CompItem)) {
        comp = project.items.addComp("Test Comp", 1920, 1080, 1, 20, 30);
        comp.openInViewer();
        }
    var layer = generateSolidLayer(comp);
    tintLayer(layer);
    }