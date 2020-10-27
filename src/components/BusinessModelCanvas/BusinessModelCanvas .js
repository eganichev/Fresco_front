import React from "react";
import { Rect, Text } from "react-konva";
import { v4 as uuidv4 } from "uuid";

const BusinessModelCanvas = ({ sizeCanvas, placeholders }) => {
  const breakpoint = 1250;
  const color = "black";
  const font = "Montserrat";
  const stroke = 1;

  return (
    <>
      {Object.keys(placeholders).length > 0 &&
        placeholders.placeholderNames.map((placeholder, index) => {
          const deltaPositionX = 5;

          const keyPartnersPlaceholder = index === 0;
          const keyActivitiesPlaceholder = index === 1;
          const valuePropositionsPlaceholder = index === 2;
          const customerRelationshipsPlaceholder = index === 3;
          const customerSegmentsPlaceholder = index === 4;
          const keyResourcesPlaceholder = index === 5;
          const channelsPlaceholder = index === 6;
          const costStructurePlaceholder = index === 7;
          const revenueStreamsPlaceholder = index === 8;

          const breakpointPortrait = sizeCanvas.width <= breakpoint;

          const columnPortrait_1 = 30;
          const columnPortrait_2 = placeholders.widthSmallAdaptive + 30;
          const columnLandscape_Common = placeholders.widthSmall * index + 30;
          const columnLandscape_1 = 30;
          const columnLandscape_2 = placeholders.widthSmall * 1 + 30;
          const columnLandscape_4 = placeholders.widthSmall * 3 + 30;
          const columnLandscape_LastColumn = placeholders.widthBig + 30;

          const rowCommon_1 = 5;
          const rowLandscape_2 = placeholders.heightSmall / 2 + 10;
          const rowLandscape_3 = placeholders.heightSmall + 5;
          const rowPortrait_2 = placeholders.heightAdaptive + 5;
          const rowPortrait_3 = placeholders.heightAdaptive * 2 + 5;
          const rowPortrait_4 = placeholders.heightAdaptive * 3 + 5;
          const rowPortrait_5 = placeholders.heightAdaptive * 4 + 5;
          const rowPortrait_6 = placeholders.heightAdaptive * 5 + 5;
          const rowPortrait_7 = placeholders.heightAdaptive * 6 + 5;

          const heightSmallLandscape = placeholders.heightSmall;
          const heightBigLandscape = placeholders.heightBig;
          const heightSmallUpperLandscape = placeholders.heightSmall / 2 + 5;
          const heightSmallLowerLandscape = placeholders.heightSmall / 2 - 5;
          const heightDoublePortrait = placeholders.heightAdaptive * 2;
          const heightPortrait = placeholders.heightAdaptive;

          const coefficients = {
            width_xxl: sizeCanvas.width > 1920,
            width_xl: sizeCanvas.width <= 1920 && sizeCanvas.width >= 1600,
            width_l: sizeCanvas.width <= 1599 && sizeCanvas.width >= 1350,
            width_m: sizeCanvas.width <= 1349 && sizeCanvas.width >= 800,
            width_s: sizeCanvas.width <= 799 && sizeCanvas.width >= 400,
            font_xxl: 26,
            font_xl: 24,
            font_l: 20,
            font_m: 18,
            font_s: 16,
            font_xs: 14,
          };

          return (
            <React.Fragment key={uuidv4()}>
              <Rect
                x={
                  (costStructurePlaceholder || revenueStreamsPlaceholder) &&
                  breakpointPortrait
                    ? columnPortrait_1
                    : (keyActivitiesPlaceholder ||
                        customerSegmentsPlaceholder ||
                        keyResourcesPlaceholder) &&
                      breakpointPortrait
                    ? columnPortrait_2
                    : (valuePropositionsPlaceholder ||
                        customerRelationshipsPlaceholder ||
                        channelsPlaceholder) &&
                      breakpointPortrait
                    ? columnPortrait_1
                    : keyResourcesPlaceholder
                    ? columnLandscape_2
                    : channelsPlaceholder
                    ? columnLandscape_4
                    : costStructurePlaceholder
                    ? columnLandscape_1
                    : revenueStreamsPlaceholder
                    ? columnLandscape_LastColumn
                    : columnLandscape_Common
                }
                y={
                  valuePropositionsPlaceholder && breakpointPortrait
                    ? rowPortrait_3
                    : (customerRelationshipsPlaceholder ||
                        customerSegmentsPlaceholder) &&
                      breakpointPortrait
                    ? rowPortrait_4
                    : keyResourcesPlaceholder && breakpointPortrait
                    ? rowPortrait_2
                    : channelsPlaceholder && breakpointPortrait
                    ? rowPortrait_5
                    : costStructurePlaceholder && breakpointPortrait
                    ? rowPortrait_6
                    : revenueStreamsPlaceholder && breakpointPortrait
                    ? rowPortrait_7
                    : keyResourcesPlaceholder || channelsPlaceholder
                    ? rowLandscape_2
                    : costStructurePlaceholder || revenueStreamsPlaceholder
                    ? rowLandscape_3
                    : rowCommon_1
                }
                width={
                  (keyPartnersPlaceholder ||
                    keyActivitiesPlaceholder ||
                    customerRelationshipsPlaceholder ||
                    keyResourcesPlaceholder ||
                    customerSegmentsPlaceholder ||
                    channelsPlaceholder) &&
                  breakpointPortrait
                    ? placeholders.widthSmallAdaptive
                    : (valuePropositionsPlaceholder ||
                        costStructurePlaceholder ||
                        revenueStreamsPlaceholder) &&
                      breakpointPortrait
                    ? placeholders.widthBigAdaptive
                    : costStructurePlaceholder || revenueStreamsPlaceholder
                    ? placeholders.widthBig
                    : placeholders.widthSmall
                }
                height={
                  (keyPartnersPlaceholder || customerSegmentsPlaceholder) &&
                  breakpointPortrait
                    ? heightDoublePortrait
                    : (keyActivitiesPlaceholder ||
                        customerRelationshipsPlaceholder ||
                        keyResourcesPlaceholder ||
                        channelsPlaceholder) &&
                      breakpointPortrait
                    ? heightPortrait
                    : (valuePropositionsPlaceholder ||
                        costStructurePlaceholder ||
                        revenueStreamsPlaceholder) &&
                      breakpointPortrait
                    ? heightPortrait
                    : keyActivitiesPlaceholder ||
                      customerRelationshipsPlaceholder
                    ? heightSmallUpperLandscape
                    : keyResourcesPlaceholder || channelsPlaceholder
                    ? heightSmallLowerLandscape
                    : costStructurePlaceholder || revenueStreamsPlaceholder
                    ? heightBigLandscape
                    : heightSmallLandscape
                }
                stroke={color}
                strokeWidth={stroke}
              />
              <Text
                x={
                  (keyActivitiesPlaceholder ||
                    customerSegmentsPlaceholder ||
                    keyResourcesPlaceholder) &&
                  breakpointPortrait
                    ? columnPortrait_2 + deltaPositionX
                    : (valuePropositionsPlaceholder ||
                        customerRelationshipsPlaceholder ||
                        channelsPlaceholder ||
                        revenueStreamsPlaceholder) &&
                      breakpointPortrait
                    ? columnPortrait_1 + deltaPositionX
                    : keyResourcesPlaceholder
                    ? columnLandscape_2 + deltaPositionX
                    : channelsPlaceholder
                    ? columnLandscape_4 + deltaPositionX
                    : costStructurePlaceholder
                    ? columnPortrait_1 + deltaPositionX
                    : revenueStreamsPlaceholder
                    ? columnLandscape_LastColumn + deltaPositionX
                    : columnLandscape_Common + deltaPositionX
                }
                y={
                  valuePropositionsPlaceholder && breakpointPortrait
                    ? rowPortrait_3 + deltaPositionX
                    : (customerRelationshipsPlaceholder ||
                        customerSegmentsPlaceholder) &&
                      breakpointPortrait
                    ? rowPortrait_4 + deltaPositionX
                    : channelsPlaceholder && breakpointPortrait
                    ? rowPortrait_5 + deltaPositionX
                    : costStructurePlaceholder && breakpointPortrait
                    ? rowPortrait_6 + deltaPositionX
                    : revenueStreamsPlaceholder && breakpointPortrait
                    ? rowPortrait_7 + deltaPositionX
                    : keyResourcesPlaceholder && breakpointPortrait
                    ? rowPortrait_2 + deltaPositionX
                    : keyResourcesPlaceholder || channelsPlaceholder
                    ? rowLandscape_2 + deltaPositionX
                    : costStructurePlaceholder || revenueStreamsPlaceholder
                    ? rowLandscape_3 + deltaPositionX
                    : rowCommon_1 + deltaPositionX
                }
                text={placeholder}
                fontSize={
                  coefficients.width_xxl
                    ? coefficients.font_xxl
                    : coefficients.width_xl
                    ? coefficients.font_xl
                    : coefficients.width_l
                    ? coefficients.font_l
                    : coefficients.width_m
                    ? coefficients.font_m
                    : coefficients.width_s
                    ? coefficients.font_s
                    : coefficients.font_xs
                }
                fontFamily={font}
                fill={color}
              />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default BusinessModelCanvas;
