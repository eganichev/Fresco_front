import Konva from "konva";

export const addLine = (currentTool, toolsList, stage, layer) => {
  if (currentTool !== toolsList.brush) {
    stage.off("mousemove touchmove");
  } else {
    let isPaint = false;
    let lastLine;

    stage.on("mousedown touchstart", () => {
      isPaint = true;
      let pos = stage.getPointerPosition();
      lastLine = new Konva.Line({
        stroke: "red",
        strokeWidth: 5,
        globalCompositeOperation: "source-over",
        points: [pos.x, pos.y],
      });
      layer.add(lastLine);
    });

    stage.on("mouseup touchend", () => {
      isPaint = false;
    });

    stage.on("mousemove touchmove", () => {
      if (!isPaint) return;
      const pos = stage.getPointerPosition();
      let newPoints = lastLine.points().concat([pos.x, pos.y]);
      lastLine.points(newPoints);
      layer.batchDraw();
    });
  }
};
