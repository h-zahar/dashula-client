import React from "react";
import DashBox from "@/components/utils/dashBox";

type Props = NonNullable<unknown>;

const Segment3 = (props: Props) => {
  return (
    <>
      <DashBox gridArea="g" />
      <DashBox gridArea="h" />
      <DashBox gridArea="i" />
      <DashBox gridArea="j" />
    </>
  );
};

export default Segment3;
