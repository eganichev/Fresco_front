import { useLayoutEffect, useState } from "react";
import { coefficients } from "./useCanvasLayoutConstants";

export function useCanvasLayout(headerSize, toolbarSize) {
  const [sizeCanvas, setSizeCanvas] = useState({});
  const [placeholders, setPlaceholders] = useState({});

  const conditionNonEmptyHeaderSizeArray = Object.keys(headerSize).length > 0;
  const conditionAbsenceUndefinedValueInHeaderSizeArray = !!Object.values(
    headerSize
  ).find((size) => typeof size === "number");

  const conditionNonEmptyToolbarSizeArray = Object.keys(toolbarSize).length > 0;
  const conditionAbsenceUndefinedValueInToolbarSizeArray = !!Object.values(
    toolbarSize
  ).find((size) => typeof size === "number");

  const finalCorrectCondition =
    conditionNonEmptyHeaderSizeArray &&
    conditionAbsenceUndefinedValueInHeaderSizeArray &&
    conditionNonEmptyToolbarSizeArray &&
    conditionAbsenceUndefinedValueInToolbarSizeArray;

  useLayoutEffect(() => {
    if (finalCorrectCondition) {
      const widthCanvas = window.innerWidth - toolbarSize.width;
      const heightCanvas = window.innerHeight - headerSize.height;

      setSizeCanvas({ width: widthCanvas, height: heightCanvas });

      const widthPlaceholderSmall = Math.floor(
        widthCanvas / coefficients.countSmallPlaceholder -
          coefficients.paddingSmallPlaceholder
      );
      const widthPlaceholderBig = Math.floor(
        widthPlaceholderSmall * coefficients.countBigPlaceholder
      );
      const heightPlaceholderSmall =
        Math.floor(heightCanvas / coefficients.fullPercent) *
        coefficients.heightSmallPlaceholderPercent;
      const heightPlaceholderBig =
        Math.floor(heightCanvas / coefficients.fullPercent) *
        coefficients.heightBigPlaceholderPercent;

      const widthPlaceholderAdaptiveSmall = Math.floor(
        widthCanvas / coefficients.countSmallPlaceholderAdaptive -
          coefficients.paddingSmallPlaceholderAdaptive
      );
      const widthPlaceholderAdaptiveBig = Math.floor(
        widthCanvas - coefficients.paddingBigPlaceholderAdaptive
      );
      const heightPlaceholderAdaptive = Math.floor(
        heightCanvas / coefficients.heightPlaceholderPercentAdaptive
      );

      const newPlaceholders = {
        widthSmall: widthPlaceholderSmall,
        widthBig: widthPlaceholderBig,
        heightSmall: heightPlaceholderSmall,
        heightBig: heightPlaceholderBig,
        widthSmallAdaptive: widthPlaceholderAdaptiveSmall,
        widthBigAdaptive: widthPlaceholderAdaptiveBig,
        heightAdaptive: heightPlaceholderAdaptive,
        placeholderNames: [
          "Key Partners",
          "Key Activities",
          "Value Propositions",
          "Customer Relationships",
          "Customer Segments",
          "Key Resources",
          "Channels",
          "Cost Structure",
          "Revenue Streams",
        ],
      };
      setPlaceholders(newPlaceholders);
    }
  }, [headerSize, toolbarSize, finalCorrectCondition]);
  return { sizeCanvas, placeholders };
}
