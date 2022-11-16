import React from "react";
import { useTheme, Flex, Box } from "@onions/core";

const ColorPage = () => {
  const { colors } = useTheme();

  const themColors = Object.entries(colors).sort(([key1], [key2]) => {
    if (key1.length === key2.length) key1 > key2 ? 1 : -1;
    return key1.length - key2.length;
  });

  const redColors = themColors.filter(([key]) => /^red[^a-zA-Z]*$/.test(key));
  const blueColors = themColors.filter(([key]) => /^blue[^a-zA-Z]*$/.test(key));
  const greenColors = themColors.filter(([key]) =>
    /^green[^a-zA-Z]*$/.test(key)
  );
  const primaryColor = themColors.filter(([key]) =>
    /^primary[^a-zA-Z]*$/.test(key)
  );
  const secondaryColor = themColors.filter(([key]) =>
    /^secondary[^a-zA-Z]*$/.test(key)
  );

  const primaryAlphaColor = themColors.filter(([key]) =>
    /^primaryA[^a-zA-Z]*$/.test(key)
  );
  return (
    <Box>
      {[
        redColors,
        blueColors,
        greenColors,
        primaryColor,
        secondaryColor,
        primaryAlphaColor,
      ].map((dColors, index) => (
        <Flex direction="row" gap="s16" key={index}>
          {dColors.map(([key, value]) => (
            <Box
              key={key}
              backgroundColor={key as any}
              width={100}
              height={100}
            >
              <Box>{key}</Box>
              <Box>{value}</Box>
            </Box>
          ))}
        </Flex>
      ))}
    </Box>
  );
};

export default ColorPage;
